import React from 'react';
import styled from 'styled-components';
import palette from '../../assets/style/palette.module.scss';
import fonts from '../../assets/style/fonts.module.scss';
import { stringValidator } from '../../utils/Validations'

const Field = styled.div`
    display: flex;
    flex-direction: column;

    @media (max-width: 992px){
        margin-top: 10px;
    }
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

    const borderColor = (props.isValid || (!props.isValid && props.isUnchanged)) ? palette.support_grey_30 : palette.support_red;

    const validate = (event) => {
        props.reportState(
            props.name,
            stringValidator.validateField(event.target.value, props.isValidCondition),
            event.target.value
        );
    }

    return (
        <Field>
            <Label htmlFor={props.name}>{props.name + props.tip + ":"}</Label>
            <Input
                key={"form-input-field"}
                borderColor={borderColor}
                value={props.content}
                name={props.name}
                onChange={validate}>
            </Input>
        </Field>
    );
}

export default InputField;