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

  display: flex;
  flex-direction: column;
  align-items: center;

  width: 100%;
  padding: 1rem;

  .description {
    max-width: 37.6rem;
    width: 100%;
    height: 12rem;
    margin: 4.4rem 0 6.2rem;

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
    margin-left: 2.4rem;

    .splide__slide {
      margin-right: 1.6rem;
    }
  }

  .section {
    margin-bottom: 2.4rem;
    width: 100%;
    max-width: 1144px;

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
      display: flex;
      flex-direction: row-reverse;

      background-image: ${({ theme }) => theme.COLORS.GRADIENT_200};
      border-radius: 0.3rem;
      position: relative;

      img {
        width: clamp(19.1rem, -0.639rem + 47.0149vw, 63.2rem);
        height: clamp(14.9rem, 1.9833rem + 27.3987vw, 40.6rem);
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
          font-size: clamp(1.8rem, 1.4rem + 1.1111vw, 3rem);
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

  @media (min-width: 440px) {
    .description {
      max-width: 42.7rem;
      height: 14rem;
      margin: 7rem 0 6.2rem;
    }
  }

  @media (min-width: 600px) {
    .description {
      max-width: 55rem;
      width: 100%;
      height: 16rem;
      margin: 10rem 0 6.2rem;

      img {
        width: 33rem;
        height: 18.7rem;
        right: 250px;
      }
    }
  }

  @media (min-width: 824px) {
    .splide {
      margin-left: 1rem;

      .splide__slide {
        margin-right: 2.7rem;
      }
    }

    .section {
      > h2 {
        padding: 0 0 2.4rem 2.4rem;
      }
    }

    .description {
      max-width: 80rem;
      height: 26rem;
      margin: 14.6rem auto 6.2rem;

      img {
        width: 490px;
        height: 300px;
        right: 350px;
      }

      .text {
        padding: 8.8rem 1rem 0 0rem;
        margin-left: 40rem;

        h3 {
          font-weight: 500;
        }

        p {
          font-size: 1.6rem;
          line-height: 100%;
          width: 100%;
        }
      }
    }
  }

  @media (min-width: 1200px) {
    .description {
      max-width: 1120px;
      height: 26rem;
      margin: 14.6rem auto 6.2rem;

      img {
        width: 63.2rem;
        height: 40.6rem;
        right: 550px;
      }

      .text {
        padding: 8.8rem 10rem 0 0rem;
        margin-left: 0;

        h3 {
          font-weight: 500;
        }

        p {
          font-size: 1.6rem;
          line-height: 100%;
          width: 100%;
        }
      }
    }
  }
`
