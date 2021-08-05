import React, { useState } from 'react';
import styled from 'styled-components';
import theme from '../../assets/style/Theme';
import { stringValidator } from '../../util/Validations'

interface StyledProps {
    borderColor: string;
}

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
    font: ${props => props.theme.fonts.body1};
    font-size: .75rem;
`;

const CharactersCount = styled.p`
    font: ${props => props.theme.fonts.body1};
    font-size: .75rem;
`;

const TextArea = styled.textarea<StyledProps>`
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

export const TextAreaField: React.FC<{ name: string; isValid: boolean; content: string; isUnchanged: boolean; tip: string; isValidCondition: RegExp | undefined, reportState: Function; maxLength: number; errorMessage: string; }> = (props) => {

    const maxMessageLength = props.maxLength;
    const [remainingLength, setRemainingLength] = useState(maxMessageLength);
    const hasError = (props.isValid || (!props.isValid && props.isUnchanged)) ? false : true;
    const borderColor = hasError ? theme.colors.supportRed : theme.colors.supportGrey30;

    const validateMessageLength = (e: HTMLTextAreaElement) => {
        setRemainingLength(stringValidator.validateLength(e, maxMessageLength));
        props.reportState(
            props.name,
            stringValidator.validateField(e.value, props.isValidCondition),
            e.value
        );
    }

    return (
        <Field>
            <Label htmlFor={props.name}>{props.name + ":"}{hasError ? <ErrorSpan data-test-id={`error-${props.name}`}>{props.errorMessage}</ErrorSpan> : null}</Label>
            <TextArea
                borderColor={borderColor}
                name={props.name}
                value={props.content}
                onChange={(event: React.ChangeEvent<HTMLTextAreaElement>) => validateMessageLength(event.target)}>
            </TextArea>
            <CharactersCount>{remainingLength} caracteres</CharactersCount>
        </Field>
    );
}