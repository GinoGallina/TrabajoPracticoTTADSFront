import { Component, OnInit } from '@angular/core';
import { filter, first } from 'rxjs';
import { AuthService } from 'src/app/services/auth-services/auth.service';
import { NotificationService } from 'src/app/services/notification-services/notification.service';
import { ProductService } from 'src/app/services/product-service/product.service';
import { Product } from 'src/app/interfaces/product';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css'],
})
export class ProductComponent implements OnInit {
  ProductList: Product[] = [];
  seller!: string;
  displayedColumns: string[] = [
    'category',
    'name',
    'description',
    'price',
    'stock',
    'edit',
    'img',
    'delete',
  ];

  constructor(
    private productService: ProductService,
    private notificationService: NotificationService,
    private authService: AuthService
  ) {}

  ngOnInit(): void {
    this.seller = this.authService.getUser()._id;
    this.productService.getProducts(this.seller).subscribe((res: any) => {
      this.ProductList = res;
    });
  }
  onDelete(id: String) {
    this.productService.deleteProduct(id).subscribe(
      (res: any) => {
        this.ProductList = this.ProductList.filter((dis) => dis._id != id);
        this.notificationService.showSuccessNotification('Product deleted');
      },
      (error) => {
        this.notificationService.showErrorNotification(
          'Failed to delete Product'
        );
      }
    );
  }
}
