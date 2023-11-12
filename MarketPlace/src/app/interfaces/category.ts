import { Discount } from './discount.js';

export interface Category {
  _id: String;
  category: string;
  discounts: Discount[];
  state: string;
  createdAt: string;
  updatedAt: string;
  expanded: boolean;
  __v: number;
}
