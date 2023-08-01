import styled from "styled-components"

export const Container = styled.div`
  max-width: 428px;
  height: 100vh;
  display: grid;
  grid-template-rows: 11.4rem auto 7.7rem;

  grid-template-areas: 
  "Header"
  "Content"
  "Footer";
`
export const Content = styled.div`
  width: 100%;

  padding: 1.6rem 5.6rem 3.3rem;

  grid-area: Content;

  .back {
    display: flex;
    align-items: center;

    background-color: transparent;
    border: none;

    margin-top: 2rem;

    color: ${({theme}) => theme.COLORS.LIGHT_300};
    font-family:"Poppins", sans-serif;
    font-size: 2.4rem;
    font-weight: 500;
    line-height: 140%;
  }
  .product {
    display: flex;
    flex-direction: column;
    align-items: center;
    

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
        font-family: "Poppins", sans-serif;
        font-size: 2.7rem;
        font-weight: 500;
        line-height: 140%;
      }

      p {
        text-align: center;
        font-family: "Poppins", sans-serif;
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

        width: 31.6rem;

      }
    }

    .purchase-amount{
      display: flex;
      align-items: center;
      justify-content: center;
      width: 100%;
      gap: 1.6rem;
    }

  }
`