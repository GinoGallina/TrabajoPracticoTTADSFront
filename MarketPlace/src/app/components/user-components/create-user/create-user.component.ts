import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { NotificationService } from 'src/app/services/notification-services/notification.service';
import { UserService } from 'src/app/services/user-services/user.service';

@Component({
  selector: 'app-create-user',
  templateUrl: './create-user.component.html',
  styleUrls: ['./create-user.component.css']
})
export class CreateUserComponent implements OnInit{
  userForm!: FormGroup;
  sellerForm!: FormGroup;
  types:String[]=['Seller','User']
  isCreatingUser: boolean = true;
  selectedOption: string = "user";

  constructor(
    private formBuilder: FormBuilder,
    private userService: UserService,
    private notificationService: NotificationService,
    private router: Router,
  ) {}

  
  ngOnInit(): void {
    this.userForm = this.formBuilder.group({
      username: ['', [Validators.required, Validators.minLength(5)]],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]],
      address: ['', [Validators.required ]],
    });

    this.sellerForm = this.formBuilder.group({
      username: ['', [Validators.required, Validators.minLength(5)]],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]],
      address: ['', [Validators.required ]],
      cbu:['', [Validators.required, ]],
      shop_name:['', [Validators.required, ]],
      cuit:['', [Validators.required, ]]
    });
  }

  createUser() {
    this.userForm.value.type='User'
    console.log(this.userForm.value)
    if (this.userForm.valid) {
      this.userService
      .createUser(this.userForm.value)
      .subscribe(
        (res) => {
            console.log('bb')
            this.notificationService.showSuccessNotification(
              'User created successfully',
            );
            this.router.navigate(['/users']);
          },
          (error) => {
            //VER DE CAMBIAR ESTO O NO
            this.notificationService.showErrorNotification(
              `Failed to create User - ` + error.error.error[0].message,
            );
          },
        );
    } else {
      // Form is invalid, show validation errors to the user
      // You can use the Angular Material form field's error state to display errors
      console.log(this.userForm.errors)
    }
  }

  createSeller() {
    this.sellerForm.value.type='Seller'
        console.log(this.sellerForm.value)
    if (this.sellerForm.valid) {
      this.userService
        .createUser(this.sellerForm.value)
        .subscribe(
          (res) => {
            this.notificationService.showSuccessNotification(
              'Seller created successfully',
            );
            this.router.navigate(['/users']);
          },
          (error) => {
            //VER DE CAMBIAR ESTO O NO
            this.notificationService.showErrorNotification(
              `Failed to create Seller - ` + error.error.error[0].message,
            );
          },
        );
    } else {
      // Form is invalid, show validation errors to the user
      // You can use the Angular Material form field's error state to display errors
    }
  }

  toggleUserSeller(){
    this.isCreatingUser=!this.isCreatingUser
  }
}

