import React, { useState } from 'react';
import styled from 'styled-components';
import palette from '../../assets/style/palette.module.scss';
import fonts from '../../assets/style/fonts.module.scss';

const Field = styled.div`
    display: flex;
    flex-direction: column;
    grid-column-start: 1;
    grid-column-end: 3;
`;

const Label = styled.label`
    font: ${fonts.body1};
    font-size: .75rem;
`;

const TextArea = styled.textarea`
    font: ${fonts.body1};
    padding: 10px;
    border-radius: 5px;
    outline: none;
    border: 1px solid ${palette.support_grey_30};
    width: 100%;
    resize: none;
    box-sizing: border-box;
    &:focus {
        border: 1px solid ${palette.primary_blue};
    }
`;

const ErrorTextArea = styled(TextArea)`
    border: 1px solid ${palette.support_red};
`;

function TextAreaField(props) {

    const maxMessageLength = props.maxLength;
    const [remainingLength, setRemainingLength] = useState(maxMessageLength);
    const [isValid, setValid] = useState(false);

    const validateMessageLength = (e) => {
        let msg = e.target.value;
        if (msg.length > maxMessageLength) {
            e.target.value = msg.substring(0, maxMessageLength);
            return;
        }
        setRemainingLength(maxMessageLength - msg.length)
        validateField(msg);
    }

    const validateField = (value) => {
        if (!props.isValidCondition.test(value)) {
            setValid(false);
            return;
        }
        setValid(true);
    }

    const StyledTextArea = isValid ? TextArea : ErrorTextArea;

    return (
        <Field>
            <Label htmlFor={"txt" + props.name}>{props.name + ":"}</Label>
            <StyledTextArea name={"txt" + props.name} onKeyUp={(event) => validateMessageLength(event)}></StyledTextArea>
            <p id="txtRemainingChars">{remainingLength} caracteres</p>
        </Field>
    );
}

export default TextAreaField;