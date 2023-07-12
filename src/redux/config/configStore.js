import { configureStore } from "@reduxjs/toolkit";
import modalSlice from "../modules/modalSlice";
import weatherSlice from "../modules/weatherSlice";
export const store = configureStore({
  reducer: {
    modal: modalSlice,
    weather: weatherSlice,
  },
});
