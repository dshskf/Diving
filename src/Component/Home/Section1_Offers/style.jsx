import styled from "styled-components";

const BackgroundImg = (path) => require(`../../../Assets/Image/Home/${path}`);

export const OffersContainer = styled.div`
  width: 100vw;
  height: auto;
`;

export const OffersContainerPreview = styled.div`
  width: 100vw;
  position: relative;
  height: 90vh;
  background: ${(
    props
  ) => `linear-gradient(rgba(0, 0, 0, 0.12), rgba(0, 0, 0, 0.03)),
    url(${BackgroundImg(props.imgName)})`};
  background-size: cover;
  background-position: top 10% right 20%;  
`;
export const ImagePreviewBox = styled.div`
  margin-top: 10vh;
  position: absolute;
  display: flex;
  flex-direction: column;
  justify-content: center;
  border-left: 3px solid white;
  border-right: 3px solid white;
  width: 40%;
  height: 89%;
  left: 15%;
  background: rgba(0, 0, 0, 0.5);
  padding: 0 1rem;

  h1 {
    font-size: 4rem;
    color: white;
    width: 100%;
    margin: 0;
    margin-top: -5rem;
  }

  p {
    margin: 0;
    color: white;
  }

  @media (max-width: 924px) {
    width: 100vw;
    padding: 0 1rem;
    left: 0;
    border: none;
  }
`;

export const BoxLinkContainer = styled.div`
  margin-top: 2rem;
  height: auto;
`;

export const BoxLink = styled.a`
  padding: 10px 30px;
  border-radius: 30px;
  font-weight: bold;
  text-decoration: none;

  &:first-child {
    color: white;
    background: #0093ff;
    margin-right: 2rem;

    &:hover {
      background: white;
      color: #0093ff;
      text-decoration: none;
    }
  }
  &:last-child {
    border: 2px solid #0093ff;
    transition: 0.3s;
    color: #0093ff;

    &:hover {
      text-shadow: 0px 0px 10px #0093ff;
      box-shadow: 0px 0px 10px 3px #0093ff;
      text-decoration: none;
    }
  }
`;
