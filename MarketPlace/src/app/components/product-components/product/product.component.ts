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
    const token = this.authService.getToken()
    if(token){
      this.seller = this.authService.getUser(token)._id;
      this.productService.getProducts(this.seller).subscribe((res: any) => {
        this.ProductList = res;
      });
    }
  }
  onDelete(id: String) {
    this.productService.deleteProduct(id).subscribe(
      (res: any) => {
        this.notificationService.showSuccessNotification('Product Archived');
        this.ProductList = this.ProductList.map((product) => {
          if (product._id === id) {
            return { ...product, state: 'Archived' };
          }
          return product;
        });
      },
      (error) => {
        this.notificationService.showErrorNotification(
          'Failed to delete Product'
        );
      }
    );
  }
}
