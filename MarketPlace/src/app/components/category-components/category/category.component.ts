import { Component } from '@angular/core';
import { CategoryService } from '../../../services/category-services/category.service';
import { NotificationService } from 'src/app/services/notification-services/notification.service';
import { Category } from 'src/app/interfaces/category.js';

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
  panelOpenState = false;
  CategoryList: Category[] = [];

  ngOnInit(): void {
    this.categoryService.getCategories().subscribe((res: any) => {
      this.CategoryList = res;
    });
  }

  onDelete(id: String) {
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
  showAdditionalTable = false;

  toggleDetails(index: number): void {
    this.CategoryList[index].expanded = !this.CategoryList[index].expanded;
  }

  displayedColumns: string[] = ['value', 'state'];
}
