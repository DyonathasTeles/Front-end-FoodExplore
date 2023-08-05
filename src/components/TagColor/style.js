import styled from "styled-components"

export const Container = styled.div`
  min-width: 100px;



  .content {
    padding: 0 1.6rem;

    display:  flex;
    align-items: center;
    

    margin-right: 24px;

    background-color: ${({theme, $isNew}) => $isNew ? "transparent" : theme.COLORS.LIGHT_600};
    border: 1px dashed ${({theme, $isNew}) => $isNew ? theme.COLORS.LIGHT_500 : "none" };
    border-radius: .8rem;


    >input {
      width: 100%;
      height: 3.2rem;
  
      color: ${({theme}) => theme.COLORS.LIGHT_100};
      background-color: transparent;
      border: none;
  
      font-family: "Roboto",sans-serif;
      font-size: 1.6rem;
      font-weight: 400;
      outline: none;
  
      ::placeholder {
        color: ${({theme}) => theme.COLORS.LIGHT_500};
      }
    }
  
    >button {
  
      svg{
      
        color: ${({theme, $isNew}) => $isNew ? theme.COLORS.LIGHT_500 : theme.COLORS.LIGHT_100};
      }
      border: none;
      background-color: transparent;
    }
  }
 
  :focus-within {
    border: 1px solid ${({theme}) => theme.COLORS.LIGHT_300};
  }

`