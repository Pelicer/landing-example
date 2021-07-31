import React from 'react';
import styled from 'styled-components';
import palette from '../../assets/style/palette.module.scss';
import fonts from '../../assets/style/fonts.module.scss';
import { stringValidator } from '../../util/Validations'

interface StyledProps {
    borderColor: string;
}

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

const Input = styled.input<StyledProps>`
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

export const InputField: React.FC<{ isValid: boolean; isUnchanged: boolean; isValidCondition: RegExp | undefined, reportState: Function; name: string; content: string; tip: string; }> = (props) => {

    const borderColor = (props.isValid || (!props.isValid && props.isUnchanged)) ? palette.support_grey_30 : palette.support_red;

    const validate = (value: string) => {
        props.reportState(
            props.name,
            stringValidator.validateField(value, props.isValidCondition),
            value
        );
    }

    return (
        <Field>
            <Label htmlFor={props.name}>{props.name + props.tip + ":"}</Label>
            <Input
                key={`${props.name}-input-field`}
                borderColor={borderColor}
                value={props.content}
                name={props.name}
                onChange={(event: React.ChangeEvent<HTMLInputElement>) => validate(event.target.value)}>
            </Input>
        </Field >
    );
}