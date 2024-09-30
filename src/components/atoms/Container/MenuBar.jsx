import React, { useContext } from "react";
import { styled } from "styled-components";
import { NightModeContext } from "../../../context/NightModeContext";

const StyledMenuBar = styled.div`
  display: flex;
  justify-content: space-around;
  background-color: ${props => props.nightMode ? 'black' : "white"};
  color: ${props => props.nightMode ? "white" : 'black'};
`;





const MenuBar = ({ children }) => {

  const nightModeContext = useContext(NightModeContext);
  return <StyledMenuBar nightMode={nightModeContext.nightMode}>{children}</StyledMenuBar>;
};

export default MenuBar;
