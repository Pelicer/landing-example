import React, { useState } from 'react';
import styled from 'styled-components';
import palette from '../../assets/style/palette.module.scss';
import fonts from '../../assets/style/fonts.module.scss';
import { stringValidator } from '../../utils/Validations'

const Field = styled.div`
    display: flex;
    flex-direction: column;
    grid-column-start: 1;
    grid-column-end: 3;

    @media (max-width: 992px){
        margin-top: 10px;
    }
`;

const Label = styled.label`
    font: ${fonts.body1};
    font-size: .75rem;
`;

const CharactersCount = styled.p`
    font: ${fonts.body1};
    font-size: .75rem;
`;

const TextArea = styled.textarea`
    font: ${fonts.body1};
    padding: 10px;
    border-radius: 5px;
    outline: none;
    border: 1px solid ${props => props.borderColor};
    width: 100%;
    resize: none;
    box-sizing: border-box;
    &:focus {
        border: 1px solid ${palette.primary_blue};
    }
`;

function TextAreaField(props) {

    const maxMessageLength = props.maxLength;
    const [remainingLength, setRemainingLength] = useState(maxMessageLength);
    const borderColor = (props.isValid || (!props.isValid && props.isUnchanged)) ? palette.support_grey_30 : palette.support_red;

    const validateMessageLength = (e) => {
        setRemainingLength(stringValidator.validateLength(e, maxMessageLength));
        props.reportState(
            props.name,
            stringValidator.validateField(e.target.value, props.isValidCondition),
            e.target.value
        );
    }

    return (
        <Field>
            <Label htmlFor={props.name}>{props.name + ":"}</Label>
            <TextArea
                borderColor={borderColor}
                name={props.name}
                value={props.content}
                onChange={validateMessageLength}>
            </TextArea>
            <CharactersCount>{remainingLength} caracteres</CharactersCount>
        </Field>
    );
}

export default TextAreaField;