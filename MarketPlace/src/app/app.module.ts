import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

//Components
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CategoryComponent } from './components/category-components/category/category.component';
import { CreateCategoryComponent } from './components/category-components/create-category/create-category.component';
import { EditCategoryComponent } from './components/category-components/edit-category/edit-category.component';
<<<<<<< HEAD
import { PaymentTypesComponent } from './components/payment-type-components/payment-types/payment-types.component';
import { CreatePaymentTypesComponent } from './components/payment-type-components/create-payment-types/create-payment-types.component';
import { EditPaymentTypesComponent } from './components/payment-type-components/edit-payment-types/edit-payment-types.component';

=======
import { DiscountComponent } from './components/discount-components/discount/discount.component';
import { CreateDiscountComponent } from './components/discount-components/create-discount/create-discount.component';
import { EditDiscountComponent } from './components/discount-components/edit-discount/edit-discount.component';
<<<<<<< Updated upstream
>>>>>>> e77c84b... crud discount finished
=======
import { PaymentTypesComponent } from './components/payment-type-components/payment-types/payment-types.component';
import { CreatePaymentTypesComponent } from './components/payment-type-components/create-payment-types/create-payment-types.component';
import { EditPaymentTypesComponent } from './components/payment-type-components/edit-payment-types/edit-payment-types.component';
>>>>>>> Stashed changes

//Providers
import { NotificationService } from './services/notification-services/notification.service';

//Angular Material
import { MatTableModule } from '@angular/material/table';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { ReactiveFormsModule } from '@angular/forms';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatSelectModule } from '@angular/material/select';
import { MatSnackBarModule } from '@angular/material/snack-bar';
<<<<<<< Updated upstream
<<<<<<< HEAD
=======
>>>>>>> Stashed changes
import { LoginComponentComponent } from './components/login-component/login-component.component';
import { SideNavbarComponent } from './components/side-navbar/side-navbar.component';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatListModule } from '@angular/material/list';
<<<<<<< Updated upstream
=======
>>>>>>> e77c84b... crud discount finished
=======
>>>>>>> Stashed changes

@NgModule({
  declarations: [
    AppComponent,
    CategoryComponent,
    CreateCategoryComponent,
    EditCategoryComponent,
<<<<<<< HEAD
    LoginComponentComponent,
    SideNavbarComponent,
=======
    DiscountComponent,
    EditDiscountComponent,
    CreateDiscountComponent,
<<<<<<< Updated upstream
>>>>>>> e77c84b... crud discount finished
=======
    LoginComponentComponent,
    SideNavbarComponent,
>>>>>>> Stashed changes
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
<<<<<<< Updated upstream
<<<<<<< HEAD
    MatSidenavModule,
    MatToolbarModule,
    MatListModule
=======
>>>>>>> e77c84b... crud discount finished
=======
    MatSidenavModule,
    MatToolbarModule,
    MatListModule,
>>>>>>> Stashed changes
  ],
  providers: [NotificationService],
  bootstrap: [AppComponent],
})
export class AppModule {}
