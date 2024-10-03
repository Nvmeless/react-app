import React from 'react'
import styled from 'styled-components';

const StyledPostCard = styled.div`
  width: 50vw;
  height: 25vh;
  border-radius: 25px;
  background-color: ${(props) => props.theme?.colors?.primary ? props.theme?.colors?.primary : 'white'};
  color: ${(props) => (props.color ? props.color : "white")};
`;
const Card = ({ ...props }) => {
  return (
    <StyledPostCard {...props}>Card</StyledPostCard>
  )
}

export default Card