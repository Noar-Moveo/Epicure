import { configureStore } from "@reduxjs/toolkit";
import restaurantsReducer from "../state/features/restaurants/restaurantsSlice";
import dishesReducer from "../state/features/dishes/dishesSlice";
import chefsReducer from "../state/features/chefs/chefsSlice";

export const store = configureStore({
  reducer: {
    restaurants: restaurantsReducer,
    dishes: dishesReducer,
    chefs: chefsReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
