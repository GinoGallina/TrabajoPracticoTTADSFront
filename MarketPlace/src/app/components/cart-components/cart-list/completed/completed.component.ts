import { Component } from '@angular/core';

@Component({
  selector: 'app-completed',
  templateUrl: './completed.component.html',
  styleUrls: ['./completed.component.css'],
})
export class CompletedComponent {
  completedPurchases: any[] = [
    // Example data - replace with real data
    {
      id: '123',
      date: new Date(),
      amount: 299.99,
      shipmentStatus: 'completed',
      products: [
        { name: 'Product 1', quantity: 2, price: 50 },
        { name: 'Product 2', quantity: 1, price: 199.99 },
      ],
    },
    {
      id: '123',
      date: new Date(),
      amount: 299.99,
      shipmentStatus: 'completed',
      products: [
        { name: 'Product 1', quantity: 2, price: 50 },
        { name: 'Product 2', quantity: 1, price: 199.99 },
      ],
    },
    // ... other purchases
  ];

  toggleDetails(index: number): void {
    this.completedPurchases[index].expanded =
      !this.completedPurchases[index].expanded;
  }
}
