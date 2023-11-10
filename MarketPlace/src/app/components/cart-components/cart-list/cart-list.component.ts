import { Component } from '@angular/core';
import { CartService } from 'src/app/services/cart-services/cart.service';

@Component({
  selector: 'app-cart-list',
  templateUrl: './cart-list.component.html',
  styleUrls: ['./cart-list.component.css'],
})
export class CartListComponent {
  showCompleted: boolean = false;

  showPending() {
    this.showCompleted = false;
  }

  showCompletedBuys() {
    this.showCompleted = true;
  }
}
