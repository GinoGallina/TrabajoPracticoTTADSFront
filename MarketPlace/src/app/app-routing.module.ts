import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CategoryComponent } from './components/category-components/category/category.component';
import { CreateCategoryComponent } from './components/category-components/create-category/create-category.component';
import { EditCategoryComponent } from './components/category-components/edit-category/edit-category.component';
import { PaymentTypesComponent } from './components/payment-type-components/payment-types/payment-types.component';
import { CreatePaymentTypesComponent } from './components/payment-type-components/create-payment-types/create-payment-types.component';
import { EditPaymentTypesComponent } from './components/payment-type-components/edit-payment-types/edit-payment-types.component';

const routes: Routes = [
  { 
    path: 'category', 
    children: [
      { path: '' ,component: CategoryComponent },
      { path: 'create', component: CreateCategoryComponent },
      { path: 'edit/:id', component: EditCategoryComponent}
    ]
  },
  { 
    path: 'payment_type', 
    children: [
      { path: '' ,component: PaymentTypesComponent },
      { path: 'create', component: CreatePaymentTypesComponent },
      { path: 'edit/:id', component: EditPaymentTypesComponent}
    ]
  }
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
