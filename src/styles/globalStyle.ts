import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    html {
        font-size: 62.5%;
    }

    body {
        font-family: 'DM Sans', sans-serif;
        background-color: ${({ theme }) => theme.colors.background};
    }

    li, ul, ol, li, a {
        list-style: none;
    }

    input, button, text-area {
        font-family: 'DM Sans', sans-serif;
        border: 0;
    }

    .mainContainer {
      padding: 0 15rem;
    }

    @media(max-width: 805px) {
      .mainContainer {
        padding: 0 5rem;
      }
    }

    @media (max-width: 1015px) {
      html {
        font-size: 55%;
      }
    }
    
    @media (max-width: 720px) {
      html {
        font-size: 48.5%;
      }
    }

`;