import React, { useState } from 'react';
import styled from 'styled-components';
import Title from './Title';
import InputField from './InputField';
import TextAreaField from './TextAreaField';
import Button from '../../shared/Button';
import { email } from '../../api/EmailAPI';
import { Modal } from '../Modal/index';
import WorkspaceCat from '../../assets/illustrations/workspace-cat.svg'
import GirlReading from '../../assets/illustrations/girl-reading.svg'

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

/*
Not sure if, architecture wise, this component should exists,
and if itself is not a container
*/
function Form() {

    const [useModal, setUseModal] = useState(false);
    const [modalContent, setModalContent] = useState({});
    const mailRegex = /^(([^<>()[\]\\.,;:\s@]+(\.[^<>()[\]\\.,;:\s@]+)*)|(.+))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    const notEmptyRegex = /^(?!\s*$).+/;

    const closeModal = () => {
        setUseModal(false);
        setModalContent({});
    }

    const [requiredFields, setRequiredFields] = useState({
        "Nome": {
            isValid: false,
            content: "",
            isUnchanged: true
        },
        "Email": {
            isValid: false,
            content: "",
            isUnchanged: true
        },
        "Assunto": {
            isValid: false,
            content: "",
            isUnchanged: true
        },
        "Telefone": {
            isValid: true,
            content: "",
            tip: " (optional)"
        },
        "Mensagem": {
            isValid: false,
            content: "",
            isUnchanged: true
        }
    });

    const validateField = (field, isValid, content) => {
        setRequiredFields(prevRequiredFields => ({
            ...prevRequiredFields, [field]: {
                isValid: isValid,
                content: content,
                isUnchanged: false
            }
        }))
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        let isFormReady = true;
        for (let key in requiredFields) {
            if (!requiredFields[key].isValid) {
                setRequiredFields(prevRequiredFields => ({
                    ...prevRequiredFields, [key]: {
                        isValid: false,
                        isUnchanged: false
                    }
                }))
                isFormReady = false;
            }
        }
        if (isFormReady) {
            let mailpostData = {
                lang: "pt-BR",
                sender: {
                    name: requiredFields["Nome"].content,
                    mail: "willpelicer@gmail.com"
                },
                mail: {
                    subject: requiredFields["Assunto"].content,
                    body: requiredFields["Mensagem"].content
                },
                additionalInfo: {
                    phoneNumber: requiredFields["Telefone"].content
                }
            }
            setUseModal(true);
            setModalContent({
                image: "Loading",
                illustration: WorkspaceCat,
                title: "Sending e-maill",
                description: "Your e-mail will be sent shortly (if the cat allow)",
                close: closeModal
            });
            email.sendMail(mailpostData).then(() => {
                setModalContent({
                    image: "Success",
                    illustration: GirlReading,
                    title: "Email sent successfully",
                    description: "We are raeding your email and will get back to you shortly.",
                    close: closeModal
                });

            }).catch(() => {
                setModalContent({
                    image: "Error",
                    illustration: WorkspaceCat,
                    title: "Something went wrong",
                    description: "We could not send your e-mail. Please, try again later.",
                    close: closeModal
                });
            });
            return false;
        }
    }

    return (
        <FormContainer>
            <Title title="Nos mande um e-mail" emailAddress="foo@bar.com.br" />
            <StyledForm onSubmit={handleSubmit}>
                <InputField isValid={requiredFields["Nome"].isValid} isUnchanged={requiredFields["Nome"].isUnchanged} content={requiredFields["Nome"].content} name="Nome" tip="" reportState={validateField} isValidCondition={notEmptyRegex} />
                <InputField isValid={requiredFields["Email"].isValid} isUnchanged={requiredFields["Email"].isUnchanged} content={requiredFields["Email"].content} name="Email" tip="" reportState={validateField} isValidCondition={mailRegex} />
                <InputField isValid={requiredFields["Assunto"].isValid} isUnchanged={requiredFields["Assunto"].isUnchanged} content={requiredFields["Assunto"].content} name="Assunto" tip="" reportState={validateField} isValidCondition={notEmptyRegex} />
                <InputField isValid={requiredFields["Telefone"].isValid} isUnchanged={requiredFields["Telefone"].isUnchanged} content={requiredFields["Telefone"].content} name="Telefone" tip={requiredFields["Telefone"].tip} reportState={validateField} />
                <TextAreaField isValid={requiredFields["Mensagem"].isValid} isUnchanged={requiredFields["Mensagem"].isUnchanged} content={requiredFields["Mensagem"].content} name="Mensagem" reportState={validateField} isValidCondition={notEmptyRegex} maxLength={500} />
                <Button type="submit" content="Enviar" />
            </StyledForm>
            {
                useModal ? (<Modal content={modalContent} />) : null
            }
        </FormContainer>
    );
}

export default Form;