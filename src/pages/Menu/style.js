import styled from "styled-components"

export const Container = styled.div`
  width: 100%;
  height: 100vh;

  display: grid;
  grid-template-rows: 11.4rem auto 7.7rem;
  grid-template-areas: 
  "Header"
  "Main"
  "Footer"
  ;

  .header {

    grid-area: Header;

    padding: 6.4rem 2.8rem 3.2rem;
    background-color: ${({ theme }) => theme.COLORS.DARK_700};

    
    h1{
      display: flex;
      align-items: center;
      gap: 1.6rem;

      font-family:"Roboto",sans-serif;
      font-size: 2.1rem;
      font-weight: 400;
    }

    svg{
      font-size: 3rem;
    }
  }
`
export const Production = styled.div`
  width: 100%;
  padding: 3.6rem 2.8rem 1.4rem;

  grid-area: Main;

  main {

    button {
      width: 100%;

      background-color: transparent;  
      color: ${({ theme }) => theme.COLORS.LIGHT_300};
      border: none;
      border-bottom: 1px solid ${({ theme }) => theme.COLORS.DARK_1000};

      text-align: left;
      font-family: "Poppins", sans-serif;
      font-size: 2.4rem;
      font-weight: 300;
      line-height: 140%; 

      padding: 1rem;
      margin-top: 3.6rem;
    }
  }
  
`