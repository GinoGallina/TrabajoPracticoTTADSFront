import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CategoryService } from '../../../services/category.service';
import { NotificationService } from 'src/app/services/notification-services/notification.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-create-category',
  templateUrl: './create-category.component.html',
  styleUrls: ['./create-category.component.css'],
})
export class CreateCategoryComponent implements OnInit {
  categoryForm!: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private categoryService: CategoryService,
    private notificationService: NotificationService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.categoryForm = this.formBuilder.group({
      category: ['', [Validators.required, Validators.maxLength(50)]],
    });
  }
  onSubmit() {
    if (this.categoryForm.valid) {
      this.categoryService.createCategory(this.categoryForm.value).subscribe(
        (res) => {
          this.notificationService.showSuccessNotification(
            'Category created successfully'
          );
          this.router.navigate(['/category']);
        },
        (error) => {
          this.notificationService.showErrorNotification(
            `Failed to create category${error.error.message}`
          );
        }
      );
    } else {
      // Form is invalid, show validation errors to the user
      // You can use the Angular Material form field's error state to display errors
    }
  }
}
