import { configureStore } from "@reduxjs/toolkit";
import { Provider } from "react-redux";
import filterReducers from "./filters/filters";

const store = configureStore({
  reducer: {
    filters: filterReducers,
  },
});

export const ReduxProvider = ({ children }: React.PropsWithChildren) => (
  <Provider store={store}>{children}</Provider>
);
