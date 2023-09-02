import styled from "styled-components"

export const Container = styled.div`
  width: 210px;
  height: 29.2rem;

  background-color: ${({theme}) => theme.COLORS.DARK_200};
  border: 1px solid ${({theme}) => theme.COLORS.DARK_300};
  border-radius: .8rem;

  padding: 2.4rem;

`
export const Content =styled.div`
  width: 100%;
  display: grid;
  justify-content: center;
  justify-items: center;
  position: relative;
  
  .buttonHeart {
    background-color: transparent;
    color: ${({theme}) => theme.COLORS.LIGHT_300};
    border: none;

    
    position: absolute;
    top: 0;
    right: 0;
    
    svg{
      width: 2.4rem;
      height: 2.2rem;
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

  
`