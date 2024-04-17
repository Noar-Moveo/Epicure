export interface Chef {
  id: string;
  name: string;
}

export interface ChefsState {
  value: Chef[];
}

export interface Dish {
  id: string;
  name: string;
}

export interface DishesState {
  value: Dish[];
}

export interface Restaurant {
  id: string;
  name: string;
}

export interface RestaurantState {
  value: Restaurant[];
}
