//만능버튼
import React from "react";
import {
  AddButton,
  ViewButton,
  DeleteButton,
  AddCommentButton,
  EditButton,
  CloseButton,
  AddPostButton,
} from "./ButtonStyle";
import { useDispatch } from "react-redux";
import {
  handleCloseModal,
  handleShowModal,
} from "../store/features/modalSlice";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

const CustomButton = ({ name }) => {
  const dispatch = useDispatch(); //AddButton 클릭 -> 모달 : dispatch를 사용하여 showModal 액션 디스패치 !
  const navigate = useNavigate();
  //console.log("show 상태:", modalShow);

  const showModal = () => {
    //dispatch는 handleShowModal이라는 액션크리에이터를 가져오고 , 액션 크리에이터가 configurestore에서 액션개체를 만든다
    console.log("showModal잘 작동하는지");
    dispatch(handleShowModal());
  };
  const closeModal = () => {
    console.log("closeModal잘 작동하는지");
    dispatch(handleCloseModal());
  };

  const switchPage = () => {
    navigate("/Posts");
  };

  switch (name) {
    case "AddButton":
      return <AddButton onClick={showModal}>오늘 입은 옷 알려주기</AddButton>;
    case "ViewButton":
      return <ViewButton onClick={switchPage}>이런 날엔 뭐 입지?</ViewButton>;
    // case "DeleteButton":
    //   return <DeleteButton onClick={props.onClickDelete}>삭제</DeleteButton>;
    // case "EditButton":
    //   return <EditButton onClick={props.onClickEdit}>수정</EditButton>;
    // case "AddCommentButton":
    //   return (
    //     <AddCommentButton onClick={props.onClickAddComment}>
    //       등록
    //     </AddCommentButton>
    //   );
    case "closeButton":
      return <CloseButton onClick={closeModal}>닫기</CloseButton>;
    // case 'AddPostButton' :
    // return <AddPostButton onClick={handleUpload}>등록</AddPostButton>
    // case 'GoToOtherDay' :
    // return <GoToOtherDay onClick={날짜선택 후 누르는 버튼}>확인</GoToOtherDay>
    default:
      return null;
    //}
  }
};

export default CustomButton;