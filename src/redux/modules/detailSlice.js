import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  show: false,
};

export const detailSlice = createSlice({
  name: "detailModal",
  initialState,
  reducers: {
    //state 바꾸는 함수
    handleShowDetailModal: (state, action) => {
      state.show = true;
    },
    handleCloseDetailModal: (state, action) => {
      state.show = false;
    },
  },
});

export const { handleShowDetailModal, handleCloseDetailModal } =
  detailSlice.actions;

export default detailSlice.reducer;
