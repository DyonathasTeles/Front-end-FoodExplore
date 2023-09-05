import styled from 'styled-components'

export const Container = styled.div`
  width: 100%;
  height: 100vh;

  display: grid;
  grid-template-rows: 11.4rem auto 7.7rem;
  grid-template-areas:
    'Header'
    'Content'
    'Footer';

  animation: toAppear 1000ms ease-out;
  transition: 500ms;

  @keyframes toAppear {
    0% {
      opacity: 0;
      transform: translateX(-55px);
    }

    50% {
      opacity: 0.3;
    }

    100% {
      opacity: 1;
    }
  }
`

export const Content = styled.div`
  grid-area: Content;

  width: 100%;
  padding: 1rem;

  .description {
    max-width: 37.6rem;
    width: 100%;
    height: 12rem;
    margin: 4.4rem auto 6.2rem;

    display: flex;
    flex-direction: row-reverse;

    background-image: ${({ theme }) => theme.COLORS.GRADIENT_200};
    border-radius: 0.3rem;
    position: relative;

    img {
      width: 151px;
      height: 139px;
      position: absolute;
      right: 210px;
      bottom: 0;
    }

    .text {
      padding: 3.6rem 2.1rem 0 0;
      display: flex;
      flex-direction: column;

      h3 {
        font-family: 'Poppins', sans-serif;
        font-size: 1.8rem;
        font-weight: 600;
        line-height: 140%;
        margin-bottom: 0.3rem;
      }

      p {
        font-family: 'Poppins', sans-serif;
        font-size: 1.2rem;
        line-height: 140%;
        text-align: justify;
        width: 20.2rem;
      }
    }
  }

  .splide {
    display: grid;
  }

  .section {
    margin: 0 auto;
    margin-bottom: 2.4rem;
    width: 100%;
    max-width: 900px;

    > h2 {
      font-family: 'Poppins', sans-serif;
      font-size: 1.8rem;
      font-weight: 500;
      line-height: 140%;

      padding: 0 2.4rem 2.4rem;
    }
  }

  @media (min-width: 428px) {
    padding: 0;

    .description {
      max-width: 37.6rem;
      width: 100%;
      height: 12rem;
      margin: 4.4rem auto 6.2rem;

      display: flex;
      flex-direction: row-reverse;

      background-image: ${({ theme }) => theme.COLORS.GRADIENT_200};
      border-radius: 0.3rem;
      position: relative;

      img {
        width: 151px;
        height: 139px;
        position: absolute;
        right: 210px;
        bottom: 0;
      }

      .text {
        padding: 3.6rem 2.1rem 0 0;
        display: flex;
        flex-direction: column;

        h3 {
          font-family: 'Poppins', sans-serif;
          font-size: 1.8rem;
          font-weight: 600;
          line-height: 140%;
          margin-bottom: 0.3rem;
        }

        p {
          font-family: 'Poppins', sans-serif;
          font-size: 1.2rem;
          line-height: 140%;
          text-align: justify;
          width: 20.2rem;
        }
      }
    }

    .section {
      margin-bottom: 2.4rem;

      > h2 {
        font-family: 'Poppins', sans-serif;
        font-size: 1.8rem;
        font-weight: 500;
        line-height: 140%;

        padding: 0 2.4rem 2.4rem;
      }
    }
  }

  @media (min-width: 824px) {
  }
`
