import styled from "styled-components"

export const Container = styled.button`
  width: 100%;
  max-width: 21.6rem;
  height: 5.6rem;
  padding: 1.2rem 3.2rem;

  display: flex;
  justify-content: center;
  align-items: center;
  gap: .8rem;

  background-color: ${({ theme}) => theme.COLORS.RED_100};
  color: ${({ theme}) => theme.COLORS.LIGHT_100};
  border: none;
  border-radius: .5rem;

  font-family: "Poppins", sans-serif;
  font-size: 1.4rem;
  font-weight: 500;
  line-height: 2.4rem;

  svg{
    width: 3.2rem;
    height: 3.2rem;
  }

  @media (min-width: 900px) {
    
  }
  `