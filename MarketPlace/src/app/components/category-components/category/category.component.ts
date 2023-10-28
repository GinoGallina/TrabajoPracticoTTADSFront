import { Component } from '@angular/core';
import { CategoryService } from '../../../services/category-services/category.service';
import { NotificationService } from 'src/app/services/notification-services/notification.service';


export interface PeriodicElement {
  name: string;
  position: number;
  weight: number;
  symbol: string;
}
interface Category {
  _id: string;
  category: string;
  state: string;
  createdAt: string;
  updatedAt: string;
  __v: number;
}


const ELEMENT_DATA: PeriodicElement[] = [
  {position: 1, name: 'Hydrogen', weight: 1.0079, symbol: 'H'},
  {position: 2, name: 'Helium', weight: 4.0026, symbol: 'He'},
  {position: 3, name: 'Lithium', weight: 6.941, symbol: 'Li'},
  {position: 4, name: 'Beryllium', weight: 9.0122, symbol: 'Be'},
  {position: 5, name: 'Boron', weight: 10.811, symbol: 'B'},
  {position: 6, name: 'Carbon', weight: 12.0107, symbol: 'C'},
  {position: 7, name: 'Nitrogen', weight: 14.0067, symbol: 'N'},
  {position: 8, name: 'Oxygen', weight: 15.9994, symbol: 'O'},
  {position: 9, name: 'Fluorine', weight: 18.9984, symbol: 'F'},
  {position: 10, name: 'Neon', weight: 20.1797, symbol: 'Ne'},
];

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css'],

})

export class CategoryComponent {
  constructor(private categoryService:CategoryService, private notificationService:NotificationService){}
  CategoryList: Category[] = []

  ngOnInit(): void{
    this.categoryService.getCategories().subscribe((res:any) => {
      this.CategoryList = res
    })
  }

onDelete(id: String) {
  this.categoryService.deleteCategory(id).subscribe(
    (res: any) => {
    
      // Filter out the deleted category from the CategoryList array
      this.CategoryList = this.CategoryList.filter((cat) => cat._id != id);
      this.notificationService.showSuccessNotification('Categoria Eliminada')
    },
    (error) => {
      this.notificationService.showErrorNotification('Ocurrió un error eliminado la categoria')
    }
  );
}
  
  displayedColumns: string[] = ['category', 'state', 'edit','delete'];
}
