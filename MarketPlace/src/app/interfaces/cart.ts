import { Order } from "./order";

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

