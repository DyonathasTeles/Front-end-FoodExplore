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

  a {
    text-decoration: none;
  }

  button, a {
    cursor: pointer;
    transition: filter 200ms;
  }

  button:hover, a:hover {
    filter: brightness(0.9);
  }

`