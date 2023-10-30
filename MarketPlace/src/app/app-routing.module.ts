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
import { CreateProductComponent } from './components/product-components/create-product/create-product.component';
import { ProductComponent } from './components/product-components/product/product.component';
import { EditProductComponent } from './components/product-components/edit-product/edit-product.component';
import { HomeComponent } from './components/home-components/home.component';
import { LoginGuard } from './guards/login.guard';
import { AuthGuard } from './guards/auth.guard';
import { ProductUserComponent } from './components/product-components/product-user/product-user.component';

const routes: Routes = [
  {
    path: 'category',
    canActivate: [AuthGuard],
    children: [
      { path: '', component: CategoryComponent },
      { path: 'create', component: CreateCategoryComponent },
      { path: 'edit/:id', component: EditCategoryComponent },
    ],
  },
  {
    path: 'payment_type',
    canActivate: [AuthGuard],
    children: [
      { path: '', component: PaymentTypesComponent },
      { path: 'create', component: CreatePaymentTypesComponent },
      { path: 'edit/:id', component: EditPaymentTypesComponent },
    ],
  },
  {
    path: 'discount',
    canActivate: [AuthGuard],
    children: [
      { path: '', component: DiscountComponent },
      { path: 'create', component: CreateDiscountComponent },
      { path: 'edit/:id', component: EditDiscountComponent },
    ],
  },
  {
    path: 'productsAdmin',
    canActivate: [AuthGuard],
    children: [
      { path: '', component: ProductComponent },
      { path: 'create', component: CreateProductComponent },
      { path: 'edit/:id', component: EditProductComponent },
    ],
  },
  {
    path: 'products',
    canActivate: [AuthGuard],
    children: [{ path: '', component: ProductUserComponent }],
  },

  {
    path: 'login',
    component: LoginComponentComponent,
    canActivate: [LoginGuard],
  },
  { path: '', redirectTo: '/login', pathMatch: 'full' }, // Redirigir la página de inicio a la página de inicio de sesión
  { path: 'home', component: HomeComponent, canActivate: [AuthGuard] },
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
