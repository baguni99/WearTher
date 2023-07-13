import styled from "styled-components";

const MultiUseButton = styled.button``;
export const AddButton = styled(MultiUseButton)`
  width: 200px;
  height: 60px;
  border-color: transparent;
  border-radius:40px;
  background-color: rgb(94, 94, 94, 0.7);
  color: white;
  font-size: 25px;
  margin-right: 30px;;
  &:hover {
    background-color: rgb(50, 50, 50, 0.7);
`;

export const ViewButton = styled(MultiUseButton)`
  width: 200px;
  height: 60px;
  border-radius:40px;
  border-color: transparent;
  background-color: rgb(94, 94, 94, 0.7);
  color: white;
  font-size: 25px;
  &:hover {
    background-color: rgb(50, 50, 50, 0.7);
`;
export const MainButtons = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: -90px;
`;
export const DeleteButton = styled(MultiUseButton)`
  width: 24px;
  height: 24px;
`;

export const AddCommentButton = styled(MultiUseButton)`
  width: 24px;
  height: 24px;
`;

export const EditButton = styled(MultiUseButton)`
  width: 24px;
  height: 24px;
`;

export const CloseButton = styled.img.attrs({
  src: "/assets/close.png",
  alt: "Close button",
})`
  width: 20px;
  height: 20px;
  cursor: pointer;
  margin-right: 10px;
`;
export const AddPostButton = styled.img.attrs({
  src: "/assets/plus.png",
  alt: "AddPost button",
})`
  width: 25px;
  height: 25px;
  cursor: pointer;
  margin-left: 10px;
`;

export const GoToOtherDayButton = styled(MultiUseButton)`
width: 55px;
height: 30px;
border-radius: 20px;
border-color: transparent;
margin-left:20px;
background-color: rgb(94, 94, 94, 0.5);
color: white;
font-size: 17px;
&:hover {
  background-color: rgb(50, 50, 50, 0.7);
`;
export const WatchDetailButton = styled(MultiUseButton)`
  width: 80px;
  height: 35px;
  position: absolute;
  bottom: 10px;
  border-radius: 20px;
  border-color: transparent;
  background-color: rgb(94, 94, 94, 0.5);
  color: white;
  font-size: 18px;
  &:hover {
    background-color: rgb(50, 50, 50, 0.7);
`;
