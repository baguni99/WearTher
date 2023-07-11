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
import { db, storage } from "../services/firebase/config";
import { collection, addDoc } from "firebase/firestore";
import { ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";

const CustomButton = ({ name, title, post, photo }) => {
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
  //AddPostButton을 틀릭하면 handleUpload 함수가 호출된다 ( 이미지를 Firebase Storage에 업로드)
  const uploadImage = async () => {
    if (!title || !post || !photo) {
      //값이 설정되었는지 확인 !
      console.error("모든 칸을 입력해주세요");
      return alert("모든 칸을 입력해주세요");
    }
    try {
      //입력창 초기화 setTitle(""), setPhoto(null), setPost("");
      //try catch구문 사용하여 업로드 중에 발생할 수 있는 예외: 오류 발생하면 catch 블록 실행
      const timestamp = Date.now().toString(); // 현재 시간을 문자열로 반환( 스토리지에 이름 같은 파일 덮어씌워지는 것 방지 )
      const storageRef = ref(storage, `images/${timestamp}_${photo.name}`);
      const uploadTask = uploadBytesResumable(storageRef, photo);
      // 업로드 상태 모니터링
      await new Promise((resolve, reject) => {
        uploadTask.on(
          "state_changed",
          (snapshot) => {},
          (error) => {
            console.error("등록 오류! :", error);
            reject(error);
          },
          () => resolve() // 업로드가 성공적으로 완료되면 Promise를 resolve
        );
      });

      // 업로드 완료 후 실행될 코드
      // 이미지 URL 가져오기
      const downloadURL = await getDownloadURL(storageRef);
      // Firestore에 post 추가
      const docRef = await addDoc(collection(db, "posts"), {
        title: title,
        content: post,
        image: downloadURL, // 업로드된 이미지의 URL
      });
      console.log("입력성공: ", docRef.id);
    } catch (error) {
      console.error("입력오류!:", error);
    }
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
    case "AddPostButton":
      return <AddPostButton onClick={() => uploadImage()}>등록</AddPostButton>;
    // case 'GoToOtherDay' :
    // return <GoToOtherDay onClick={날짜선택 후 누르는 버튼}>확인</GoToOtherDay>
    default:
      return null;
    //}
  }
};

export default CustomButton;
