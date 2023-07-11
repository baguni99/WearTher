import { configureStore } from "@reduxjs/toolkit";
import modalSlice from "../../store/features/modalSlice";
import weatherSlice from "../modules/weatherSlice";
export const store = configureStore({
  reducer: {
    modal: modalSlice,
    weather: weatherSlice,
  },
});
