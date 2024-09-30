import React from "react";
import { styled } from "styled-components";

const StyledBaseContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

const Base = ({ children }) => {
  return <StyledBaseContainer>{children}</StyledBaseContainer>;
};

export default Base;
