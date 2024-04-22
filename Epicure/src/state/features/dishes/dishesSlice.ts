import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Dish, DishesState } from '../../../data/State/StateTypes';
import Dish1 from '../../../assets/Images/Dish1.png';
import Dish2 from '../../../assets/Images/Dish2.png';
import Dish3 from '../../../assets/Images/Dish3.png';

const initialState: DishesState = {
  value: [
    { 
      id: '1', 
      name: 'Pad Ki Mao',
      price: 88,
      ingredients: [
        'Shrimps', 'Glass Noodles', 'Kemiri Nuts', 'Shallots', 'Lemon Grass', 
        'Magic Chili', 'Brown Coconut'
      ],
      imageUrl: Dish1
    },
    { 
      id: '2', 
      name: 'Garbanzo Frito',
      price: 98,
      ingredients: [
        'Polenta fingers', 'veal cheek', 'magic chili cured lemon cream', 'yellow laksa'
      ],
      imageUrl: Dish2
    },
    { 
      id: '3', 
      name: 'Smoked Pizza',
      price: 65,
      ingredients: [
        'Basil dough', 'cashew butter', 'demi-glace', 'bison', 'radish'
      ],
      imageUrl: Dish3
    },
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
