import styled from "styled-components"

export const Container = styled.button`
  width: 100%;
  padding: 1.2rem 13.4rem;

  font-size: 1.4rem;

  background-color: ${({ theme }) => theme.COLORS.RED_100};
  color:  ${({ theme }) => theme.COLORS.LIGHT_300};
  border: none;
`