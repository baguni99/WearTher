//상세보기 버튼 click -> 모달창이 뜸 -> 모달창 안에 post.image , post.title, post.content

import React from "react";

const DetailModal = ({ post, closeDetailModal }) => {
  if (!post) {
    //post prop이 null인지 확인하고, null 이면 아무것도 레더링하지 않음
    return null;
  } else
    return (
      <div>
        <div className="detailPost">
          <div key={post.id}>
            <img src={post.image} alt={post.title} />
            <h2>{post.title}</h2>
            <p>{post.content}</p>
            <button onClick={closeDetailModal}>닫기</button>
          </div>
        </div>
      </div>
    );
};
export default DetailModal;
