import styled from "styled-components"

export const Container = styled.div`
  
  width: 100%;



  :focus-within {
    border: 1px solid ${({theme}) => theme.COLORS.LIGHT_300};
  }

  .content {


    height: 48px;

    background-color: ${({theme}) => theme.COLORS.DARK_800};
    border-radius: 0.8rem;

    >label {
      display: flex;
      align-items: center;
      padding: 1.2rem 3.2rem;

      svg {
        height: 2.4rem;
        width: 2.4rem;
        margin-right: .8rem;
      }

      h1 {
        font-family: "Poppins",sans-serif;
        font-size: 1.4rem;
        font-style: normal;
        font-weight: 500;
        line-height: 2.4rem;
      }

      input {
        display: none;
      }

    }
  }
`
