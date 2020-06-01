import styled from "styled-components";

export const BenefitContainer = styled.div`
  text-align: center;
  margin-top: 10rem;
  height: 100vh;
`;

export const Header = styled.div`
  h1 {
    color: #0093ff;
    margin-top: 0;
    letter-spacing:2px;
  }

  p {
    margin-bottom: 0;
    color: #ff7f00;
    font-weight: 600;
    font-size: 1rem;
    letter-spacing:1px;
  }
`;

export const Content = styled.div`
  width: 100vw;
  height: 60vh;
  margin-top: 5rem;
  display: flex;
  justify-content: space-around;
  align-items: center;
`;

export const SubContent = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  border-right: 4px solid #0093ff;

  h1 {
    margin: 0;
    margin-top: 2rem;
    color: #ff7f00;
    letter-spacing:1px;
  }

  h3 {
    color: #0093ff;
    margin: 0;
    letter-spacing:1px;
  }

  p {
    width: 70%;
    margin-top: 1rem;
    text-align: justify;
  }

  img {
    height: 10rem;
  }
`;
