import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ProductService } from 'src/app/services/product-service/product.service';
import { AuthService } from 'src/app/services/auth-services/auth.service';
import { Product } from 'src/app/interfaces/product';

@Component({
  selector: 'app-create-order',
  templateUrl: './create-order.component.html',
  styleUrls: ['./create-order.component.css']
})
export class CreateOrderComponent implements OnInit {
  productId!: String;
  orderForm!: FormGroup;
  user!: String;
  product!: Product;

  constructor(
    private route: ActivatedRoute,
    private productService: ProductService,
    private authService: AuthService,
  ) {}

  ngOnInit(){
    this.user = this.authService.getUser()._id;
    this.productId = this.route.snapshot.params['id'];

    this.orderForm = new FormGroup({
      product: new FormControl(this.productId, [Validators.required]),
      quantity: new FormControl('0', [Validators.required, Validators.min(0)]),
      amount: new FormControl('0', [Validators.required, Validators.min(0)]),
      shipment_type: new FormControl('home_delivery', [Validators.required, Validators.min(0)])
      //Terminar
    });

    this.productService
      .getOneProduct(this.productId)
      .subscribe((product: any) => {
        this.product = product
      });
  }


}
