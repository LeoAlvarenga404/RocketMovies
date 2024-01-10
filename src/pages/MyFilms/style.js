import styled from "styled-components";



export const Container = styled.div`
  width: 100%;
  height: 100vh;
  overflow: hidden;
  

  > main {
    padding: 5rem 12.5rem;
    
    .title {
      display: flex;
      justify-content: space-between;
    }
    button {
      background-color: ${({theme}) => theme.COLORS.PINK};
      color: ${({theme}) => theme.COLORS.BACKGROUND_900};
      width: 21rem;
    }
    .section-wrapper {
      height: 100vh;
      margin-bottom: 5rem;
      overflow-y: auto;
      margin-top: 4rem;
    }
    .section-wrapper::-webkit-scrollbar {
      background-color: ${({theme}) => theme.COLORS.PINK};
      width: .8rem;
      border-radius: 2rem;
      
    }
   
  }
`

export const Section = styled.div`
  background-color: ${({theme}) => theme.COLORS.PURPLE};
  padding: 3.2rem;
  width: 99%;
  cursor: pointer;

  overflow: hidden;
  margin-bottom: 2.4rem;
  
  border-radius: 1.6rem;

  > ul {
    margin: .8rem 0 1.5rem 0;
    display: flex;
    list-style: none;

    li {
      font-size: 1.2rem;
      color: ${({theme}) => theme.COLORS.PINK};
      
    }
  }

  
  h2 {
    color: ${({theme}) => theme.COLORS.GRAY_100};
  }

  P {
    color: ${({theme}) => theme.COLORS.GRAY_300};
  }

  .container {
    overflow: hidden;
  }


  .limited-height {
  max-height: 8rem;
  text-overflow: ellipsis; 
  padding: 10px; 
}

  .tags {
    padding-top: 4rem;
  }
`