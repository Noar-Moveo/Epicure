import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface Dish {
  id: string;
  name: string;
}

interface DishesState {
  value: Dish[];
}

const initialState: DishesState = {
  value: [
    { id: '1', name: 'Pad Ki Mao'},
    { id: '2', name: 'Garbanzo Frito' },
    { id: '3', name: 'Smoked Pizza' },
  ],
};

const dishesSlice = createSlice({
  name: 'dishes',
  initialState,
  reducers: {
    addDish: (state, action: PayloadAction<Dish>) => {
      state.value.push(action.payload);
    },
    deleteDish: (state, action: PayloadAction<string>) => {
        state.value = state.value.filter(dish => dish.id !== action.payload);
    },
  },
});

export const { addDish, deleteDish } = dishesSlice.actions;

export default dishesSlice.reducer;
