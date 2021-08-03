import React from 'react';
import styled from 'styled-components';
import theme from '../../assets/style/Theme';
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
    font: ${props => props.theme.fonts.body1};
    font-size: .75rem;
`;

const Input = styled.input<StyledProps>`
    font: ${props => props.theme.fonts.body1};
    padding: 10px;
    border-radius: 5px;
    outline: none;
    border: 1px solid ${props => props.borderColor};
    width: 100%;
    resize: none;
    box-sizing: border-box;
    &:focus {
        border: 1px solid ${props => props.theme.colors.primaryBlue};
    }
`;

const ErrorSpan = styled.span`
    margin-left: 10px;
    font: ${props => props.theme.fonts.subtitle2};
    color: ${props => props.theme.colors.supportRed};    
`;

export const InputField: React.FC<{ name: string; isValid: boolean; content: string; isUnchanged: boolean; tip: string; isValidCondition: RegExp | undefined, reportState: Function; errorMessage: string; }> = (props) => {

    const hasError = (props.isValid || (!props.isValid && props.isUnchanged)) ? false : true;
    const borderColor = hasError ? theme.colors.supportRed : theme.colors.supportGrey30;

    const validate = (value: string) => {
        props.reportState(
            props.name,
            stringValidator.validateField(value, props.isValidCondition),
            value
        );
    }

    return (
        <Field>
            <Label htmlFor={props.name}>{props.name + props.tip + ":"}{hasError ? <ErrorSpan data-test-id={`error-${props.name}`}>{props.errorMessage}</ErrorSpan> : null}</Label>
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