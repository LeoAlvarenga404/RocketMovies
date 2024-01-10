import styled from 'styled-components'

export const Container = styled.div`
  width: 100%;
  height: 100vh;
  display: grid;
  grid-template-rows: 14.4rem auto;
  grid-template-areas: 'header' 'content';

  > header {
    grid-area: 'header';
    background-color: ${({theme}) => theme.COLORS.PURPLE};
    display: flex;
    align-items: center;
    padding-left: 14.4rem;

    a {
      display: flex;
      align-items: center;
      font-size: 1.6rem;
      gap: .8rem;
      color: ${({theme}) => theme.COLORS.PINK};
    }
  }

  > main {
    grid-area: 'content';
    display: flex;
    flex-direction: column;
    align-items: center;
    background-color: ${({theme}) => theme.COLORS.BACKGROUND_900};

    .profile {
      position: relative;

      > img {
      width: 18.6rem;
      height: 18.6rem;
      border-radius: 50%;
      margin-top: -9rem;
    }

    > label {
    width: 4.8rem;
    height: 4.8rem;
    background-color: ${({theme}) => theme.COLORS.PINK};
    color: ${({theme}) => theme.COLORS.BACKGROUND_900};
    font-size: 2rem;
    border-radius: 50%;

    display: flex;
    align-items: center;
    justify-content: center;
    position: absolute;
    bottom: .7rem;
    right: .7rem;
    cursor: pointer;
    }
     input {
      display: none;
    }
}

  

    .input-wrapper{
      display: flex;
      flex-direction: column;
      gap: .8rem;

      margin-top: 6.4rem;

      input {
        width: 34rem;
      }

      div:nth-child(3){
        margin-top: 1.6rem;
      }

      button {
        margin-top: 2.4rem;
        background-color: ${({theme}) => theme.COLORS.PINK};
        color: ${({theme}) => theme.COLORS.BACKGROUND_900};

      }
    }
  }
`