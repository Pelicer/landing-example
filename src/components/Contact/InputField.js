import React, { useState } from 'react';
import styled from 'styled-components';
import palette from '../../assets/style/palette.module.scss';
import fonts from '../../assets/style/fonts.module.scss';
import { v4 as uuidv4 } from 'uuid';

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
    border: 1px solid ${palette.support_grey_30};
    width: 100%;
    resize: none;
    box-sizing: border-box;
    &:focus {
        border: 1px solid ${palette.primary_blue};
    }
`;

const ErrorInput = styled(Input)`
    border: 1px solid ${palette.support_red};
`;

function InputField(props) {

    const [isValid, setValid] = useState(false);
    const [content, setContent] = useState("");

    const validateField = (event) => {
        let value = event.target.value;
        setContent(value);
        if (props.isValidCondition.test(value)) {
            setValid(true);
            return;
        }
        setValid(false);
    }

    const StyledInput = isValid ? Input : ErrorInput;

    return (
        <Field>
            <Label htmlFor={"txt" + props.name}>{props.name + ":"}</Label>
            <StyledInput key={uuidv4()} color={props.color} name={"txt" + props.name} value={content} onChange={validateField}></StyledInput>
        </Field>
    );
}

export default InputField;