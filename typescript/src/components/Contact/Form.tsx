import React, { useState } from 'react';
import styled from 'styled-components';
import { Title } from './Title';
import { InputField } from './InputField';
import { TextAreaField } from './TextAreaField';
import Button from '../../shared/Button';
import { email } from '../../api/EmailAPI';
import { Modal, IModalContent } from '../Modal/index';
import { SendingEmail, EmailSent, EmailError } from '../Modal/ModalStates'

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
    name: string; isValid: boolean; content: string; isUnchanged: boolean; tip: string; isValidCondition: RegExp | undefined;
}

export const Form: React.FC<{ data: Array<IFormFields> }> = (props) => {

    const closeModal = () => {
        setUseModal(false);
    }

    const [useModal, setUseModal] = useState(false);
    const [modalContent, setModalContent] = useState<IModalContent>({ image: "", title: "", description: "", illustration: "", close: closeModal });
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
            setUseModal(true);
            setModalContent(SendingEmail(closeModal));
            email.sendMail(requiredFields.find(field => field.name === "Nome")!.content,
                requiredFields.find(field => field.name === "Email")!.content,
                requiredFields.find(field => field.name === "Assunto")!.content,
                requiredFields.find(field => field.name === "Telefone")!.content,
                requiredFields.find(field => field.name === "Mensagem")!.content).then(() => {
                    setModalContent(EmailSent(closeModal));

                }).catch(() => {
                    setModalContent(EmailError(closeModal));
                });
            return false;
        }
    }

    return (
        <FormContainer>
            <Title title="Nos mande um e-mail" emailAddress="foo@bar.com.br" />
            <StyledForm onSubmit={handleSubmit}>
                <InputField {...requiredFields.find(field => field.name === "Nome")!} reportState={validateField} />
                <InputField {...requiredFields.find(field => field.name === "Email")!} reportState={validateField} />
                <InputField {...requiredFields.find(field => field.name === "Assunto")!} reportState={validateField} />
                <InputField {...requiredFields.find(field => field.name === "Telefone")!} reportState={validateField} />
                <TextAreaField {...requiredFields.find(field => field.name === "Mensagem")!} reportState={validateField} maxLength={500} />
                <Button type="submit" content="Enviar" />
            </StyledForm>
            {
                useModal ? (<Modal {...modalContent} />) : null
            }
        </FormContainer>
    );
}