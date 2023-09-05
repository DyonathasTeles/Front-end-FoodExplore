import styled from 'styled-components'

export const Container = styled.div`
  width: 100%;
  height: 7.7rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 2.8rem;

  grid-area: Footer;

  background-color: ${({ theme }) => theme.COLORS.DARK_600};

  .logo {
    display: flex;
    align-items: center;
    gap: 0.6rem;

    img {
      height: 1.8rem;
      width: 2.2rem;
    }

    h1 {
      color: ${({ theme }) => theme.COLORS.LIGHT_700};

      font-family: 'Roboto', sans-serif;
      font-size: clamp(1.5rem, 1.1rem + 0.8893vw, 2.4rem);
    }
  }

  .rights {
    p {
      font-family: 'DM Sans', sans-serif;
      font-size: 1.2rem;
      font-weight: 400;

      color: ${({ theme }) => theme.COLORS.LIGHT_200};
    }
  }

  @media (min-width: 824px) {
    justify-content: space-between;
    padding: 2.4rem 2.4rem;

    .logo {
      img {
        height: 3rem;
        width: 3rem;
      }
    }
  }
`
