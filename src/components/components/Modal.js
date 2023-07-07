import React, { useState } from 'react';
import { handleCloseModal, handleShowModal } from '../../store/features/modalSlice';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import CustomButton from '../../redux/modules/Button';


const Modal = () => {
    const dispatch = useDispatch();
    return (
        <div>
            <div className='post'>
                <input type='text' name='title' placeholder='제목을 입력하세요'/><br/>
                <input type='file' name='title' placeholder='제목을 입력하세요'/><br/>
                <input type='text' name='title' placeholder='한마디'/>
            </div>
            <div className='btn'>
                <CustomButton name="closeButton"/>
                <CustomButton name="AddPostButton"/>
            </div>
        </div>
    );
};

export default Modal;
