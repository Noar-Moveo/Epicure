import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import axios from "axios";
import { Chef, ChefsState } from "../../../data/State/StateTypes";

export const fetchChefs = createAsyncThunk(
  "chefs/fetchChefs",
  async (): Promise<Chef[]> => {
    const response = await axios.get<Chef[]>("/api/chefs");
    return response.data;
  }
);

export const addChef = createAsyncThunk(
  "chefs/addChef",
  async (chef: Chef): Promise<Chef> => {
    const response = await axios.post<Chef>("/api/chefs", chef);
    return response.data;
  }
);

export const deleteChef = createAsyncThunk(
  "chefs/deleteChef",
  async (id: string): Promise<string> => {
    await axios.delete(`/api/chefs/${id}`);
    return id;
  }
);

const initialState: ChefsState = {
  value: [],
};

const chefsSlice = createSlice({
  name: "chefs",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchChefs.fulfilled, (state, action: PayloadAction<Chef[]>) => {
        state.value = action.payload;
      })
      .addCase(addChef.fulfilled, (state, action: PayloadAction<Chef>) => {
        state.value.push(action.payload);
      })
      .addCase(deleteChef.fulfilled, (state, action: PayloadAction<string>) => {
        state.value = state.value.filter((chef) => chef.id !== action.payload);
      });
  },
});

export default chefsSlice.reducer;

// import { createSlice, PayloadAction } from '@reduxjs/toolkit';
// import { Chef, ChefsState } from '../../../data/State/StateTypes';
// import Chef1 from '../../../assets/Images/ChefReastaurant1.png';

// const initialState: ChefsState = {
//   value: [
//     { id: '1', name: 'Yossi Shitrit', imageUrl: Chef1 },
//   ],
// };

// const chefsSlice = createSlice({
//   name: 'chefs',
//   initialState,
//   reducers: {
//     addChef: (state, action: PayloadAction<Chef>) => {
//       state.value.push(action.payload);
//     },
//     deleteChef: (state, action: PayloadAction<string>) => {
//         state.value = state.value.filter(chef => chef.id !== action.payload);
//     },
//   },
// });

// export const { addChef } = chefsSlice.actions;

// export default chefsSlice.reducer;
