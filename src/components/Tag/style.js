import styled from "styled-components"

export const Container = styled.span`
  font-size: 1.2rem;
  font-weight: 400;
  padding: .5rem 1.6rem;
  border-radius: .8rem;
  margin-right: .8rem;
  color: ${({ theme }) => theme.COLORS.GRAY_150};
  background-color: ${({ backgroundColor, theme }) => backgroundColor || theme.COLORS.PURPLE};
`