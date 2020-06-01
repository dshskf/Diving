import styled, { css } from "styled-components";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";

const trainerBackground = require('../../../Assets/Image/Home/t-wallpaper.jpg')

const defaultArrowStyle = css`
  color: #ffffff;
  font-size: 4rem;
`;

export const TrainerContainer = styled.div`
  width: 100vw;
  margin: 0;
  height: 70vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background: linear-gradient(rgba(0, 0, 0, 0.53), rgba(0, 0, 0, 0.41)),
    url(${trainerBackground});
  background-size: cover;
  background-position: top 10% right 20%;
  margin-bottom: 20rem;

  h1:first-child {
    ${defaultArrowStyle}
    margin-right:2%;
  }

  h1:last-child {
    ${defaultArrowStyle}
    margin-left:2%;
  }
`;

export const Box = styled.div`
  width: 17%;
  min-width:14rem;
  height: 70%;
  margin: 0 0.5rem;
  display:flex;
  flex-direction: column;
  justify-content: center;
  transition:0.2s;

  &:hover {
    transform:scale(1.1) translateY(-1rem);
    box-shadow: 0px 0px 10px white;
    cursor: pointer;
  }

`;

export const BoxImage = styled.div`
  width: 100%;
  height: 60%;

  img {
    width: 100%;
    height: 100%;
  }
`;

export const BoxDetail = styled.div`
  background: white;
  height: 40%;  
  text-align: center;


  h1 {
    font-size: 1.4rem !important;
    color: rgba(70, 70, 70) !important;
    margin:0;
  }

  h3 {
    font-size: 1rem;
    color:rgba(70, 70, 70, 0.85);
    margin:0;
  }
`;

export const BoxLink = styled.div`  
  height: 10%;
  background: white;
  text-align: center;
  padding: 0.1rem;  
  a{
      color:#0093ff;
      text-decoration: none;
  }
`;

const DefaultChangeButtonStyle = css`
  font-size: 5rem;  
  color:white;
  transition:0.3s;

  &:hover {
    color:#0093ff;
    transform: scale(1.1);
    cursor: pointer;
  }
`;

export const PrevButton = styled(IoIosArrowBack)`
  ${DefaultChangeButtonStyle}
`;

export const NextButton = styled(IoIosArrowForward)`
  ${DefaultChangeButtonStyle}
`;
