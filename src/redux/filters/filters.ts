import { createSlice } from "@reduxjs/toolkit";
import { guestCategory } from "../../typescript_stuff/enums";

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
    decrementGuest: (state, action) => {
      const guests = state.value.guests;
      if (action.payload === guestCategory.adult && guests.adults > 0) {
        state.value = {
          ...state.value,
          guests: { ...guests, adults: guests.adults - 1 },
          totalGuests: state.value.totalGuests - 1,
        };
      } else if (
        action.payload === guestCategory.children &&
        guests.children > 0
      ) {
        state.value = {
          ...state.value,
          guests: { ...guests, children: guests.children - 1 },
          totalGuests: state.value.totalGuests - 1,
        };
      }
    },
    incrementGuest: (state, action) => {
      const guests = state.value.guests;
      if (action.payload === guestCategory.adult) {
        state.value = {
          ...state.value,
          guests: { ...guests, adults: guests.adults + 1 },
          totalGuests: state.value.totalGuests + 1,
        };
      } else {
        state.value = {
          ...state.value,
          guests: { ...guests, children: guests.children + 1 },
          totalGuests: state.value.totalGuests + 1,
        };
      }
    },
  },
});

export const { changeLocation, decrementGuest, incrementGuest } =
  filterSlice.actions;

export default filterSlice.reducer;
