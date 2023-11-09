import { Component } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { Router } from '@angular/router';
import { NotificationService } from 'src/app/services/notification-services/notification.service';
import { ProductService } from 'src/app/services/product-service/product.service';

@Component({
  selector: 'app-create-product',
  templateUrl: './create-product.component.html',
  styleUrls: ['./create-product.component.css'],
})
export class CreateProductComponent {
  productForm!: FormGroup;

  constructor(
    private productService: ProductService,
    private formBuilder: FormBuilder,
    private notificationService: NotificationService,
    private router: Router,
  ) {}

  ngOnInit(): void {
    this.productForm = this.formBuilder.group({
      seller: new FormControl('', [Validators.required]),
      price: new FormControl('', [Validators.required, Validators.min(0)]),
      stock: new FormControl('', [Validators.required, Validators.min(0)]),
      state: new FormControl('', [Validators.required]),
      name: new FormControl('', [Validators.required]),
      img: new FormControl('', [Validators.required]),
      description: new FormControl('', [Validators.required]),
      category: new FormControl('', [Validators.required]),
    });
  }

  onSubmit() {
    if (this.productForm.valid) {
      this.productService.createProduct(this.productForm.value).subscribe(
        (res: any) => {
          this.notificationService.showSuccessNotification(
            'product created successfully',
          );
          this.router.navigate(['/product']);
        },
        (error) => {
          this.notificationService.showErrorNotification(
            `Failed to create product${error.error.message}`,
          );
        },
      );
    } else {
      // Form is invalid, show validation errors to the user
      // You can use the Angular Material form field's error state to display errors
    }
  }
}
