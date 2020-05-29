import styled, { keyframes } from "styled-components";

const slideAnimation = keyframes`
 from {
        transform: translateX(-20rem);
    }

    to {
        transform: translateX(0rem);
    }
`;

export const SideBarContainer = styled.div`
  position: absolute;
  margin: 0;  
  top:0;
  width: 25%;
  height: 100vh;
  background: white;  
  display: flex;
  flex-direction: column;
  align-items: center;
  z-index: 2;
  overflow: hidden;
  animation: ${slideAnimation} 0.5s 1;  
  min-width: 20rem;
`;

export const SideBarItem = styled.div`
  width: 100%;
  text-align: center;
  padding: 1.1rem 0;

  &:hover {
    font-weight: bold;
    cursor:pointer;
    background: rgba(0, 108, 255, 0.88);
  }
`;

export const ItemButton = styled.a`
  color: #006cff;

  ${SideBarItem}:hover & {
    color: white;
    text-decoration: none;    
  }
`;


export const SideBarBottomImageBox = styled.div`
  width: 120%;
  position: absolute;
  left: -6rem;
  bottom: 0;
`;

export const SideBarBottomImage = styled.img`
  width: 30rem;
  height: 20rem;
`;

export const DimmedArea = styled.div`
  margin: 0;
  top:0;
  width: 100vw;
  height: 100vh;
  z-index: 1;  
  background: rgba(41, 41, 41, 0.49);
  position: absolute;
  display: 'block';
`;
