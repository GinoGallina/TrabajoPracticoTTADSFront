import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CategoryComponent } from './components/category-components/category/category.component';
import { CreateCategoryComponent } from './components/category-components/create-category/create-category.component';
import { EditCategoryComponent } from './components/category-components/edit-category/edit-category.component';
import { LoginComponentComponent } from './components/login-component/login-component.component';
import { SideNavbarComponent } from './components/side-navbar/side-navbar.component';
import { PaymentTypesComponent } from './components/payment-type-components/payment-types/payment-types.component';
import { CreatePaymentTypesComponent } from './components/payment-type-components/create-payment-types/create-payment-types.component';
import { EditPaymentTypesComponent } from './components/payment-type-components/edit-payment-types/edit-payment-types.component';
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
  { path: 'login', component: LoginComponentComponent },
  {
    path: 'payment_type',
    children: [
      { path: '', component: PaymentTypesComponent },
      { path: 'create', component: CreatePaymentTypesComponent },
      { path: 'edit/:id', component: EditPaymentTypesComponent },
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

  { path: 'login', component: LoginComponentComponent },
  {
    path: 'payment_type',
    children: [
      { path: '', component: PaymentTypesComponent },
      { path: 'create', component: CreatePaymentTypesComponent },
      { path: 'edit/:id', component: EditPaymentTypesComponent },
    ],
  },
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
