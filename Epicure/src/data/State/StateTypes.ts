export interface Chef {
  id: string;
  name: string;
  image: string;
  description: string;
  status: string;
  restaurants: Restaurant[];
}

export interface Dish {
  id: string;
  name: string;
  price: number;
  image?: string;
  ingredients: string[];
  tags: string[];
  status: string;
  restaurant: Restaurant;
}

export interface Restaurant {
  id: string;
  name: string;
  image: string;
  chef: Chef;
  status: string;
  dishes: string[];
}

export interface ChefsState {
  value: Chef[];
}

export interface DishesState {
  value: Dish[];
}

export interface RestaurantState {
  value: Restaurant[];
}

// export interface Chef {
//   id: string;
//   name: string;
//   imageUrl: string;
// }

// export interface ChefsState {
//   value: Chef[];
// }

// export interface Dish {
//   id: string;
//   name: string;
//   price: number;
//   ingredients: string[];
//   imageUrl: string;
// }

// export interface DishesState {
//   value: Dish[];
// }

// export interface Restaurant {
//   id: string;
//   name: string;
//   chef: string;
//   imageUrl: string;
//   starsImage?: string;
// }

// export interface RestaurantState {
//   value: Restaurant[];
// }
