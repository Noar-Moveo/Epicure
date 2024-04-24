import { Dish, Restaurant, Chef } from "../../data/State/StateTypes";

export interface CardProps<T> {
  item: T;
  Component: React.ComponentType<T>;
  isChefProfile?: boolean;
}

export type CardItem = Dish | Restaurant | Chef;
