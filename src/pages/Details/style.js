import styled from 'styled-components'

export const Container = styled.div`
  width: 100%;
  height: 100vh;



  > a {
      font-size: 1.6rem;
      color:${({theme}) => theme.COLORS.PINK};
      display: flex;
      align-items: center;
      gap: .8rem;
      padding: 4rem 0 0 12.3rem; 
    }
  > main {
    padding: 0 12.3rem;
    margin-top: 2.4rem;

  
    h1{
      display: flex;
      align-items: center;
      gap: 1rem;
    }

    .title {
      display: flex;
      align-items: center;


      ul {
        display: flex;
        list-style: none;
        gap: 1rem;
        margin-top: .7rem;
        font-size: 2rem;
        color:${({theme}) => theme.COLORS.PINK};
        margin-left: 2rem;
      }
    }
    .made-by{
      display: flex;
      align-items: center;
      gap: .8rem;
      margin-top: 2.4rem;
      margin-bottom: 4rem;
      > div {
        display: flex;
        align-items: center;
        gap: .8rem;

        svg {
          color:${({theme}) => theme.COLORS.PINK};
        }
        img {
          width: 1.6rem;
          height: 1.6rem;
          border-radius: 50%;
          border: .2rem solid ${({theme}) => theme.COLORS.BACKGROUND_700 };
        }
      }

    

    }
    .text {
        display: flex;
        flex-direction: column;
        gap: 2rem;
        margin-top: 4rem;
        font-size: 1.6rem;
        line-height: 2.4rem;
        text-align: justify;
       color: ${({theme}) => theme.COLORS.GRAY_100
      }
    }}
`
