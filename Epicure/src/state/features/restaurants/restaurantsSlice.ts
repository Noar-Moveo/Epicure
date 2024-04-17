import { createSlice, PayloadAction } from '@reduxjs/toolkit'

interface Restaurant {
    id: string;
    name: string;
}

interface RestaurantState {
    value: Restaurant[];
}

const initialState: RestaurantState =  {
    value: [
        { id: '1', name: 'Carlo' },
        { id: '2', name: 'Lumina' },
        { id: '3', name: 'Tiger Lilly' },
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
