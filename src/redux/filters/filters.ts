import { createSlice } from "@reduxjs/toolkit";

export type FiltersState = {
  location: string;
  guests: {
    adults: number;
    children: number;
  };
  totalGuests: number;
};
const initialState: FiltersState = {
  location: "",
  guests: {
    adults: 0,
    children: 0,
  },
  totalGuests: 0,
};

const filterSlice = createSlice({
  name: "filters",
  initialState: { value: initialState },
  reducers: {
    changeLocation: (state, action) => {
      state.value = { ...state.value, location: action.payload };
    },
    changeGuests: (state, action) => {
      state.value = {
        ...state.value,
        guests: action.payload.guests,
        totalGuests: action.payload.totalGuests,
      };
    },
  },
});

export const { changeLocation, changeGuests } = filterSlice.actions;

export default filterSlice.reducer;
