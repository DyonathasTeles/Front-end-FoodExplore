import styled from "styled-components"


export const Container = styled.button`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: .8rem;

  padding: 1.2rem 2.4rem;

  border: none;
  border-radius: .5rem;
  
  background-color: ${({ theme, $dark }) => $dark ? theme.COLORS.DARK_800 : theme.COLORS.RED_100};
  color: ${({ theme }) => theme.COLORS.LIGHT_300};

  font-family: "Poppins", sans-serif;
  font-size: 1.4rem;
  font-weight: 500;
  line-height: 2.4rem;

  :hover {
    background-color: ${({ theme }) => theme.COLORS.RED_200};
  }

  :disabled {
    ${({ theme }) => theme.COLORS.RED_400}
  }

`