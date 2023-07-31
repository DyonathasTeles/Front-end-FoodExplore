import styled from "styled-components"

export const Container = styled.div`
  width: 210px;
  height: 29.2rem;

  background-color: ${({theme}) => theme.COLORS.DARK_200};
  border: 1px solid ${({theme}) => theme.COLORS.DARK_300};
  border-radius: .8rem;

  padding: 2.4rem;

`