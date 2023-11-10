import { Component } from '@angular/core';
import { CartService } from 'src/app/services/cart-services/cart.service';
import { CartItem } from 'src/app/interfaces/cart';
import { PaymentTypeService } from 'src/app/services/payment-type/payment-type.service';
import { PaymentType } from 'src/app/interfaces/payment_type';

@Component({
  selector: 'app-pending',
  templateUrl: './pending.component.html',
  styleUrls: ['./pending.component.css'],
})
export class PendingComponent {
  constructor(
    private cartService: CartService,
    private paymentTypeService: PaymentTypeService
  ) {}
  cartList!: CartItem[];
  paymentTypes!: PaymentType[];
  totalItems: number = 0;
  totalAmount!: Number;

  ngOnInit(): void {
    this.cartService.getCart('Pending').subscribe((res: any) => {
      this.cartList = res;
      this.totalItems = this.cartList[0].orders.length;
      this.totalAmount = this.cartList[0].orders.reduce(
        (total, item) => total + item.amount * item.quantity,
        0
      );
    });

    this.paymentTypeService.getPaymentTypes().subscribe((res: any) => {
      this.paymentTypes = res;
      console.log(this.paymentTypes);
    });
  }
}
