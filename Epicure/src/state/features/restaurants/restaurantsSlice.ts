import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import axios from "axios";
import { Restaurant, RestaurantState } from "../../../data/State/StateTypes";

export const fetchRestaurants = createAsyncThunk(
  "restaurants/fetchRestaurants",
  async (): Promise<Restaurant[]> => {
    const response = await axios.get<Restaurant[]>("/api/restaurants");
    return response.data;
  }
);

export const addRestaurant = createAsyncThunk(
  "restaurants/addRestaurant",
  async (restaurant: Restaurant): Promise<Restaurant> => {
    const response = await axios.post<Restaurant>(
      "/api/restaurants",
      restaurant
    );
    return response.data;
  }
);

export const deleteRestaurant = createAsyncThunk(
  "restaurants/deleteRestaurant",
  async (id: string): Promise<string> => {
    await axios.delete(`/api/restaurants/${id}`);
    return id;
  }
);

const initialState: RestaurantState = {
  value: [],
};

const restaurantsSlice = createSlice({
  name: "restaurants",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(
        fetchRestaurants.fulfilled,
        (state, action: PayloadAction<Restaurant[]>) => {
          state.value = action.payload;
        }
      )
      .addCase(
        addRestaurant.fulfilled,
        (state, action: PayloadAction<Restaurant>) => {
          state.value.push(action.payload);
        }
      )
      .addCase(
        deleteRestaurant.fulfilled,
        (state, action: PayloadAction<string>) => {
          state.value = state.value.filter(
            (restaurant) => restaurant.id !== action.payload
          );
        }
      );
  },
});

export default restaurantsSlice.reducer;

// import { createSlice, PayloadAction } from "@reduxjs/toolkit";
// import { Restaurant, RestaurantState } from "../../../data/State/StateTypes";
// import Img1 from "../../../assets/Images/Restaurant1.png";
// import Img2 from "../../../assets/Images/Restaurant2.png";
// import Img3 from "../../../assets/Images/Restaurant3.png";
// import Img4 from "../../../assets/Images/ChefReastaurant1.png";
// import Img5 from "../../../assets/Images/ChefReastaurant2.png";
// import Img6 from "../../../assets/Images/ChefReastaurant3.png";
// import Stars1 from "../../../assets/Icons/Stars1.png";
// import Stars2 from "../../../assets/Icons/Stars2.png";
// import Stars3 from "../../../assets/Icons/Stars3.png";

// const initialState: RestaurantState = {
//   value: [
//     {
//       id: "1",
//       name: "Carlo",
//       chef: "Ran Shmueli",
//       imageUrl: Img1,
//       starsImage: Stars1,
//     },
//     {
//       id: "2",
//       name: "Lumina",
//       chef: "Meir Adoni",
//       imageUrl: Img2,
//       starsImage: Stars2,
//     },
//     {
//       id: "3",
//       name: "Tiger Lilly",
//       chef: "Yanir Green",
//       imageUrl: Img3,
//       starsImage: Stars3,
//     },
//     { id: "4", name: "Onza", chef: "Yossi Shitrit", imageUrl: Img4, starsImage: Stars1, },
//     { id: "5", name: "Kitchen Market", chef: "Yossi Shitrit", imageUrl: Img5, starsImage: Stars2, },
//     { id: "6", name: "Mashya", chef: "Yossi Shitrit", imageUrl: Img6, starsImage: Stars3, },
//   ],
// };

// const restaurantsSlice = createSlice({
//   name: "restaurant",
//   initialState,
//   reducers: {
//     addRestaurant: (state, action: PayloadAction<Restaurant>) => {
//       state.value.push(action.payload);
//     },
//     deleteRestaurant: (state, action: PayloadAction<string>) => {
//       state.value = state.value.filter(
//         (restaurant) => restaurant.id !== action.payload
//       );
//     },
//   },
// });

// export const { addRestaurant } = restaurantsSlice.actions;

// export default restaurantsSlice.reducer;
