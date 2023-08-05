import styled from "styled-components"

export const Container = styled.div `
  width: 100%;
  height: 11.4rem;

  grid-area: Header;
  
  display: flex;
  align-items: center;
  gap: 7.4rem;
  padding: 2.8rem;
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
    align-items: center;
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
      
        span {
          color: ${({theme}) => theme.COLORS.BLUE_200};
          font-family: "Roboto", sans-serif;
          font-size: 1.2rem;
          font-weight: 400;
          line-height: 160%;
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