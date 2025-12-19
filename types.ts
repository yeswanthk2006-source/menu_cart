
export enum Category {
  VEG = 'Veg',
  NON_VEG = 'Non-Veg',
  DESSERTS = 'Desserts'
}

export interface MenuItem {
  id: string;
  name: string;
  description: string;
  price: number;
  category: Category;
  image: string;
  isSpicy?: boolean;
  isGlutenFree?: boolean;
}

export interface CartItem extends MenuItem {
  quantity: number;
}
