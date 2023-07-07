//main화면의 배경을 만드는 컴포넌트
import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
    body {
    background-image: url(${props => props.bgimg});
    background-size: cover;
    background-attachment: fixed;
    }
`;
