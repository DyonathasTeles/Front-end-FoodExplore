import styled from 'styled-components'

export const Container = styled.div`
  :focus-within {
    border: 1px solid ${({ theme }) => theme.COLORS.LIGHT_300};
  }
`

export const Content = styled.textarea`
  width: 100%;
  height: 17.2rem;
  padding: 1.4rem;

  background-color: ${({ theme }) => theme.COLORS.DARK_800};
  color: ${({ theme }) => theme.COLORS.LIGHT_300};
  border: none;
  border-radius: 0.8rem;

  font-family: 'Roboto', sans-serif;
  font-size: 1.6rem;
  line-height: 100%;

  resize: none;
  outline: none;

  ::placeholder {
    color: ${({ theme }) => theme.COLORS.LIGHT_500};
  }
`
