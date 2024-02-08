import { configureStore } from "@reduxjs/toolkit";
import nameReducer from "./nameSlice";
import ageReducer from "./ageSlice";
import cityReducer from "./citySlice";

const store = configureStore({
  reducer: {
    name: nameReducer,
    age: ageReducer,
    city: cityReducer,
  },
});

export default store;
