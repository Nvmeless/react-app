import React, { useState } from "react";
import { Container, Typo } from "../atoms";
import { styled } from "styled-components";

const StyledPostCard = styled.div`
  width: 50vw;
  height: 25vh;
  border-radius: 25px;
  background-color: grey;
  color: ${(props) => (props.color ? props.color : "white")};
`;

const PostCard = ({ title = "", children, defaultColor = "white", activatedColor = "blue" }) => {
  const [color, setColor] = useState(false);
  const changeColor = (e) => {
    setColor(!color)
  }
  return (
    <StyledPostCard
      color={color ? activatedColor : defaultColor}
      onClick={
        changeColor}
    >
      <Container.Base>
        <Typo.Title>{title}</Typo.Title>
        <Typo.Paragraph>{children}</Typo.Paragraph>
      </Container.Base>
    </StyledPostCard>
  );
};

export default PostCard;
