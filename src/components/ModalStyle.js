import styled from "styled-components";
export const Container = styled.div`
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

export const ModalBox = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center; // 수직 정렬
  align-items: center;
  background-color: rgb(224, 224, 224);
  padding: 20px;
  border-radius: 40px;
  width: 500px;
  height: 350px;
`;

export const TitleInput = styled.input`
  font-size: 16px;
  padding: 10px;
  border-radius: 10px;
  border: 1px solid lightgrey;
  width: 427px;
  margin-bottom: 10px;
`;

export const ContentInput = styled.input`
  font-size: 16px;
  padding: 10px;
  border-radius: 10px;
  border: 1px solid lightgrey;
  width: 427px;
  height: 182px;
  margin-top: 10px;
`;
export const ButtonWrapper = styled.div`
  margin-left: 370px;
  margin-top: 20px;
  position: relative;
`;
