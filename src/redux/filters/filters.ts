import { createSlice } from "@reduxjs/toolkit";
import { guestCategory } from "../../typescript_stuff/enums";

export type FiltersState = {
  location: string;
  guests: {
    adults: number;
    children: number;
  };
};
const initialState: FiltersState = {
  location: "",
  guests: {
    adults: 0,
    children: 0,
  },
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
      if (guests.adults + guests.children > 0) {
        if (action.payload === guestCategory.adult) {
          state.value = {
            ...state.value,
            guests: { ...guests, adults: guests.adults - 1 },
          };
        } else {
          state.value = {
            ...state.value,
            guests: { ...guests, children: guests.children - 1 },
          };
        }
      }
    },
    incrementGuest: (state, action) => {
      const guests = state.value.guests;
      if (action.payload === guestCategory.adult) {
        state.value = {
          ...state.value,
          guests: { ...guests, adults: guests.adults + 1 },
        };
      } else {
        state.value = {
          ...state.value,
          guests: { ...guests, children: guests.children + 1 },
        };
      }
    },
  },
});

export const { changeLocation, decrementGuest, incrementGuest } =
  filterSlice.actions;

export default filterSlice.reducer;
