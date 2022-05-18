import { createSlice } from "@reduxjs/toolkit";

const counterSlide = createSlice({
  name: 'counter',
  initialState: 0,
  reducers: {
    increase(state, action) {
      return state + 1;
    },
    decrease(state, action) {
      return state - 1;
    },
    refresh(state, action) {
      return state = 0;
    },
  },
});

const {actions, reducer} = counterSlide;
export const {increase, decrease, refresh} = actions
export default reducer;
