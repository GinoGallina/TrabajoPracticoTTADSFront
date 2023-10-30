import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { DiscountService } from 'src/app/services/discount-services/discount.service';
import { NotificationService } from 'src/app/services/notification-services/notification.service';

interface Discount {
  _id: Number;
  value: Number;
  state: string;
  createdAt: string;
  updatedAt: string;
  category: any;
}
@Component({
  selector: 'app-discount',
  templateUrl: './discount.component.html',
  styleUrls: ['./discount.component.css'],
})
export class DiscountComponent {
  DiscountList: Discount[] = [];
  displayedColumns: string[] = ['value', 'state', 'edit', 'delete'];

  constructor(
    private discountService: DiscountService,
    private notificationService: NotificationService,
    private route: ActivatedRoute
  ) {}

  ngOnInit() {
    this.discountService.getDiscounts().subscribe((res: any) => {
      this.DiscountList = res;
    });
  }

  onDelete(id: Number) {
    this.discountService.deleteDiscount(id).subscribe(
      (res: any) => {
        this.DiscountList = this.DiscountList.filter((dis) => dis._id != id);
        this.notificationService.showSuccessNotification('Discount deleted');
      },
      (error) => {
        this.notificationService.showErrorNotification(
          'Failed to delete discount'
        );
      }
    );
  }
}
