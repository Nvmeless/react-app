import React, { useContext } from 'react'
import { NightModeContext } from '../../../context/NightModeContext';

const NightSwitch = () => {
    const nightModeContext = useContext(NightModeContext);
    return (
        <div onClick={() => {
            nightModeContext.switchNightMode()
        }}>NightSwitch</div>
    )
}

export default NightSwitch