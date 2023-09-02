import styled from "styled-components"

export const Container = styled.div`
  width: 210px;
  min-height: 29.2rem;
  padding: 2.4rem;
  background-color: ${({theme}) => theme.COLORS.DARK_200};
  border: 1px solid ${({theme}) => theme.COLORS.DARK_300};
  border-radius: .8rem;
  position: relative;



`
export const Content =styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  
  
  .pencil {
    background-color: transparent;
    color: ${({theme}) => theme.COLORS.LIGHT_300};
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
    width: 8.8rem;
    height: 8.8rem;
  }

  .cardTexts {
    display: grid;
    gap: 1.2rem;
    justify-content: center;
    justify-items: center;

    margin: 1.2rem 0;

    >h2 {
      font-family: "Poppins", sans-serif;
      font-weight: 500;
      font-size: 1.4rem;
      line-height: 2.4rem;
    }
  
    p {
      display: none;
    }
  
    span{
      font-family: "Roboto", sans-serif;
      font-size: 1.6rem;
      line-height: 100%;
    }
  }

  .buttonInclude{
    margin-top: 20px;
    width: 100%;
  }
`
export const Heart = styled.label`
  display: block;
  position: absolute;
  right: 3rem;
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
    height: 1.3rem;
    width: 1.3rem;
    transition: 100ms;
    animation: dislike_effect 400ms ease;

    >svg {
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
