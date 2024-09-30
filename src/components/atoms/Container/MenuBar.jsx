import React, { useContext } from "react";
import { styled } from "styled-components";
import { NightModeContext } from "../../../context/NightModeContext";

const StyledMenuBar = styled.div`
  display: flex;
  justify-content: space-around;
  background-color: ${props => props.nightMode ? props.primary : props.secondary};
  color: ${props => props.nightMode ? props.secondary : props.primary};
`;





const MenuBar = ({ children }) => {

  const nightModeContext = useContext(NightModeContext);
  return <StyledMenuBar primary={nightModeContext.colors.primary} secondary={nightModeContext.colors.secondary} nightMode={nightModeContext.nightMode}>{children}</StyledMenuBar>;
};

export default MenuBar;
