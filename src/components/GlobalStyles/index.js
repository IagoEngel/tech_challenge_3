import { createGlobalStyle } from 'styled-components';


const GlobalStyle = createGlobalStyle`
    * {
        box-sizing: border-box;
        font-family: "Raleway", sans-serif;
    }
    body {
        margin: 0;
        background-color: rgb(243, 246, 248);
        max-height: 100%;
    }
`

export default GlobalStyle