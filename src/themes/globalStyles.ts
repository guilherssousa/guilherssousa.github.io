import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  * {
    padding: 0;
    margin: 0;
    box-sizing: border-box;
    font-family: 'Nunito', sans-serif;
  }
  html {
    font-size: 16px;
    scroll-behavior: smooth;
    -webkit-font-smoothing: antialiased;
  }

  body {
    overflow: overlay;
}

  ::-webkit-scrollbar {
    background-color: transparent;
    padding: 1em;
    width: 8px;
  }

  ::-webkit-scrollbar-thumb {
    background: #ffffff40;
    border-radius: 10px;
  }
`;

export default GlobalStyle;
