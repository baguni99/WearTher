import React, { useState } from "react";
import CustomButton from "./Button";
import { useDispatch } from "react-redux";

const Modal = () => {
  const [title, setTitle] = useState("");
  const [photo, setPhoto] = useState(null);
  const [post, setPost] = useState("");

  const handleTitleChange = (e) => {
    setTitle(e.target.value);
  };
  const handleFileChange = (e) => {
    setPhoto(e.target.files[0]); //하나의 파일만 업로드 할 수 있게 [0], 선택한 파일은 photo 상태에 저장
  };
  const handlePostChange = (e) => {
    setPost(e.target.value);
  };

  return (
    <div>
      <div className="post">
        <input
          type="text"
          name="title"
          placeholder="제목을 입력하세요"
          onChange={handleTitleChange}
        />
        <br />
        {/* 파일을 선택하면 onChange이벤트 발생하며 handleFileChange함수 호출됨 */}
        <input type="file" name="photo" onChange={handleFileChange} />
        <br />
        <input
          type="text"
          name="post"
          placeholder="한마디"
          onChange={handlePostChange}
        />
      </div>
      <div className="btn">
        <CustomButton name="closeButton" />
        <CustomButton
          name="AddPostButton"
          title={title}
          post={post}
          photo={photo}
        />
      </div>
    </div>
  );
};

export default Modal;
