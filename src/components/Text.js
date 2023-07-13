import styled from "styled-components";
export const MainItems = styled.div`
  display: grid;
  place-items: center;
  height: 100vh;
  margin-top: -150px;
`;
export const MainTitle = styled.h1`
  font-size: 80px;
  color: white;
  text-shadow: 3px 4px 7px grey;
`;

export const MessageBubble1 = styled.p`
  background-color: rgb(237, 237, 237);
  color: rgb(94, 94, 94);
  border-radius: 30px;
  padding: 10px 20px;
  margin: 10px;
  width: 100px;
  max-width: 60%;
  word-wrap: break-word;
  font-size: 30px;
  text-align: center;
`;

export const MessageBubble2 = styled.p`
  background-color: rgb(46, 204, 113);
  color: white;
  border-radius: 30px;
  padding: 10px 20px;
  margin-left: auto;
  width: 400px;
  max-width: 60%;
  word-wrap: break-word;
  font-size: 30px;
  text-align: center;
`;
