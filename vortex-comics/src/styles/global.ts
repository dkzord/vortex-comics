import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  :root {
    --background: #FCFCFC;
    --color-white: #FFF;
    --color-shodow: #26395338;
    --color-title-card: #2b3d59;
    --color-description-card: #445b73;
  }
  
  *, *::before, *::after {
    margin: 0;
    padding: 0;
    outline: none;
    box-sizing: border-box;
  }

  html{
    overflow-x:hidden;
  }


  //Tamanho de font 16px (para desktop) por padrão
  html{
    @media(max-width: 1080px){
      font-sizing: 93.75%; //15px
    }
    @media(max-width: 720px){
      font-sizing: 87.5%; //14px
    }
  }

  body {
    background: ${({ theme }) => theme.bg2};
    color: ${({ theme }) => theme.text};
    letter-spacing: 0.6px;
    font-family: "Poppins", sans-serif;

    -webkit-font-smoothing: antialiased;
  }

  body, textarea, input, button {
    font-family: 'Poppins', sans-serif;
    font-weight: 400;
  }

  h1, h2, h3, h4, h5, h6, strong {
    font-weight: 600;
  }

  button {
    cursor: pointer;
  }

  [disabled] {
    opacity: 0.6;
    cursor: not-allowed;
  }
`;
