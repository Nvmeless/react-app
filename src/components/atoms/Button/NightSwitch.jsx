import React, { useContext } from 'react'
import { NightModeContext } from '../../../context/NightModeContext';
import styled from 'styled-components';
const StyledButton = styled.div``;

const NightSwitch = () => {
    const nightModeContext = useContext(NightModeContext);
    return (
        <StyledButton onClick={() => {
            nightModeContext.switchNightMode()
        }}>NightSwitch</StyledButton>
    )
}

export default NightSwitch