import styled from 'styled-components'

export const Container = styled.div`
  width: 100%;
  height: 100vh;
  
`

export const Section = styled.div`
  padding: 4rem 12.3rem;
  
  > h1 {
    font-weight: 400;
    color: ${({theme}) => theme.COLORS.GRAY_100};
  }
  > span {
        font-size: 2rem;
        color: ${({theme}) => theme.COLORS.GRAY_300};
      }


  > a {
    display: flex;
    align-items: center;
    color: ${({theme}) => theme.COLORS.PINK};
    gap: .8rem;
    margin-bottom: 2.4rem;
  }
  .input-wrapper {
    display: flex;
    flex-direction: column;
    gap: 4rem;
    margin-top: 4rem;
    margin-bottom:4rem;
    > div {
      display: flex;
      gap: 4rem;
    }
  }
  .buttons {
    display: flex;
    gap: 4rem;
    margin-top: 4rem;

   button{
    
    &:nth-child(2) {
    background-color: ${({theme}) => theme.COLORS.PINK};
    color: ${({theme}) => theme.COLORS.BACKGROUND_1000};
   }
  
  }
}

  .container{
    background-color: ${({theme}) => theme.COLORS.BACKGROUND_1000};
    padding: 1.6rem;
    margin-top: 2.4rem;

    > .markers {
      display: flex;
      gap: 2.4rem;
      


      .marker{
        display: flex;
        gap: 1.6rem;
        padding: 1.6rem;
        align-items: center;
        border-radius: 1rem;
        svg {
          color: ${({theme}) => theme.COLORS.PINK};
          font-size: 2rem;
          cursor: pointer;
          
          &:hover{
            transform: scale(1.2)
          }
        }
      }
     }
     .marker.add{
          background-color:transparent;
          border: .2rem dashed ${({theme}) => theme.COLORS.GRAY_300};
          color: ${({theme}) => theme.COLORS.GRAY_300};;
        }
      .marker.created{
        background-color: ${({theme}) => theme.COLORS.BACKGROUND_700};

      }

  }

  
      

`