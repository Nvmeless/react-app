import React from "react";
import { styled } from "styled-components";

const StyledMenuBar = styled.div`
  display: flex;
  justify-content: space-around;
`;
const MenuBar = ({ children }) => {
  return <StyledMenuBar>{children}</StyledMenuBar>;
};

export default MenuBar;
