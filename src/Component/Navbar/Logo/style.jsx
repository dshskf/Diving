import styled from "styled-components";

import { PanelSectionDefault } from "../style";

export const LogoNav = styled.div`
  ${PanelSectionDefault}
  width:15vw;
  min-width:11rem;
  padding-left: 0.5rem;
  svg {
    cursor: pointer;
    color:gray;
  }

 
  @media (max-width:924px) {
    min-width:12rem;
  }

  @media (max-width:624px) {    
    min-width:0;
  }

  @media (max-width:420px) {    
    min-width:40vw;
  }

`;
export const LogoImg = styled.img`
  margin-left: 10%;  
  height: 3rem;
  @media (max-width:420px) {
    height: 2rem;
  }
`;
