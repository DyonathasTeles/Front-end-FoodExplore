import styled from "styled-components"

export const Container = styled.div`
  width: 100%;
  
  :focus-within {
    border: 1px solid ${({theme}) => theme.COLORS.LIGHT_300};
  }

  >.content {

    background-color: ${({theme}) => theme.COLORS.DARK_900};
    border-radius: 0.8rem;

    padding: 1.2rem;

    display: flex;
    align-items: center;
    justify-content: center;


    >label {
      height: 24px;

      >svg {
        margin-right: 10px;
      }
    }
    
    >input {
      width: 100%;
      
      font-family: 'Roboto', sans-serif;
      font-size: 1.6rem;
      font-style: normal;
      font-weight: 400;
      line-height: 100%;
  
  
      color: ${({theme}) => theme.COLORS.LIGHT_300};
      background: transparent;
      border: none;
      
      outline: none;
  
      ::placeholder {
        color: ${({theme}) => theme.COLORS.LIGHT_500};
        font-size: 1.6rem;
      }
  }

    
  }
`