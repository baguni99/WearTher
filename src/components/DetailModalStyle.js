import styled from "styled-components";

export const DetailModalContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(33, 33, 33, 0.54);
  z-index: 999;
  display: flex;
  justify-content: center;
  align-items: center;
`;
export const DetailModalBox = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center; // 수직 정렬
  align-items: center;
  background-color: white;
  padding: 20px;
  border-radius: 40px;
  width: 350px;
  height: 550px;
`;

export const DetailModalTitle = styled.div`
  font-size: 20px;
  padding: 10px;
  margin-bottom: 10px;
  font-weight: bold;
`;

export const DetailModalContent = styled.div`
  font-size: 16px;
  padding: 10px;
  border-radius: 10px;
  border: 1px solid lightgrey;
  width: 300px;
  height: 150px;
  margin-top: 10px;
`;

export const DetailModalImg = styled.img`
  width: 250px;
  height: 300px;
  border-radius: 20px;
  margin-left: 30px;
`;

export const DetailModalCloseButton = styled.img.attrs({
  src: "/assets/close.png",
  alt: "Close button",
})`
  width: 20px;
  height: 20px;
  cursor: pointer;
  margin-top: 20px;
  margin-left: 300px;
`;
