import { createSlice, createAsyncThunk, PayloadAction } from "@reduxjs/toolkit";
import axios from "axios";
import { Dish } from "../../../data/State/StateTypes";

axios.defaults.baseURL = "http://localhost:3000/api/v1";

export const fetchDishes = createAsyncThunk(
  "dishes/fetchDishes",
  async (): Promise<Dish[]> => {
    const response = await axios.get<Dish[]>("/dishes");
    return response.data;
  }
);

export const addDish = createAsyncThunk(
  "dishes/addDish",
  async (dish: Dish): Promise<Dish> => {
    const response = await axios.post<Dish>("/dishes", dish);
    return response.data;
  }
);

export const deleteDish = createAsyncThunk(
  "dishes/deleteDish",
  async (id: string): Promise<string> => {
    await axios.delete(`/dishes/${id}`);
    return id;
  }
);

const initialState: { value: Dish[] } = {
  value: [],
};

const dishesSlice = createSlice({
  name: "dishes",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(
        fetchDishes.fulfilled,
        (state, action: PayloadAction<Dish[]>) => {
          state.value = action.payload;
        }
      )
      .addCase(addDish.fulfilled, (state, action: PayloadAction<Dish>) => {
        state.value.push(action.payload);
      })
      .addCase(deleteDish.fulfilled, (state, action: PayloadAction<string>) => {
        state.value = state.value.filter((dish) => dish.id !== action.payload);
      });
  },
});

export default dishesSlice.reducer;

// import { createSlice, PayloadAction } from '@reduxjs/toolkit';
// import { Dish, DishesState } from '../../../data/State/StateTypes';
// import Dish1 from '../../../assets/Images/Dish1.png';
// import Dish2 from '../../../assets/Images/Dish2.png';
// import Dish3 from '../../../assets/Images/Dish3.png';

// const initialState: DishesState = {
//   value: [
//     {
//       id: '1',
//       name: 'Pad Ki Mao',
//       price: 88,
//       ingredients: [
//         'Shrimps', 'Glass Noodles', 'Kemiri Nuts', 'Shallots', 'Lemon Grass',
//         'Magic Chili', 'Brown Coconut'
//       ],
//       imageUrl: Dish1
//     },
//     {
//       id: '2',
//       name: 'Garbanzo Frito',
//       price: 98,
//       ingredients: [
//         'Polenta fingers', 'veal cheek', 'magic chili cured lemon cream', 'yellow laksa'
//       ],
//       imageUrl: Dish2
//     },
//     {
//       id: '3',
//       name: 'Smoked Pizza',
//       price: 65,
//       ingredients: [
//         'Basil dough', 'cashew "butter"', 'demi-glace', 'bison & radish'
//       ],
//       imageUrl: Dish3
//     },
//   ],
// };
// const dishesSlice = createSlice({
//   name: 'dishes',
//   initialState,
//   reducers: {
//     addDish: (state, action: PayloadAction<Dish>) => {
//       state.value.push(action.payload);
//     },
//     deleteDish: (state, action: PayloadAction<string>) => {
//         state.value = state.value.filter(dish => dish.id !== action.payload);
//     },
//   },
// });

// export const { addDish, deleteDish } = dishesSlice.actions;

// export default dishesSlice.reducer;
