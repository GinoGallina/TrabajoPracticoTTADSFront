import { Component, OnInit } from '@angular/core';
import { NotificationService } from 'src/app/services/notification-services/notification.service';
import { PaymentTypeService } from 'src/app/services/payment-type/payment-type.service';


interface PaymentType {
  _id: string;
  type: string;
  state: string;
  createdAt: string;
  updatedAt: string;
  __v: number;
}



@Component({
  selector: 'app-payment-types',
  templateUrl: './payment-types.component.html',
  styleUrls: ['./payment-types.component.css']
})




export class PaymentTypesComponent implements OnInit{

  constructor(private paymentTypeService: PaymentTypeService, private notificationService: NotificationService) { }
  PaymentTypeList: PaymentType[] = []

  ngOnInit(): void {
    this.paymentTypeService.getPaymentTypes().subscribe((res: any) => {
      this.PaymentTypeList = res
    })
  }

  onDelete(id: String) {
    this.paymentTypeService.deletePaymentType(id).subscribe(
      (res: any) => {

        // Filter out the deleted category from the CategoryList array
        this.PaymentTypeList = this.PaymentTypeList.filter((cat) => cat._id != id);
        this.notificationService.showSuccessNotification('Tipo de pago Eliminada')
      },
      (error) => {
        this.notificationService.showErrorNotification('Ocurrió un error eliminado el Tipo de pago')
      }
    );
  }

  displayedColumns: string[] = ['paymentType', 'state', 'edit', 'delete'];
}

