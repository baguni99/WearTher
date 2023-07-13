//상세보기 버튼 click -> 모달창이 뜸 -> 모달창 안에 post.image , post.title, post.content

import React from "react";
import {
  DetailModalBox,
  DetailModalCloseButton,
  DetailModalContainer,
  DetailModalContent,
  DetailModalImg,
  DetailModalTitle,
} from "./DetailModalStyle";

const DetailModal = ({ post, closeDetailModal }) => {
  if (!post) {
    //post prop이 null인지 확인하고, null 이면 아무것도 레더링하지 않음
    return null;
  } else
    return (
      <DetailModalContainer>
        <DetailModalBox>
          <div key={post.id}>
            <DetailModalImg src={post.image} alt={post.title} />
            <DetailModalTitle>{post.title}</DetailModalTitle>
            <DetailModalContent>{post.content}</DetailModalContent>
            <DetailModalCloseButton onClick={closeDetailModal} />
          </div>
        </DetailModalBox>
      </DetailModalContainer>
    );
};
export default DetailModal;
