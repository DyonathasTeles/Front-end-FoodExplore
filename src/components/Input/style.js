import styled from "styled-components"

export const Container = styled.div`
  width: 100%;
  max-width: 900px;
  
  :focus-within {
    border: 1px solid ${({theme}) => theme.COLORS.LIGHT_300};
  }

  >.content {
    height: 48px;
    background-color: ${({theme , $cor}) => $cor ? theme.COLORS.DARK_800 : theme.COLORS.DARK_900};
    border-radius: 0.8rem;

    padding: 1.2rem 1.4rem;

    display: flex;
    align-items: center;
    justify-content: center;


    >label {
      height: 2.4rem;

      >svg {
        margin-right: 1rem;
      }
    }
    
    >input {
      width: 100%;
      
      font-family: 'Roboto', sans-serif;
      font-size: 1.6rem;
  
      color: ${({theme}) => theme.COLORS.LIGHT_300};
      background: transparent;
      border: none;
      outline: none;
  
      ::placeholder {
        color: ${({theme}) => theme.COLORS.LIGHT_500};
      }
  }

    input:-webkit-autofill {
      -webkit-box-shadow: 0 0 0 30px ${({theme}) => theme.COLORS.DARK_900} inset;
  }

  input:-webkit-autofill {
      -webkit-text-fill-color: ${({theme}) => theme.COLORS.LIGHT_400} ;
  }

    
  }

  @media (min-width: 1110px) {

    .content{
      justify-content: center;
      label{
        margin-left: 20%;
      }
    }
  }

  @media (min-width: 1368px) {

  .content{
    justify-content: center;
    label{
      margin-left: 30%;
    }
  }
  }

`