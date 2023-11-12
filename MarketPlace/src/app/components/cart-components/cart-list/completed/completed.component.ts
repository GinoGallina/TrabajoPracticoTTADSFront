import { Component } from '@angular/core';
import { CartItem } from 'src/app/interfaces/cart';
import { CartService } from 'src/app/services/cart-services/cart.service';

@Component({
  selector: 'app-completed',
  templateUrl: './completed.component.html',
  styleUrls: ['./completed.component.css'],
})
export class CompletedComponent {
  constructor(private cartService: CartService) {}
  cartList: CartItem[] = [];
  totalItems: number = 0;
  totalAmount!: Number;

  ngOnInit(): void {
    this.cartService.getCart('Completed').subscribe((res: any) => {
      this.cartList = res;
      this.totalItems = this.cartList[0].orders.length;
      this.totalAmount = this.cartList[0].orders.reduce(
        (total, item) => total + item.amount * item.quantity,
        0
      );
    });
  }

  toggleDetails(index: number): void {
    this.cartList[index].expanded = !this.cartList[index].expanded;
  }
}
