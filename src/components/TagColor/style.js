import styled from 'styled-components'

export const Container = styled.div`
  .content {
    display: flex;
    align-items: center;
    justify-content: space-between;

    padding-right: 1.6rem;
    margin-right: 2.4rem;

    background-color: ${({ theme, $isNew }) =>
      $isNew ? 'transparent' : theme.COLORS.LIGHT_600};
    border: 1px dashed
      ${({ theme, $isNew }) => ($isNew ? theme.COLORS.LIGHT_500 : 'none')};
    border-radius: 0.8rem;

    > input {
      width: 100%;
      height: 3.2rem;
      padding: 1rem;
      color: ${({ theme }) => theme.COLORS.LIGHT_100};
      background-color: transparent;
      border: none;

      font-family: 'Roboto', sans-serif;
      font-size: 1.6rem;
      font-weight: 400;
      outline: none;

      ::placeholder {
        color: ${({ theme }) => theme.COLORS.LIGHT_500};
      }
    }

    > button {
      svg {
        color: ${({ theme, $isNew }) =>
          $isNew ? theme.COLORS.LIGHT_500 : theme.COLORS.LIGHT_100};
      }
      border: none;
      background-color: transparent;
    }
  }

  :focus-within {
    border: 1px solid ${({ theme }) => theme.COLORS.LIGHT_300};
  }
`
