import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { DiscountService } from 'src/app/services/discount-services/discount.service';
import { NotificationService } from 'src/app/services/notification-services/notification.service';

@Component({
  selector: 'app-edit-discount',
  templateUrl: './edit-discount.component.html',
  styleUrls: ['./edit-discount.component.css'],
})
export class EditDiscountComponent {
  discountId!: number;
  discountFormEdit!: FormGroup;

  constructor(
    private discountService: DiscountService,
    private route: ActivatedRoute,
    private router: Router,
    private notificationService: NotificationService
  ) {}

  ngOnInit(): void {
    this.discountId = this.route.snapshot.params['id'];

    // Initialize the form group with form controls and validators
    this.discountFormEdit = new FormGroup({
      value: new FormControl('', [
        Validators.required,
        Validators.min(1),
        Validators.max(100),
      ]),
      state: new FormControl('', [Validators.required]),
    });

    // Fetch the discount data for editing
    this.discountService
      .getOneDiscount(this.discountId)
      .subscribe((discount: any) => {
        this.discountFormEdit.setValue({
          value: discount.value,
          state: discount.state,
        });
      });
  }

  onSubmit() {
    if (this.discountFormEdit.valid) {
      const formData = this.discountFormEdit.value;
      this.discountService.editDiscount(this.discountId, formData).subscribe(
        (res: any) => {
          this.notificationService.showSuccessNotification('Discount updated');
          this.router.navigate(['/discount']);
        },
        (error) => {
          this.notificationService.showErrorNotification(
            'Failed to update discount'
          );
        }
      );
    } else {
      console.log('Invalid from data');
    }
  }
}
