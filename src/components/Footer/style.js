import styled from "styled-components"

export const Container = styled.div`
  width: 100%;
  height: 7.7rem;
  display: flex;
  align-items: center;
  justify-content: space-around ;

  background-color: ${({ theme }) => theme.COLORS.DARK_600};
  
  .logo {
    display: flex;
    align-items: center;
    gap: .6rem;

    img {
      height: 18px;
      width: 22px;
    }

    h1 {
      color: ${({ theme }) => theme.COLORS.LIGHT_700};

      font-family: "Roboto", sans-serif;
      font-size: 1.5rem;
  }
  }

  .rights {
    p{
      font-family: "DM Sans", sans-serif;
      font-size: 1.2rem;
      font-weight: 400;

      color: ${({ theme }) => theme.COLORS.LIGHT_200};
    }
  }
`