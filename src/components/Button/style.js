import styled from "styled-components"

export const Container = styled.button`
  width: 100%;
  padding: 1.2rem 1rem;

  font-family: "Poppins", sans-serif;
  font-size: 1.4rem;
  font-weight: 500;
  line-height: 2.4rem;
  
  background-color: ${({ theme }) => theme.COLORS.RED_100};
  color:  ${({ theme }) => theme.COLORS.LIGHT_300};
  border: none;
  border-radius: 0.5rem;
`