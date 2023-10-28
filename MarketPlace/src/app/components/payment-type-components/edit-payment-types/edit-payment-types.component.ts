import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { NotificationService } from 'src/app/services/notification-services/notification.service';
import { PaymentTypeService } from 'src/app/services/payment-type/payment-type.service';

@Component({
  selector: 'app-edit-payment-types',
  templateUrl: './edit-payment-types.component.html',
  styleUrls: ['./edit-payment-types.component.css']
})
export class EditPaymentTypesComponent {
  paymentTypeId!: number;
  paymentTypeFormEdit!: FormGroup;

  constructor(
    private paymentTypeService: PaymentTypeService,
    private route: ActivatedRoute,
    private router: Router,
    private notificationService: NotificationService
  ) { }

  ngOnInit(): void {
    this.paymentTypeId = this.route.snapshot.params['id'];

    // Initialize the form group with form controls and validators
    this.paymentTypeFormEdit = new FormGroup({
      type: new FormControl('', [Validators.required]),
      state: new FormControl('', [Validators.required])
    });

    // Fetch the paymentType data for editing
    this.paymentTypeService.getOnePaymentType(this.paymentTypeId).subscribe((paymentType: any) => {
      this.paymentTypeFormEdit.setValue({
        paymentType: paymentType.type,
        state: paymentType.state
      });
    });
  }

  onSubmit() {
    if (this.paymentTypeFormEdit.valid) {
      const formData = this.paymentTypeFormEdit.value;

      this.paymentTypeService.editPaymentType(this.paymentTypeId, formData).subscribe(
        (response) => {
          console.log('paymentType updated successfully:', response);
          this.notificationService.showSuccessNotification('Payment Type editada')
          this.router.navigate(['/payment_type']);
        },
        (error) => {
          this.notificationService.showErrorNotification('No se pudo editar la Payment Type')
        }
      );
    } else {
      console.log('Invalid form data');
    }
  }
}
