import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { NotificationService } from 'src/app/services/notification-services/notification.service';
import { ProductService } from 'src/app/services/product-service/product.service';

@Component({
  selector: 'app-edit-product',
  templateUrl: './edit-product.component.html',
  styleUrls: ['./edit-product.component.css'],
})
export class EditProductComponent implements OnInit {
  productId!: String;
  productFormEdit!: FormGroup;

  constructor(
    private productService: ProductService,
    private route: ActivatedRoute,
    private notificationService: NotificationService,
    private router: Router
  ) {}
  ngOnInit() {
    this.productId = this.route.snapshot.params['id'];

    // Initialize the form group with form controls and validators
    this.productFormEdit = new FormGroup({
      seller: new FormControl('', [Validators.required]),
      price: new FormControl('', [Validators.required, Validators.min(0)]),
      stock: new FormControl('', [Validators.required, Validators.min(0)]),
      state: new FormControl('', [Validators.required]),
      name: new FormControl('', [Validators.required]),
      description: new FormControl('', [Validators.required]),
      category: new FormControl('', [Validators.required]),
    });

    // Fetch the product data for editing
    this.productService
      .getOneProduct(this.productId)
      .subscribe((product: any) => {
        this.productFormEdit.setValue({
          stock: product.stock,
          seller: product.seller,
          name: product.name,
          description: product.description,
          categoty: product.category,
          price: product.price,
          state: product.state,
        });
      });
  }

  onSubmit() {
    if (this.productFormEdit.valid) {
      const formData = this.productFormEdit.value;
      this.productService.editProduct(this.productId, formData).subscribe(
        (res: any) => {
          console.log('product updated successfully:', res);
          this.notificationService.showSuccessNotification('product updated');
          this.router.navigate(['/product']);
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
