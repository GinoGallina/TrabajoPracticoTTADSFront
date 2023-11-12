import { Component } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { Router } from '@angular/router';
import { Category } from 'src/app/interfaces/category';
import { AuthService } from 'src/app/services/auth-services/auth.service';
import { CategoryService } from 'src/app/services/category-services/category.service';
import { NotificationService } from 'src/app/services/notification-services/notification.service';
import { ProductService } from 'src/app/services/product-service/product.service';

@Component({
  selector: 'app-create-product',
  templateUrl: './create-product.component.html',
  styleUrls: ['./create-product.component.css'],
})
export class CreateProductComponent {
  productForm!: FormGroup;
  categories!: Category[];
  seller!: String;
  constructor(
    private authService: AuthService,
    private productService: ProductService,
    private categoryService: CategoryService,
    private formBuilder: FormBuilder,
    private notificationService: NotificationService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.seller = this.authService.getUser()._id;
    this.productForm = this.formBuilder.group({
      seller: new FormControl(this.seller, [Validators.required]),
      price: new FormControl('', [Validators.required, Validators.min(0)]),
      stock: new FormControl('', [Validators.required, Validators.min(0)]),
      state: new FormControl('', [Validators.required]),
      name: new FormControl('', [Validators.required]),
      img: new FormControl('', [Validators.required]),
      description: new FormControl('', [Validators.required]),
      category: new FormControl('', [Validators.required]),
    });

    this.categoryService.getCategories().subscribe((res: any) => {
      this.categories = res;
    });
  }

  onSubmit() {
    if (this.productForm.valid) {
      this.productService.createProduct(this.productForm.value).subscribe(
        (res: any) => {
          this.notificationService.showSuccessNotification(
            'product created successfully'
          );
          this.router.navigate(['/products']);
        },
        (error) => {
          this.notificationService.showErrorNotification(
            `Failed to create product${error.error.message}`
          );
        }
      );
    } else {
      console.log('Invalid from data');
    }
  }
}
