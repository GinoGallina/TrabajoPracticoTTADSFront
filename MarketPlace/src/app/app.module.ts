import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';

//Components
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CategoryComponent } from './components/category-components/category/category.component';
import { CreateCategoryComponent } from './components/category-components/create-category/create-category.component';
import { EditCategoryComponent } from './components/category-components/edit-category/edit-category.component';

import { PaymentTypesComponent } from './components/payment-type-components/payment-types/payment-types.component';
import { CreatePaymentTypesComponent } from './components/payment-type-components/create-payment-types/create-payment-types.component';
import { EditPaymentTypesComponent } from './components/payment-type-components/edit-payment-types/edit-payment-types.component';
import { ProductUserComponent } from './components/product-components/product-user/product-user.component';

//Providers
import { NotificationService } from './services/notification-services/notification.service';
import { AuthModule } from '@auth0/auth0-angular';

//Angular Material
import { MatTableModule } from '@angular/material/table';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatSelectModule } from '@angular/material/select';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatButtonToggleModule } from '@angular/material/button-toggle';

import { LoginComponentComponent } from './components/login-component/login-component.component';
import { SideNavbarComponent } from './components/side-navbar/side-navbar.component';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatListModule } from '@angular/material/list';
import { DiscountComponent } from './components/discount-components/discount/discount.component';
import { EditDiscountComponent } from './components/discount-components/edit-discount/edit-discount.component';
import { CreateDiscountComponent } from './components/discount-components/create-discount/create-discount.component';
import { ProductComponent } from './components/product-components/product/product.component';
import { EditProductComponent } from './components/product-components/edit-product/edit-product.component';
import { CreateProductComponent } from './components/product-components/create-product/create-product.component';
import { HomeComponent } from './components/home-components/home.component';
import { TokenInterceptor } from './interceptors/token.interceptor';
import { CartListComponent } from './components/cart-components/cart-list/cart-list.component';
import { CompletedComponent } from './components/cart-components/cart-list/completed/completed.component';
import { PendingComponent } from './components/cart-components/cart-list/pending/pending.component';
import { CreateOrderComponent } from './components/order-components/create-order/create-order.component';
import { Auth0LoginComponent } from './components/auth0-login/auth0-login.component';
import { CreateReviewComponent } from './components/review/create-review/create-review.component';
import { UserComponent } from './components/user-components/user/user.component';
import { EditUserComponent } from './components/user-components/edit-user/edit-user.component';
import { CreateUserComponent } from './components/user-components/create-user/create-user.component';

@NgModule({
  declarations: [
    AppComponent,
    CategoryComponent,
    CreateCategoryComponent,
    EditCategoryComponent,
    DiscountComponent,
    EditDiscountComponent,
    CreateDiscountComponent,
    SideNavbarComponent,
    PaymentTypesComponent,
    CreatePaymentTypesComponent,
    EditPaymentTypesComponent,
    LoginComponentComponent,
    ProductComponent,
    EditProductComponent,
    CreateProductComponent,
    HomeComponent,
    ProductUserComponent,
    CartListComponent,
    CompletedComponent,
    PendingComponent,
    CreateOrderComponent,
    Auth0LoginComponent,
    CreateReviewComponent,
    UserComponent,
    EditUserComponent,
    CreateUserComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatTableModule,
    HttpClientModule,
    MatFormFieldModule,
    MatInputModule,
    ReactiveFormsModule,
    MatButtonModule,
    MatIconModule,
    MatCardModule,
    MatSelectModule,
    MatSnackBarModule,
    MatSidenavModule,
    MatToolbarModule,
    MatListModule,
    FormsModule,
    MatExpansionModule,
    AuthModule.forRoot({
      domain: 'dev-tcfvh3e567jy3y1h.us.auth0.com',
      clientId: 'OFqfYecCVJgfkFPtZd3Pd6UuaAFWRk2y',
      authorizationParams: {
        redirect_uri: window.location.origin + '/login',
        scope: 'openid profile email',
      },
    }),
    MatButtonToggleModule,
  ],

  providers: [
    NotificationService,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: TokenInterceptor,
      multi: true,
    },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
