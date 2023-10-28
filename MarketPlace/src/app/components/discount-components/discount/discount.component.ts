import { Component } from '@angular/core';
import { DiscountService } from 'src/app/services/discount.service';
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
  discountList: Discount[] = [];
  displayedColumns: string[] = ['value', 'state', 'edit', 'delete'];

  constructor(
    private discountService: DiscountService,
    private notificationService: NotificationService,
  ) {}

  ngOnInit() {
    this.discountService.getDiscounts().subscribe((res: any) => {
      this.discountList = res;
    });
  }

  onDelete(id: Number) {
    this.discountService.deleteDiscount(id).subscribe(
      (res: any) => {
        this.discountList = this.discountList.filter((dis) => dis._id != id);
        this.notificationService.showSuccessNotification('Discount deleted');
      },
      (error) => {
        this.notificationService.showErrorNotification(
          'Failed to delete discount',
        );
      },
    );
  }
}
