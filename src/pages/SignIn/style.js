import styled from "styled-components"

export const Container = styled.div`
  width: 100%;
  height: 100vh;

  
  margin: 0 auto;

  background-color: ${({ theme }) => theme.COLORS.DARK_400};

  >.content {
    max-width: 438px;
    height: 100vh;
    margin: auto;
    padding: 10rem 4.7rem 10rem 6.5rem ;

    >.logo {
      display: flex;
      align-items: center;
      gap: 1rem;

      h1 {
        font-family: "Roboto", sans-serif;
        font-size: 3.7rem;
        }
    }

    >main {
      width: 100%;

      
      margin-top: 7.3rem;

      .inputs{
        display: flex;
        flex-direction: column;
        gap: 4.8rem;

        margin-bottom: 3.2rem;

        p{
          font-family: "Roboto", sans-serif;
          margin-bottom: .8rem;
        }

      }

      .link{

       display: flex;
       flex-direction: column;
       align-items: center;
       justify-content: center;

       margin-top: 3.2rem;

        a{
          font-family:" Poppins",sans-serif;
          font-size: 1.4rem;
          font-style: normal;
          font-weight: 500;
          line-height: 2.4rem;
  
          margin: auto;
  
          color: ${({ theme }) => theme.COLORS.LIGHT_100};
        }
      }
  
      .hide {
        display: none;
      }
    }

  }

`