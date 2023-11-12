import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { Router } from '@angular/router';
import { Category } from 'src/app/interfaces/category.js';
import { CategoryService } from 'src/app/services/category-services/category.service';
import { DiscountService } from 'src/app/services/discount-services/discount.service';
import { NotificationService } from 'src/app/services/notification-services/notification.service';

@Component({
  selector: 'app-create-discount',
  templateUrl: './create-discount.component.html',
  styleUrls: ['./create-discount.component.css'],
})
export class CreateDiscountComponent implements OnInit {
  discountForm!: FormGroup;
  categories!: Category[];
  constructor(
    private discountService: DiscountService,
    private formBuilder: FormBuilder,
    private notificationService: NotificationService,
    private router: Router,
    private categoryService: CategoryService
  ) {}

  ngOnInit(): void {
    this.discountForm = this.formBuilder.group({
      value: new FormControl('', [
        Validators.required,
        Validators.min(1),
        Validators.max(100),
      ]),
      state: new FormControl('', [Validators.required]),
      category: new FormControl('', [Validators.required]),
    });
    this.categoryService.getCategories().subscribe((res: any) => {
      this.categories = res;
    });
  }

  onSubmit() {
    if (this.discountForm.valid) {
      this.discountService.createDiscount(this.discountForm.value).subscribe(
        (res: any) => {
          this.notificationService.showSuccessNotification(
            'Discount created successfully'
          );
          this.router.navigate(['/discount']);
        },
        (error) => {
          this.notificationService.showErrorNotification(
            `Failed to create discount${error.error.message}`
          );
        }
      );
    } else {
      console.log('Invalid from data');
    }
  }
}
