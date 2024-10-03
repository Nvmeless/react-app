import React, { useState, useEffect } from 'react'
import styled from 'styled-components'

const StyledInput = styled.input``;
const Text = ({ handleText = null, ...props }) => {
    const [textInputValue, setTextInputVal] = useState("Entrez Votre Text")

    const changeValue = (e) => {

        if (e.target.value !== textInputValue) {
            setTextInputVal(e.target.value);
        }
    }

    useEffect(() => {
        handleText(textInputValue);
    }, [textInputValue])




    return (
        <>
            <StyledInput {...props} onChange={changeValue}
                placeholder={textInputValue}

            ></StyledInput>
        </>
    )
}

export default Text