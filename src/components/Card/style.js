import styled from 'styled-components'

export const Container = styled.div`
  width: clamp(21rem, 17.8rem + 8.7037vw, 30.4rem);
  min-height: clamp(29.2rem, 25.4rem + 10.5556vw, 46.2rem);
  padding: 2.4rem;
  background-color: ${({ theme }) => theme.COLORS.DARK_200};
  border: 1px solid ${({ theme }) => theme.COLORS.DARK_300};
  border-radius: 0.8rem;
  position: relative;

  display: grid;
`
export const Content = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex: none;
  justify-content: center;
  flex-direction: column;
  align-items: center;

  .pencil {
    background-color: transparent;
    color: ${({ theme }) => theme.COLORS.LIGHT_300};
    font-size: 2.4rem;
    border: none;

    position: absolute;
    top: 1rem;
    right: 1rem;

    cursor: pointer;

    transition: 200ms;
    &:hover {
      transform: scale(1.1);
    }
  }

  img {
    width: clamp(8.8rem, 5.6rem + 8.7475vw, 17.6rem);
    height: clamp(8.8rem, 5.6rem + 8.7475vw, 17.6rem);
  }

  .cardTexts {
    display: grid;
    gap: 1.2rem;
    justify-content: center;
    justify-items: center;

    margin: 1.2rem 0;

    > h2 {
      font-family: 'Poppins', sans-serif;
      font-weight: 500;
      font-size: clamp(1.6rem, 1rem + 0.994vw, 2.4rem);
      line-height: clamp(2.4rem, 2rem + 0.9543vw, 3.3rem);
    }

    p {
      font-family: 'Roboto', sans-serif;
      font-size: 1.4rem;
      font-weight: 400;
      line-height: 160%;
      display: none;
    }

    span {
      font-family: 'Roboto', sans-serif;
      font-size: clamp(1.6rem, 1rem + 1.5905vw, 3.6rem);
      line-height: 100%;
      color: ${({ theme }) => theme.COLORS.BLUE_200};
    }
  }
  .quantityAndOrder {
    display: flex;
    flex-direction: column;
    gap: 1.6rem;
  }

  @media (min-width: 820px) {
    .quantityAndOrder {
      flex-direction: row;
      margin-top: 1.1rem;
    }

    .cardTexts {
      p {
        display: block;
      }
    }
  }
`
export const Heart = styled.label`
  display: block;
  position: absolute;
  right: 2rem;
  top: 1rem;

  cursor: pointer;
  font-size: 1.25rem;
  user-select: none;
  transition: 100ms;

  &:hover {
    transform: scale(1.1);
  }

  & input {
    position: absolute;
    z-index: -99999;
    cursor: pointer;
    opacity: 0;
    height: 0;
    width: 0;

    &:checked ~ & {
      background: red;
    }
  }

  .checkmark {
    top: 0;
    left: 0;
    height: 2.2rem;
    width: 2.2rem;
    transition: 100ms;
    animation: dislike_effect 400ms ease;

    > svg {
      font-size: 2.2rem;
    }
  }

  & input:checked ~ .checkmark path {
    fill: ${({ theme }) => theme.COLORS.RED_300};
    stroke-width: 0;
  }

  & input:checked ~ .checkmark {
    animation: like_effect 400ms ease;
  }

  @keyframes like_effect {
    0% {
      transform: scale(0);
    }

    50% {
      transform: scale(1.2);
    }

    100% {
      transform: scale(1);
    }
  }

  @keyframes dislike_effect {
    0% {
      transform: scale(0);
    }

    50% {
      transform: scale(1.2);
    }

    100% {
      transform: scale(1);
    }
  }
`
