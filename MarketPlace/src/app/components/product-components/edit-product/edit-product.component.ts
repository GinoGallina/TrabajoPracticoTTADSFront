import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { NotificationService } from 'src/app/services/notification-services/notification.service';
import { ProductService } from 'src/app/services/product-service/product.service';
import { AuthService } from 'src/app/services/auth-services/auth.service';
import { CategoryService } from 'src/app/services/category-services/category.service';
import { Category } from 'src/app/interfaces/category';
@Component({
  selector: 'app-edit-product',
  templateUrl: './edit-product.component.html',
  styleUrls: ['./edit-product.component.css'],
})
export class EditProductComponent implements OnInit {
  productId!: String;
  productFormEdit!: FormGroup;
  seller!: String;
  categories!: Category[];
  constructor(
    private authService: AuthService,
    private productService: ProductService,
    private route: ActivatedRoute,
    private notificationService: NotificationService,
    private router: Router,
    private categoryService: CategoryService
  ) {}
  ngOnInit() {
    this.productId = this.route.snapshot.params['id'];
    const token = this.authService.getToken()
    if(token){
      this.seller = this.authService.getUser(token)._id;
    }

    this.productFormEdit = new FormGroup({
      seller: new FormControl(this.seller, [Validators.required]),
      id: new FormControl('', Validators.required),
      price: new FormControl('', [Validators.required, Validators.min(0)]),
      stock: new FormControl('', [Validators.required, Validators.min(0)]),
      state: new FormControl('', [Validators.required]),
      name: new FormControl('', [Validators.required]),
      description: new FormControl('', [Validators.required]),
      category: new FormControl('', [Validators.required]),
      img: new FormControl('', [Validators.required]),
    });

    this.productService
      .getOneProduct(this.productId)
      .subscribe((product: any) => {
        this.productFormEdit.patchValue({
          id: product._id,
          stock: product.stock,
          name: product.name,
          description: product.description,
          category: product.category._id,
          price: product.price,
          state: product.state,
          img: product.img,
        });
      });
    this.categoryService.getCategories().subscribe((res: any) => {
      this.categories = res;
    });
  }

  onSubmit() {
    if (this.productFormEdit.valid) {
      const formData = this.productFormEdit.value;
      this.productService.editProduct(this.productId, formData).subscribe(
        (res: any) => {
          this.notificationService.showSuccessNotification('product updated');
          this.router.navigate(['/productsSeller']);
        },
        (error) => {
          this.notificationService.showErrorNotification(
            'Failed to update product'
          );
        }
      );
    } else {
      console.log('Invalid from data');
    }
  }
}
