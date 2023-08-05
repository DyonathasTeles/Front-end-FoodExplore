import styled from "styled-components"

export const Container = styled.div`
  max-width: 42.8rem;
  height: 100vh;

  display: grid;
  grid-template-rows: 11.4rem auto 7.7rem;
  grid-template-areas: 
  "Header"
  "Content"
  "Footer"
;
  
`

export const Content = styled.div`
  grid-area: Content;

  width: 100vw;
  
  .description {
    width: 37.6rem;
    height: 12rem;
    margin: 4.4rem auto 6.2rem;

    display: flex;
    flex-direction: row-reverse;
    

    background-image: ${({theme}) => theme.COLORS.GRADIENT_200};
    border-radius: .3rem;
    position: relative;

    img{
      position: absolute;
      right: 210px;
      bottom: 0;
    }

    .text {
      padding: 3.6rem 2.1rem 0 0;
      display: flex;
      flex-direction: column;
      

      h3 {
        font-family: "Poppins", sans-serif;
        font-size: 1.8rem;
        font-weight: 600;
        line-height: 140%;
        margin-bottom: .3rem;
      }
      
      p {
        font-family: "Poppins", sans-serif;
        font-size: 1.2rem;
        line-height: 140%;
        text-align: justify;
        width: 20.2rem;
      }

    }

  }

  .section {
    margin-bottom: 2.4rem;
    

    h2 {
      font-family:"Poppins", sans-serif;
      font-size: 1.8rem;
      font-weight: 500;
      line-height: 140%;

      padding: 0 2.4rem 2.4rem;
    }

    .cards {
      display: flex;
      overflow-x: scroll;
      gap: 1.6rem;

      padding-left: 2.4rem;
    }
  }
`