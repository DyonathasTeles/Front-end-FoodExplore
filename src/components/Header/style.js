import styled from "styled-components"

export const Container = styled.div `
  width: 100%;
  height: 11.4rem;

  grid-area: Header;
  
  display: flex;
  align-items: center;
  justify-content: space-around;
  background-color: ${({theme}) => theme.COLORS.DARK_700};

  .frame {
    background-color: transparent;
    border: none;

    img {
      width: 2.4rem;
      height: 1.8rem;
    }
  }

  .logo {
    display: flex;
    gap: .8rem;

    img {
      width: 2.4rem;
      height: 2.4rem;
    }

    h1 {
      font-family: "Roboto",sans-serif;
      font-size: 2.1rem;
      font-weight: 700;
    }
  }

  .receipt {
    background-color: transparent;
    border: none;

    img {
      height: 3.2rem;
      width: 3.2rem;
    }
  }
`