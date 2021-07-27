import React, { useState } from 'react';
import styled from 'styled-components';
import palette from '../../assets/style/palette.module.scss';
import fonts from '../../assets/style/fonts.module.scss';
import { stringValidator } from '../../utils/Validations'

const Field = styled.div`
    display: flex;
    flex-direction: column;
`;

const Label = styled.label`
    font: ${fonts.body1};
    font-size: .75rem;
`;

const Input = styled.input`
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

function InputField(props) {

    const [isValid, setValid] = useState(true);
    const [content, setContent] = useState("");
    const borderColor = isValid ? palette.support_grey_30 : palette.support_red;

    const validate = (event) => {
        setContent(event.target.value);
        setValid(stringValidator.validateField(event.target.value, props.isValidCondition))
        props.reportState(props.name, isValid, event.target.value);
    }

    return (
        <Field>
            <Label htmlFor={props.name}>{props.name + ":"}</Label>
            <Input
                key={"form-input-field"}
                borderColor={borderColor}
                value={content}
                name={props.name}
                onChange={validate}>
            </Input>
        </Field>
    );
}

export default InputField;