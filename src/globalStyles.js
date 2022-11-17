import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
    * {
        box-sizing: border-box;
        margin: 0;
        padding: 0;
    }

    h2 {
        font-size: 22px;
    }

    h3 {
        font-size: 18px;
    }

    p {
        font-size: 14px;
    }

`;

export default GlobalStyles;
