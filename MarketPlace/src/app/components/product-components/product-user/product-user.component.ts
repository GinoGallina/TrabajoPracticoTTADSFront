import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/interfaces/product';
import { AuthService } from 'src/app/services/auth-services/auth.service';
import { NotificationService } from 'src/app/services/notification-services/notification.service';
import { ProductService } from 'src/app/services/product-service/product.service';

@Component({
  selector: 'app-product-user',
  templateUrl: './product-user.component.html',
  styleUrls: ['./product-user.component.css'],
})
export class ProductUserComponent implements OnInit {
  allProductList: Product[] = [];
  filteredProducts: Product[] = [];
  user!: string;
  searchQuery: string = '';
  searchBy: string = 'category';

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
    private authService: AuthService,
  ) {}

  ngOnInit(): void {
    this.user = this.authService.getUser()._id;
    this.productService.getAllProducts().subscribe((res: any) => {
      this.allProductList = res;
      this.filteredProducts = res;
      console.log(res);
    });
  }
  detalle(id: String) {}

  filterProducts() {
    const query = this.searchQuery.toLowerCase();
    this.filteredProducts = this.allProductList.filter((product) => {
      if(query==''){
        return this.allProductList
      }
      if (this.searchBy === 'category') {
        return product.category.category.toLowerCase().includes(query);
      } else if (this.searchBy === 'seller') {
        return product.seller.email.toLowerCase().includes(query);
      }
      return false;
    });
  }
}
