import styled from 'styled-components'

export const Container = styled.div`
  max-width: 100%;
  height: 100vh;
  display: grid;
  grid-template-rows: 11.4rem auto 7.7rem;

  grid-template-areas:
    'Header'
    'Content'
    'Footer';
`
export const Content = styled.div`
  width: 100%;

  padding: 1.6rem 3rem 3.3rem;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;

  grid-area: Content;

  .product {
    display: flex;
    flex-direction: column;
    align-items: center;

    width: fit-content;

    .img-dish {
      margin: 1.6rem auto;

      img {
        height: 264px;
        width: 264px;
      }
    }

    .details {
      display: flex;
      flex-direction: column;
      align-items: center;

      margin-bottom: 4.8rem;

      h2 {
        font-family: 'Poppins', sans-serif;
        font-size: 2.7rem;
        font-weight: 500;
        line-height: 140%;
      }

      p {
        text-align: center;
        font-family: 'Poppins', sans-serif;
        font-weight: 400;
        font-size: 1.6rem;
        line-height: 140%;
        margin: 2.4rem 0;
      }

      .tags {
        display: flex;

        align-items: center;
        justify-content: center;
        gap: 2.4rem;
        flex-wrap: wrap;

        width: 100%;
      }
    }

    .purchase-amount {
      display: flex;
      align-items: center;
      justify-content: center;
      width: 100%;
      gap: 1.6rem;

      .ButtonOrder {
        width: fit-content;
        padding: 1rem 1.5rem;
      }
    }
  }

  #pc {
    display: none;
  }

  @media (min-width: 428px) {
    padding: 1.6rem 5.6rem 3.3rem;

    .product {
      margin: 0 auto;
      .purchase-amount {
        .ButtonOrder {
          padding: 1.2rem 2.4rem;
        }
      }
    }
  }

  @media (min-width: 824px) {
    padding: 0.4rem 5rem 3.3rem;

    .product {
      flex-direction: row;
      gap: 4.7rem;

      .img-dish {
        margin: 4.2rem 0 0;

        img {
          height: 389px;
          width: 390px;
        }
      }

      .details {
        align-items: flex-start;

        h2 {
          font-family: 'Poppins', sans-serif;
          font-size: 3rem;
          line-height: 140%;
        }

        p {
          text-align: initial;
          font-family: 'Poppins', sans-serif;
          font-size: 2rem;
          line-height: 140%;
          margin: 2.4rem 0;
        }

        .tags {
          justify-content: flex-start;
          gap: 1.2rem;
        }
      }
      .purchase-amount {
        width: fit-content;

        .ButtonOrder {
          max-width: 200px;
        }
      }
    }

    .mobile {
      display: none;
    }
  }
`
