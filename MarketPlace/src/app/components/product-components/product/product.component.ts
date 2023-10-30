import { Component, OnInit } from '@angular/core';
import { NotificationService } from 'src/app/services/notification-services/notification.service';
import { ProductService } from 'src/app/services/product-service/product.service';
interface Product {
  _id: String;
  category: any;
  seller: any;
  name: String;
  state: String;
  description: string;
  price: Number;
  strock: Number;
  img: string;
  createdAt: string;
  updatedAt: string;
}
@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css'],
})
export class ProductComponent implements OnInit {
  ProductList: Product[] = [];
  seller: string = '6535cfab26e6c0e76d9dba6d';
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
    private notificationService: NotificationService
  ) {}
  ngOnInit(): void {
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
