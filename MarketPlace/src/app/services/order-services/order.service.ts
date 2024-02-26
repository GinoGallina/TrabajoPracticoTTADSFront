import { Injectable } from '@angular/core';
import { IOrderRequest } from 'src/app/interfaces/order';

@Injectable({
  providedIn: 'root'
})
export class OrderService {

  constructor() { }

  addOrder(order:IOrderRequest){
    let orders = new Map<string, IOrderRequest>(Object.entries(JSON.parse(localStorage.getItem('orders') || '{}')));

    orders.set(order.product, order);

    localStorage.setItem('orders', JSON.stringify(orders));
  }

  removeOrder(productId:string){
    let orders = new Map<string, IOrderRequest>(Object.entries(JSON.parse(localStorage.getItem('orders') || '{}')));

    orders.delete(productId);

    localStorage.setItem('orders', JSON.stringify(orders));
  }

  isInCart(productId:string): boolean{
    let orders = new Map<string, IOrderRequest>(Object.entries(JSON.parse(localStorage.getItem('orders') || '{}')));

    return orders.has(productId);
  }

  updateOrder(order:IOrderRequest): boolean{
    let orders = new Map<string, IOrderRequest>(Object.entries(JSON.parse(localStorage.getItem('orders') || '{}')));

    if(!orders.has(order.product)){
      return false;
    }
    orders.set(order.product, order);

    localStorage.setItem('orders', JSON.stringify(orders));
    return true;
  }
}


