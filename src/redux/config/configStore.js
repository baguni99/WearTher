import { configureStore } from "@reduxjs/toolkit";
import modalSlice from "../../store/features/modalSlice";
export const store = configureStore({
    reducer:{
        modal: modalSlice,
    },
});