import React, { useState } from 'react';
import styled from 'styled-components'
import { Title } from './Title';
import { InputField } from './InputField';
import { TextAreaField } from './TextAreaField';
import Button from '../../shared/Button';
import { email } from '../../api/EmailAPI';

const FormContainer = styled.div`
    margin-left: 50px;
    @media (max-width: 762px){
        margin: 0;
    }
`;

const StyledForm = styled.form`
    display: grid;
    grid-gap: 10px 30px;
    grid-template-columns: repeat(2, 1fr);

    @media (max-width: 992px) {
        display: block;
        button{
            width: 100%;
        }
    }
`;

interface IFormFields {
    name: string; isValid: boolean; content: string; isUnchanged: boolean; tip: string; isValidCondition: RegExp | undefined; errorMessage: string;
}

export const Form: React.FC<{ data: Array<IFormFields>; reportSendProgress: Function; }> = (props) => {

    const [requiredFields, setRequiredFields] = useState(props.data);

    const validateField = (field: string, isValid: boolean, content: string) => {
        setRequiredFields(requiredFields.map(item => item.name === field ? {
            ...item,
            isValid: isValid,
            content: content,
            isUnchanged: false
        } : item));
    }

    const handleSubmit = (event: React.FormEvent) => {
        event.preventDefault();
        let isFormReady = true;

        setRequiredFields(requiredFields.map((item) => {
            if (item.isValid === false) {
                isFormReady = false;
                return {
                    ...item,
                    isValid: false,
                    isUnchanged: false
                }
            }
            return item;
        }));

        if (isFormReady) {
            props.reportSendProgress("SENDING");
            email.sendMail(requiredFields.find(field => field.name === "Name")!.content,
                requiredFields.find(field => field.name === "Email")!.content,
                requiredFields.find(field => field.name === "Subject")!.content,
                requiredFields.find(field => field.name === "Phone")!.content,
                requiredFields.find(field => field.name === "Message")!.content).then(() => {
                    props.reportSendProgress("SENT");

                }).catch(() => {
                    props.reportSendProgress("ERROR");
                });
            return false;
        }
    }

    return (
        <FormContainer>
            <Title title="Nos mande um e-mail" emailAddress="foo@bar.com.br" />
            <StyledForm onSubmit={handleSubmit}>
                <InputField {...requiredFields.find(field => field.name === "Name")!} reportState={validateField} />
                <InputField {...requiredFields.find(field => field.name === "Email")!} reportState={validateField} />
                <InputField {...requiredFields.find(field => field.name === "Subject")!} reportState={validateField} />
                <InputField {...requiredFields.find(field => field.name === "Phone")!} reportState={validateField} />
                <TextAreaField {...requiredFields.find(field => field.name === "Message")!} reportState={validateField} maxLength={500} />
                <Button type="submit" content="Enviar" />
            </StyledForm>
        </FormContainer>
    );
}