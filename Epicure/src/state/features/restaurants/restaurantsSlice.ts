import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { Restaurant, RestaurantState } from '../../../data/State/StateTypes';
import Img1 from '../../../assets/Images/Restaurant1.png';
import Img2 from '../../../assets/Images/Restaurant2.png';
import Img3 from '../../../assets/Images/Restaurant3.png';

const initialState: RestaurantState =  {
    value: [
        { id: '1', name: 'Carlo', chef: 'Ran Shmueli', imageUrl: Img1 },
        { id: '2', name: 'Lumina', chef: 'Meir Adoni', imageUrl: Img2 },
        { id: '3', name: 'Tiger Lilly', chef: 'Yanir Green', imageUrl: Img3 },
    ],
};

const restaurantsSlice = createSlice({
    name: 'restaurant',
    initialState,
    reducers: {
        addRestaurant: (state, action: PayloadAction<Restaurant>) => {
            state.value.push(action.payload);
        },
        deleteRestaurant: (state, action: PayloadAction<string>) => {
            state.value = state.value.filter(restaurant => restaurant.id !== action.payload);
        },
    }
});

export const { addRestaurant } = restaurantsSlice.actions;

export default restaurantsSlice.reducer;
