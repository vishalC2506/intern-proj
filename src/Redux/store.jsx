import { configureStore } from "@reduxjs/toolkit";
import searchReducer from "./searchSlice";
const store = configureStore({
  reducer: {
    user: searchReducer,
  },
});

export default store;
