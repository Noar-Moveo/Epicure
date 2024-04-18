import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Chef, ChefsState } from '../../../data/State/StateTypes';

const initialState: ChefsState = {
  value: [
    { id: '1', name: 'Yossi Shitrit' },
  ],
};

const chefsSlice = createSlice({
  name: 'chefs',
  initialState,
  reducers: {
    addChef: (state, action: PayloadAction<Chef>) => {
      state.value.push(action.payload);
    },
    deleteChef: (state, action: PayloadAction<string>) => {
        state.value = state.value.filter(chef => chef.id !== action.payload);
    },
  },
});

export const { addChef } = chefsSlice.actions;

export default chefsSlice.reducer;
