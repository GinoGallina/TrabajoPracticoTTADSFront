export interface CartItem {
  expanded: boolean;
  _id: string;
  user: User;
  payment_type: PaymentType;
  state: string;
  orders: Order[];
  id: string;
}

interface User {
  _id: string;
  username: string;
  email: string;
  type: string;
  password: string;
  address: string;
  state: string;
  __v: number;
}

interface PaymentType {
  state: string;
  _id: string;
  payment_id: string;
  type: string;
}

export interface Order {
  _id: string;
  product: Product;
  quantity: number;
  amount: number;
  shipment: Shipment;
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

export interface Shipment {
  _id: string;
  date: string;
  comment: string;
  state: string;
  situation: string;
  updatedAt: string;
}
