import styled, { css } from "styled-components";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";

export const PageInfo = styled.div`
  position: absolute;
  display: flex;
  align-items: center;
  justify-content:center;
  color: white;
  right: 1%;
  bottom: 2%;

  @media (max-width:400px) {
    bottom: 0;
    left:0;
    right:0
  }
`;

export const PageInfoData = styled.div`
  text-align: center;

  * {
    margin: 0;
  }

  h1 {
    font-size: 7rem;
    margin-top:-3rem;
    &:hover {
      color: white;
      transform: scale(1);
    }

    @media (max-width:400px) {
      font-size: 5rem;
    }
  }
  p {
    color: #0093ff;
    font-size: 2rem;
  }
`;

const ArrowDefault = css`
  color: white;
  font-size: 8rem;
  cursor: pointer;
  transition: 0.2s;

  &:hover {
    color: #0093ff;
    transform: scale(1.1);
  } 

  @media (max-width:400px) {
    color: #0093ff;
  }
`;

export const LeftArrowButton = styled(IoIosArrowBack)`
  ${ArrowDefault}  
`;

export const RightArrowButton = styled(IoIosArrowForward)`
  ${ArrowDefault}
`;
