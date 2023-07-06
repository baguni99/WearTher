//만능버튼
import styled from 'styled-components';
import React from 'react';
import { useSelector } from 'react-redux';
import { AddButton, ViewButton, DeleteButton, AddCommentButton, EditButton } from './StyledComponents/ButtonStyle';

const CustomButton =(props) => {
    switch(props.name) {
        case 'AddButton' :
            return <AddButton onClick={props.onClickAddCodi}>이 날씨에 내가 입은 옷 등록하기</AddButton>;
        case 'ViewButton' :
            return <ViewButton onClick={props.onClickViewCodi}>이 날씨에 뭐 입지?</ViewButton>;
        case 'DeleteButton' :
            return <DeleteButton onClcick={props.onClickDelete}>삭제</DeleteButton>
        case 'EditButton' :
            return <EditButton onClick={props.onClickEdit}>수정</EditButton>
        case 'AddCommentButton' :
            return <AddCommentButton onClick={props.onClickAddComment}>등록</AddCommentButton>
    }
}

export default CustomButton;