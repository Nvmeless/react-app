import React from "react";
import { styled } from "styled-components";

const StyledTitleTypo = styled.h1`
  font-size: 3rem;
`;

const Title = ({ children, ...props }) => {
  return <StyledTitleTypo>{children}</StyledTitleTypo>;
};

export default Title;
