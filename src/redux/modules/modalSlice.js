import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  //initialstate와 return은 형태가 같아야 한다.
  show: false,
};

export const modalSlice = createSlice({
  name: "modal", //이 slice의 이름
  initialState,
  reducers: {
    //state 바꾸는 함수
    handleShowModal: (state, action) => {
      state.show = true;
    },
    handleCloseModal: (state, action) => {
      state.show = false;
    },
  },
});

export const { handleShowModal, handleCloseModal } = modalSlice.actions;

export default modalSlice.reducer;
