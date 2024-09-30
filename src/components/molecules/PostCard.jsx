import React, { useState } from "react";
import { Container, Typo } from "../atoms";
import { styled } from "styled-components";



const PostCard = ({ title = "", children, defaultColor = "white", activatedColor = "blue" }) => {
  const [color, setColor] = useState(false);
  const changeColor = (e) => {
    setColor(!color)
  }
  return (
    <Container.Card
      color={color ? activatedColor : defaultColor}
      onClick={
        changeColor}
    >
      <Container.Base>
        <Typo.Title>{title}</Typo.Title>
        <Typo.Paragraph>{children}</Typo.Paragraph>
      </Container.Base>
    </Container.Card>
  );
};

export default PostCard;
