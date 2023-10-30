import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { CategoryService } from 'src/app/services/category-services/category.service';
import { NotificationService } from '../../../services/notification-services/notification.service';

@Component({
  selector: 'app-edit-category',
  templateUrl: './edit-category.component.html',
  styleUrls: ['./edit-category.component.css'],
})
export class EditCategoryComponent implements OnInit {
  categoryId!: number;
  categoryFormEdit!: FormGroup;

  constructor(
    private categoryService: CategoryService,
    private route: ActivatedRoute,
    private router: Router,
    private notificationService: NotificationService,
  ) {}

  ngOnInit(): void {
    this.categoryId = this.route.snapshot.params['id'];

    // Initialize the form group with form controls and validators
    this.categoryFormEdit = new FormGroup({
      category: new FormControl('', [Validators.required]),
      state: new FormControl('', [Validators.required]),
    });

    // Fetch the category data for editing
    this.categoryService
      .getOneCategory(this.categoryId)
      .subscribe((category: any) => {
        this.categoryFormEdit.setValue({
          category: category.category,
          state: category.state,
        });
      });
  }

  onSubmit() {
    if (this.categoryFormEdit.valid) {
      const formData = this.categoryFormEdit.value;

      this.categoryService.editCategory(this.categoryId, formData).subscribe(
        (response) => {
          console.log('Category updated successfully:', response);
          this.notificationService.showSuccessNotification('Categoria editada');
          this.router.navigate(['/category']);
        },
        (error) => {
          this.notificationService.showErrorNotification(
            'No se pudo editar la categoria',
          );
        },
      );
    } else {
      console.log('Invalid form data');
    }
  }
}
