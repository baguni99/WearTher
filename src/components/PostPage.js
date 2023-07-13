import { styled } from "styled-components";

export const PostComponents = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: flex-start;
  gap: 2%;
`;

export const PostContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
  width: 300px;
  height: 400px;
  border: 1px solid #ccc;
  background-color: white;
  border-radius: 20px;
  margin: 10px;
  padding: 10px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
`;

export const PostImage = styled.img`
  width: 280px;
  height: 300px;
  border-radius: 10px;
`;

export const PostTitle = styled.h2`
  font-size: 1.2em;
  color: #333;
  margin-top: 10px;
`;

export const PostContent = styled.p`
  font-size: 1em;
  color: #666;
  margin-top: 10px;
`;

export const WarningMessage = styled.div`
  margin: 40px;
  font-size: 15px;
  color: grey;
`;

export const InputDate = styled.input`
  margin-left: 10px;
`;
