import React from 'react'
import styled from 'styled-components';

const StyledPostCard = styled.div`
  width: 50vw;
  height: 25vh;
  border-radius: 25px;
  background-color: grey;
  color: ${(props) => (props.color ? props.color : "white")};
`;
const Card = ({ ...props }) => {
    return (
        <StyledPostCard {...props}>Card</StyledPostCard>
    )
}

export default Card