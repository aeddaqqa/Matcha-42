import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  *,
  *::before,
  *::after {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
  body {
    font-family: 'DidactGothic', sans-serif;
    font-size: calc(0.75em + 1vmin);
    width: 100%;
    height: 100vh;
  }
  input[type='submit'] {
        margin-top: 1rem;
        width: 70%;
        min-width: 250px;
        max-width: 450px;
        height: 60px;
        border: none;
        border-radius: 10px;
        background-image: linear-gradient(
            to right,
            ${(props) => props.theme.colors.primary},
            ${(props) => props.theme.colors.secondary}
        );
        font-size: 1.3rem;
        color: white;
        @media (max-width: 1000px) {
        max-width: 450px;
        width: 100% !important;
    }
    }
    p {
      margin : 0;
    }
`;
export default GlobalStyle;
