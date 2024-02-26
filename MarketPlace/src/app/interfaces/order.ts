export interface Order {
  _id: string;
  product: Product;
  quantity: number;
  amount: number;
  cart: string;
  state: string;
  unitPrice: number;
  createdAt: string;
  updatedAt: string;
  __v: number;
  id: string;
}

interface Product {
  _id: string;
  seller: string;
  category: string;
  name: string;
  description: string;
  price: string;
  stock: number;
  img: string;
  createdAt: string;
  updatedAt: string;
  __v: number;
  state: string;
}

export interface IOrderRequest{
  product: string;
  quantity: number;
  amount: number;
  //Shipment data
  shipment_type: "home_delivery" | "branch_office_pickup" | "other";
  delivery_address?: String;
  comment?: String;
}
