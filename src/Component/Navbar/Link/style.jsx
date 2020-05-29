import styled, { css } from "styled-components";
import { PanelSectionDefault } from "../style";

export const LinkMenu = styled.div`
  ${PanelSectionDefault};
  justify-content: flex-end;

  svg {
    cursor: pointer;
    color: gray;
  }
`;

export const LinkItem = styled.div`
  margin: 0 4%;
  width: auto;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 1.1rem;
  transition: 0.2s;

  &:hover {
    border-bottom: 4px solid #0093ff;
    border: ${(props) => (props.signButton ? "none" : "")};
  }
`;

const isSignUpButton = css`
  border: 1px solid #0093ff;
  background: #0093ff;
  color: white;
  padding: 7px 16px;
  border-radius: 10px;

  &:hover {
    color: #0093ff;
    background: white;
  }
`;

export const RouteButton = styled.a`
  color: #0093ff;
  cursor:pointer;
  ${(props) => {
    console.log(props.signButton);
    return props.signButton ? isSignUpButton : null;
  }}

  &:hover {
    text-decoration: none;
    color: #0093ff;
    transform: scale(1.05);
  }
`;
