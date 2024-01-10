import styled from 'styled-components'
import backgroundImg from '../../assets/background.png'
export const Container = styled.div`
  height: 100vh;
  display: flex;
`;

export const Form = styled.form`
  padding: 0 13.6rem;
  display: flex;
  flex-direction: column;
  justify-content: center;

 
  > main {
  display: flex;
  flex-direction: column;
  
    .input-wrapper {
      display: flex;
      flex-direction: column;
      gap: .8rem;
    }
     h1 {
    font-size: 4.8rem;
    color: ${({ theme }) => theme.COLORS.PINK}
  }

   h2 {
    font-size: 2.4rem;
    margin: 4.8rem 0;
    
  }

   p {
    font-size: 1.4rem;
    color: ${({ theme }) => theme.COLORS.GRAY_100}
  }
  

  button {
    background-color: ${({ theme }) => theme.COLORS.PINK};
    color: ${({ theme }) => theme.COLORS.BACKGROUND_700};
    margin-top: 1.6rem;
  }
  }

  a {
    color: ${({ theme }) => theme.COLORS.PINK};
    margin-top: 4rem;
    display: flex;
    justify-content: center;
    align-items: center;
    gap: .8rem;
  }

  
`
export const Background = styled.div`
  flex: 1;
  background: url(${backgroundImg}) no-repeat center center;
  background-size: cover;
  opacity: 0.4;
`