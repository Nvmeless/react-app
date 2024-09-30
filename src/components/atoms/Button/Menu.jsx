import React from "react";
import { styled } from "styled-components";

const StyledButton = styled.div``;
const Menu = ({ ...props }) => {
  return <StyledButton {...props}></StyledButton>;
};

export default Menu;
