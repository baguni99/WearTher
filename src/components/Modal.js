import React, { useState } from "react";
import CustomButton from "./Button";
import { Container, TitleInput, ContentInput } from "./ModalStyle";
import { ModalBox, ButtonWrapper } from "./ModalStyle";
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
  const handleClick = () => {
    setTitle("");
    setPhoto(null);
    setPost("");
  };

  return (
    <Container>
      <ModalBox>
        <div className="post">
          <TitleInput
            className="TitleInput"
            type="text"
            name="title"
            placeholder="title"
            value={title}
            onChange={handleTitleChange}
          />
          <br />
          {/* 파일을 선택하면 onChange이벤트 발생하며 handleFileChange함수 호출됨 */}
          <input type="file" name="photo" onChange={handleFileChange} />
          <br />
          <ContentInput
            type="text"
            name="post"
            placeholder="enter your comment..."
            value={post}
            onChange={handlePostChange}
          />
        </div>
        <ButtonWrapper>
          <CustomButton name="closeButton" />
          <CustomButton
            name="AddPostButton"
            title={title}
            post={post}
            photo={photo}
            onClick={handleClick}
          />
        </ButtonWrapper>
      </ModalBox>
    </Container>
  );
};

export default Modal;
