import React, { useState } from "react";
import {
  handleCloseModal,
  handleShowModal,
} from "../store/features/modalSlice";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import CustomButton from "./Button";
import db, { storage } from "../services/firebase/config";

const Modal = () => {
  const dispatch = useDispatch();
  //const show = useSelector((state) => state.modal.show); //show상태 조회
  const [title, setTitle] = useState("");
  const [photo, setPhoto] = useState(null);
  const [post, setPost] = useState("");
  const handleFileChange = (e) => {
    setPhoto(e.target.files[0]); //하나의 파일만 업로드 할 수 있게 [0], 선택한 파일은 photo 상태에 저장
  };

  //AddPostButton을 틀릭하면 handleUpload 함수가 호출된다 ( 이미지를 Firebase Storage에 업로드)
  //const handleUpload = async () => {
  //try {
  //try catch구문 사용하여 업로드 중에 발생할 수 있는 예외: 오류 발생하면 catch 블록 실행
  //const uploadTask = storage.ref(`images/${photo.name}`).put(photo);
  // 업로드 완료를 기다림
  //await uploadTask;
  //} catch (error) {
  //console.error("Upload failed:", error);
  // }
  //const db = firebase.firestore();
  //const storage = firebase.storage();

  return (
    <div>
      <div className="post">
        <input type="text" name="title" placeholder="제목을 입력하세요" />
        <br />
        {/* 파일을 선택하면 onChange이벤트 발생하며 handleFileChange함수 호출됨 */}
        <input type="file" name="photo" onChange={handleFileChange} />
        <br />
        <input type="text" name="post" placeholder="한마디" />
      </div>
      <div className="btn">
        <CustomButton name="closeButton" />
        <button>등록</button>
      </div>
    </div>
  );
};

export default Modal;
