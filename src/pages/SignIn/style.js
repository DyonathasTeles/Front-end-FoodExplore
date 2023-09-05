import styled from 'styled-components'

export const Container = styled.div`
  width: 100%;
  height: 100vh;

  background-color: ${({ theme }) => theme.COLORS.DARK_400};
`

export const Content = styled.div`
  max-width: 428px;
  height: 100vh;
  margin: auto;
  padding: 10rem 3rem 5rem 4rem;

  animation: toAppear 1s;

  > .logo {
    display: flex;
    align-items: center;
    gap: 1rem;
    white-space: nowrap;
    user-select: none;

    h1 {
      font-family: 'Roboto', sans-serif;
      font-size: 3.7rem;
    }
  }

  > main {
    width: 100%;
    max-width: 31.6rem;

    margin-inline: auto;
    margin-top: 7.3rem;

    .inputs {
      display: flex;
      flex-direction: column;
      gap: 3.2rem;

      margin-bottom: 3.2rem;

      p {
        font-family: 'Roboto', sans-serif;
        margin-bottom: 0.8rem;
        color: ${({ theme }) => theme.COLORS.LIGHT_400};
      }
    }

    .linkRegister {
      margin-top: 3.2rem;

      button {
        font-size: 1.4rem;
        line-height: 2.4rem;

        margin: auto;

        color: ${({ theme }) => theme.COLORS.LIGHT_100};
      }
    }

    .hide {
      display: none;
    }
  }

  @keyframes toAppear {
    0% {
      transform: scale(0.5);
      opacity: 0;
    }

    100% {
      transform: scale(1);
      opacity: 1;
    }
  }

  @media (min-width: 428px) {
    padding: 15.8rem 4.7rem 15.8rem 6.5rem;
  }

  @media (min-width: 870px) {
    max-width: 100%;
    padding: 1rem;
    gap: 2rem;
    display: flex;
    align-items: center;
    justify-content: space-around;

    .logo {
      white-space: nowrap;

      h1 {
        font-size: 4.2rem;
      }
    }

    main {
      max-height: 541px;
      max-width: 476px;
      padding: 6rem;

      background: ${({ theme }) => theme.COLORS.DARK_700};
      margin: 0;

      border-radius: 1.6rem;

      h2 {
        font-family: 'Poppins', sans-serif;
        font-size: 3.2rem;
        font-weight: 500;
        line-height: 140%;

        text-align: center;
      }

      .inputs {
        margin: 3.2rem 0;
      }

      .hide {
        display: block;
      }
    }
  }
`
