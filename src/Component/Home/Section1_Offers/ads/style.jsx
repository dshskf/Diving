import styled from "styled-components";

export const AdsContainer = styled.div``;

export const AdsBox = styled.div`
  background: white;
  display: flex;
  width: 27%;
  height: 20%;
  position: absolute;
  box-shadow: 0px 0px 10px #3b3939;
  transition: 0.3s;

  &:first-child {
    bottom: -10%;
    left: 10%;
  }

  &:last-child {
    bottom: -10%;
    left: 43%;
  }

  &:hover {
    transform: scale(1.1);
  }

  @media (max-width: 1200px) {
    display: none;
  }
`;
export const AdsImage = styled.img`
  width: 40%;
  height: 100%;
`;

export const AdsDetail = styled.div`
  display: grid;
  margin-left: 1rem;
  margin-top: 1rem;

  h1 {
    font-size: 1.2rem;
    color: #454545;
    margin: 0;
  }

  p {
    color: #454545;
    font-size: 0.8rem;
    margin: 0;
    width: 100%;
  }
  a {
    color: #0093ff;
    text-decoration: none;

    &:hover {
      text-decoration: underline;
    }
  }
`;
