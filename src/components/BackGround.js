//main화면의 배경
import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
    body {
        background-color:rgba(52, 152, 219, 0.13);
        background-image: url(${(props) => props.bgimg});
        background-size: cover;
        background-attachment: fixed;
    
    }
`;
