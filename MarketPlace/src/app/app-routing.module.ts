import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CategoryComponent } from './components/category-components/category/category.component';
import { CreateCategoryComponent } from './components/category-components/create-category/create-category.component';
import { EditCategoryComponent } from './components/category-components/edit-category/edit-category.component';
import { DiscountComponent } from './components/discount-components/discount/discount.component';
import { CreateDiscountComponent } from './components/discount-components/create-discount/create-discount.component';
import { EditDiscountComponent } from './components/discount-components/edit-discount/edit-discount.component';

const routes: Routes = [
  {
    path: 'category',
    children: [
      { path: '', component: CategoryComponent },
      { path: 'create', component: CreateCategoryComponent },
      { path: 'edit/:id', component: EditCategoryComponent },
    ],
  },
  {
    path: 'discount',
    children: [
      { path: '', component: DiscountComponent },
      { path: 'create', component: CreateDiscountComponent },
      { path: 'edit/:id', component: EditDiscountComponent },
    ],
  },
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
