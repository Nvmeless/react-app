import React from "react";
import { Container, Typo } from "../atoms";
import { styled } from "styled-components";

const StyledPostCard = styled.div`
  width: 50vw;
  height: 25vh;
  border-radius: 25px;
  background-color: grey;
  color: ${(props) => (props.color ? props.color : "white")};
`;

const PostCard = ({ title = "", children, color = null }) => {
  return (
    <StyledPostCard color={color}>
      <Container.Base>
        <Typo.Title>{title}</Typo.Title>
        <Typo.Paragraph>{children}</Typo.Paragraph>
      </Container.Base>
    </StyledPostCard>
  );
};

export default PostCard;
