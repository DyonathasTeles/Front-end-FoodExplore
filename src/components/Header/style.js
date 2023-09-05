import styled from 'styled-components'

export const Container = styled.div`
  width: 100%;
  height: 11.4rem;
  padding: 5.6rem 2.8rem 2.4rem;
  grid-area: Header;
  background-color: ${({ theme }) => theme.COLORS.DARK_700};
  display: grid;

  .Desktop {
    display: none;
  }

  .Mobile {
    display: flex;
    align-items: center;
    justify-content: ${({ $admin }) => ($admin ? '' : 'space-between')};
    gap: ${({ $admin }) => ($admin ? '25%' : 0)};

    .frame {
      background-color: transparent;
      border: none;
      color: ${({ theme }) => theme.COLORS.LIGHT_300};

      > svg {
        margin-top: 5px;
        font-size: 3.2rem;
      }
    }

    > .logo {
      display: flex;
      align-items: center;
      gap: 0.8rem;
      user-select: none;
      white-space: nowrap;

      .hide {
        display: none;
      }

      img {
        width: 2.4rem;
        height: 2.4rem;
      }

      h1 {
        font-family: 'Roboto', sans-serif;
        font-size: 2.1rem;
        font-weight: 700;
      }

      span {
        color: ${({ theme }) => theme.COLORS.BLUE_200};
        font-family: 'Roboto', sans-serif;
        font-size: 1.2rem;
        font-weight: 400;
        line-height: 160%;
      }
    }

    .admLogo {
      margin-left: -50%;
    }

    .receipt {
      background-color: transparent;
      border: none;
      color: ${({ theme }) => theme.COLORS.LIGHT_300};
      position: relative;

      > svg {
        font-size: 3.2rem;
        margin-top: 5px;
      }

      .orderNumbers {
        position: absolute;
        top: -2px;
        right: -2px;

        width: 21px;
        padding: 3px;

        border-radius: 50%;
        background-color: ${({ theme }) => theme.COLORS.RED_100};
      }
    }
  }

  @media (min-width: 620px) {
    .Mobile {
      .logo {
        h1 {
          font-size: clamp();
        }
      }
    }
  }

  @media (min-width: 824px) {
    height: 10.4rem;
    padding: 2.4rem 3rem;

    .Mobile {
      display: none;
    }

    .Desktop {
      /* max-width: 1024px;
    width: 100%; */

      display: flex;
      align-items: center;
      justify-content: center;
      gap: 2.4rem;

      .logo {
        display: flex;
        align-items: center;
        gap: 0.8rem;
        white-space: nowrap;
        user-select: none;
        margin-right: 1.3rem;

        img {
          width: 3rem;
          height: 3rem;
        }

        h1 {
          font-family: 'Roboto', sans-serif;
          font-size: 2.4rem;
          font-weight: 700;
        }

        span {
          color: ${({ theme }) => theme.COLORS.BLUE_200};
          font-family: 'Roboto', sans-serif;
          font-size: 1.2rem;
          font-weight: 400;
          line-height: 160%;
        }
      }

      .ButtonNewDish {
        width: 50%;
        max-width: 21.6rem;
        white-space: nowrap;
      }

      .exit {
        background-color: transparent;
        border: none;
        color: ${({ theme }) => theme.COLORS.LIGHT_100};
        font-size: 3.2rem;
        display: grid;
      }
    }
  }
`
