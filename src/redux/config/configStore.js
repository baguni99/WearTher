import { configureStore } from "@reduxjs/toolkit";
import modalSlice from "../modules/modalSlice";
import weatherSlice from "../modules/weatherSlice";
import detailSlice from "../modules/detailSlice";
export const store = configureStore({
  reducer: {
    modal: modalSlice,
    weather: weatherSlice,
    detailModal: detailSlice,
  },
});
