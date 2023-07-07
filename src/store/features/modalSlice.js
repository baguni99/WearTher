import { createSlice } from "@reduxjs/toolkit";

const initialState={    //initialstate와 return은 형태가 같아야 한다.
    show:false,
};

export const modalSlice = createSlice({
    name:"modal",  //이 slice의 이름
    initialState,
    reducers:{  //state 바꾸는 함수
        handleShowModal: (state)=> {
            state.show=true;
        },
        handleCloseModal: (state)=> {
            state.show=false;
        },
    }  
});

export const { handleShowModal, handleCloseModal, changeMode} = modalSlice.actions;

export default modalSlice.reducer;