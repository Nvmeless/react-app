import React from "react";
import { styled } from "styled-components";

const StyledButton = styled.div``;
const Menu = ({ children }) => {
  return <StyledButton>{children}</StyledButton>;
};

export default Menu;
