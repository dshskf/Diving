import styled from "styled-components";
import { PanelSectionDefault } from "../style";

export const SearchNav = styled.div`
  ${PanelSectionDefault}
  justify-content: center;
  width: 100%;

  
`;

export const SearchBar = styled.div`
  width: 100%;
  height: 100%;

  position: relative;
  display: flex;
  justify-content: flex-end;
  align-items: center;

  * {
    position: absolute;
  }

  svg {
    right: 3%;
    color: gray;
    cursor: pointer;

    &:hover {
      color: #006cff;
    }
  }
`;

export const SearchInputBar = styled.input`
  border: 1px solid rgba(36, 36, 36, 0.29);
  padding: 0.5rem 0.9rem;
  font-size: 0.9rem;
  border-radius: 25px;
  width: 100%;
  outline: none;
  &:focus {
    box-shadow: 0px 0px 5px #006cff;
    border: none;
  }
`;
