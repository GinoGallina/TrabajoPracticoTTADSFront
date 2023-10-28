import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { DiscountService } from 'src/app/services/discount.service';
import { NotificationService } from 'src/app/services/notification-services/notification.service';

@Component({
  selector: 'app-create-discount',
  templateUrl: './create-discount.component.html',
  styleUrls: ['./create-discount.component.css'],
})
export class CreateDiscountComponent implements OnInit {
  discountForm!: FormGroup;

  constructor(
    private discountService: DiscountService,
    private formBuilder: FormBuilder,
    private notificationService: NotificationService,
    private router: Router,
  ) {}

  ngOnInit(): void {
    this.discountForm = this.formBuilder.group({
      value: [
        '',
        [Validators.required, Validators.min(1), Validators.max(100)],
      ],
    });
  }

  onSubmit() {
    if (this.discountForm.valid) {
      this.discountService.createDiscount(this.discountForm.value).subscribe(
        (res: any) => {
          this.notificationService.showSuccessNotification(
            'Discount created successfully',
          );
          this.router.navigate(['/discount']);
        },
        (error) => {
          this.notificationService.showErrorNotification(
            `Failed to create discount${error.error.message}`,
          );
        },
      );
    } else {
      // Form is invalid, show validation errors to the user
      // You can use the Angular Material form field's error state to display errors
    }
  }
}
