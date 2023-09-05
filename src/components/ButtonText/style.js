import styled from 'styled-components'

export const Container = styled.button`
  width: fit-content;
  display: flex;
  align-items: center;
  justify-content: center;

  border: none;
  background-color: transparent;

  color: ${({ theme }) => theme.COLORS.LIGHT_300};

  font-family: 'Poppins', sans-serif;
  font-size: 2.4rem;
  font-weight: 500;
  line-height: 140%;
`
