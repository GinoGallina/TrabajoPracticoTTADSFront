import { Component } from '@angular/core';
import { CategoryService } from '../../../services/category-services/category.service';
import { NotificationService } from 'src/app/services/notification-services/notification.service';

interface Category {
  _id: Number;
  category: string;
  state: string;
  createdAt: string;
  updatedAt: string;
  __v: number;
}

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css'],
})
export class CategoryComponent {
  constructor(
    private categoryService: CategoryService,
    private notificationService: NotificationService
  ) {}
  CategoryList: Category[] = [];

  ngOnInit(): void {
    this.categoryService.getCategories().subscribe((res: any) => {
      this.CategoryList = res;
    });
  }

  onDelete(id: Number) {
    this.categoryService.deleteCategory(id).subscribe(
      (res: any) => {
        // Filter out the deleted category from the CategoryList array
        this.CategoryList = this.CategoryList.filter((cat) => cat._id != id);
        this.notificationService.showSuccessNotification('Categoria Eliminada');
      },
      (error) => {
        this.notificationService.showErrorNotification(
          'Ocurrió un error eliminado la categoria'
        );
      }
    );
  }

  displayedColumns: string[] = [
    'category',
    'state',
    'discounts',
    'edit',
    'delete',
  ];
}
