import styled from "styled-components";


export const Container = styled.button`
  width: 100%;
  background-color: ${({ theme }) => theme.COLORS.BACKGROUND_1000};
  color: ${({ theme }) => theme.COLORS.PINK};

  height:5.6rem;
  border: 0;
  padding: 0 1.75rem;
  border-radius: 1rem;
  font-weight: 500;

  &:disabled {
    opacity: 0.5;
  }
`;