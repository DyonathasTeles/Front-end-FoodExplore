import styled from "styled-components"

export const Container = styled.div`
  width: 10rem;
  display: flex;
  gap: 1.5rem;
  align-items: center;
  justify-content: center;
  

  .minus {
    border: none;
    background-color: transparent;
    
    img {
      height: 2.4rem;
      width: 2.4rem;
    }
  }

  h1 {
    font-family: "Roboto", sans-serif;
    font-size: 2.2rem;
    font-weight: 700;
    line-height: 160%;
  }

  .plus {
    border: none;
    background-color: transparent;

    img {
      height: 2.4rem;
      width: 2.4rem;
    }
  }
`