import styled from "styled-components";
import { Link } from "react-router-dom";

export const Container = styled.header`
  grid-area: header;
  height: 10.5rem;
  width: 100%;
  border-bottom-width: 1px;
  border-bottom-style: solid;
  border-bottom-color:  ${({ theme }) => theme.COLORS.BACKGROUND_700};

  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 6.4rem;
  padding: 0 8rem;
  
  > a {
    font-size: 2.4rem;
    font-weight: bold;
    color:  ${({ theme }) => theme.COLORS.PINK};
    
  }
`;

export const Profile = styled(Link)`
  display: flex;
  align-items: center;
  width: 30rem;
  cursor: pointer;
  
  > div {
    display: flex;
    flex-direction: column;
    text-align: end;
    margin-right: .9rem;


    strong {
      color:  ${({ theme }) => theme.COLORS.GRAY_100};
      font-weight: bold;
      font-size: 1.6rem;
    }

    span {
      color:  ${({ theme }) => theme.COLORS.GRAY_300};
      font-size: 1.4rem;
      font-weight: 400;
      cursor: pointer;
    }
  }

  > img {
    width: 6.4rem;
    height: 6.4rem;
    border-radius: 50%;
    
  }

`