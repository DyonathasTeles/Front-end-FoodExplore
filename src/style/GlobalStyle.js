import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
  *{
    padding: 0;
    margin: 0;
    box-sizing: border-box;
  }

  :root {

    font-size: 62.5%;
  }

  body {
    font-size: 1.6rem;
    background: ${({ theme }) => theme.COLORS.DARK_400};
    color: ${({ theme }) => theme.COLORS.LIGHT_300};

  }

  ::-webkit-scrollbar{
    background-color: ${({ theme }) => theme.COLORS.DARK_200};
    width: 1rem;
    border-radius: .5rem;
  }

  ::-webkit-scrollbar-thumb{
    padding: 0.2rem;
    background-color: ${({ theme }) => theme.COLORS.LIGHT_400};
    border-radius: .5rem;
  }
  
  a {
    text-decoration: none;
  }

  button, a {
    cursor: pointer;
    transition: all 500ms 200ms;
  }

  button:hover, a:hover {
    filter: brightness(0.9);
    transform: scale(1.02);
  }

`