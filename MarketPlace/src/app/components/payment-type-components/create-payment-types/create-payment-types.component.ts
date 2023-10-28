import { Component } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { NotificationService } from 'src/app/services/notification-services/notification.service';
import { PaymentTypeService } from 'src/app/services/payment-type/payment-type.service';

@Component({
  selector: 'app-create-payment-types',
  templateUrl: './create-payment-types.component.html',
  styleUrls: ['./create-payment-types.component.css'],
})
export class CreatePaymentTypesComponent {
  paymentTypeForm!: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private paymentTypeService: PaymentTypeService,
    private notificationService: NotificationService,
    private router: Router,
  ) {}

  ngOnInit(): void {
    this.paymentTypeForm = this.formBuilder.group({
      type: ['', [Validators.required, Validators.maxLength(50)]],
    });
  }
  onSubmit() {
    if (this.paymentTypeForm.valid) {
      this.paymentTypeService
        .createPaymentType(this.paymentTypeForm.value)
        .subscribe(
          (res) => {
            this.notificationService.showSuccessNotification(
              'Payment type created successfully',
            );
            this.router.navigate(['/payment_type']);
          },
          (error) => {
            //VER DE CAMBIAR ESTO O NO
            this.notificationService.showErrorNotification(
              `Failed to create Payment type - ` + error.error.error[0].message,
            );
          },
        );
    } else {
      // Form is invalid, show validation errors to the user
      // You can use the Angular Material form field's error state to display errors
    }
  }
}
