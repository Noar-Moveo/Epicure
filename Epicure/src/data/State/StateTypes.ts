export interface Chef {
  id: string;
  name: string;
  imageUrl: string;
}

export interface ChefsState {
  value: Chef[];
}

export interface Dish {
  id: string;
  name: string;
  price: number;
  ingredients: string[];
  imageUrl: string;
}

export interface DishesState {
  value: Dish[];
}

export interface Restaurant {
  id: string;
  name: string;
  chef: string;
  imageUrl: string;
  starsImage?: string;
}

export interface RestaurantState {
  value: Restaurant[];
}
