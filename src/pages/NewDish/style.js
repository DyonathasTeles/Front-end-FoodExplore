import styled from 'styled-components'

export const Container = styled.div`
  width: 100%;
  height: 100vh;
  display: grid;
  grid-template-rows: 11.4rem auto 7.7rem;

  grid-template-areas:
    'Header'
    'Content'
    'Footer';
`

export const Content = styled.div`
  width: 100%;
  grid-area: Content;
  padding: 1rem 3.2rem 5.3rem;
`

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 2.4rem;
  width: 100%;
  height: 100%;

  .return {
    button {
      display: flex;
      align-items: center;

      color: ${({ theme }) => theme.COLORS.LIGHT_300};
      font-family: 'Poppins', sans-serif;
      font-size: 1.6rem;
      font-weight: 500;
      line-height: 140%;

      border: none;
      background-color: transparent;

      img {
        height: 2.2rem;
        width: 2.2rem;
      }
    }
  }

  h1 {
    font-family: 'Roboto', sans-serif;
    font-size: 3.2rem;
    font-weight: 500;
    line-height: 140%;
  }

  .container1 {
    display: flex;
    flex-direction: column;
    gap: 2.4rem;

    .Category {
      width: 100%;

      select {
        width: 100%;
        padding: 1.6rem;
        background-color: ${({ theme }) => theme.COLORS.DARK_900};
        color: ${({ theme }) => theme.COLORS.LIGHT_400};

        outline: none;

        border: none;
        border-radius: 0.5rem;
      }
    }
  }

  .container2 {
    display: flex;
    flex-direction: column;
    gap: 2.4rem;

    .tag-ingredients {
      display: flex;
      align-items: center;

      height: 50px;

      padding: 0.4rem 0.8rem;

      border-radius: 0.8rem;
      background-color: ${({ theme }) => theme.COLORS.DARK_800};
    }
  }

  p {
    font-family: 'Roboto', sans-serif;
    font-size: 1.6rem;
    font-weight: 400;
    color: ${({ theme }) => theme.COLORS.LIGHT_400};

    margin-bottom: 1.6rem;
  }

  @media (min-width: 824px) {
    .container1 {
      display: grid;
      gap: 3.2rem;
      grid-template-columns: auto 45% auto;
      grid-template-rows: 1fr;
    }

    .container2 {
      display: grid;
      gap: 3.2rem;
      grid-template-columns: 80% auto;
      grid-template-rows: 1fr;
    }

    .buttonSave {
      width: 100%;
      display: grid;
      justify-content: end;
    }
  }
`
