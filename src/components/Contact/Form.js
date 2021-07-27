import React, { useState } from 'react';
import styled from 'styled-components';
import Title from './Title';
import InputField from './InputField';
import TextAreaField from './TextAreaField';
import Button from '../../parts/Button';
import { email } from '../../api/EmailAPI';
import Modal from '../Modal/Modal';
import WorkspaceCat from '../../assets/illustrations/workspace-cat.svg'

const StyledForm = styled.form`
    display: grid;
    grid-gap: 10px 30px;
`;

const mailRegex = /^(([^<>()[\]\\.,;:\s@]+(\.[^<>()[\]\\.,;:\s@]+)*)|(.+))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
const notEmptyRegex = /^(?!\s*$).+/;

function Form() {

    const [requiredFields, setRequiredFields] = useState({
        "Nome": {
            isValid: false,
            content: ""
        },
        "Email": {
            isValid: false,
            content: ""
        },
        "Assunto": {
            isValid: false,
            content: ""
        },
        "Telefone": {
            isValid: true,
            content: ""
        },
        "Mensagem": {
            isValid: false,
            content: ""
        }
    });

    const validateField = (field, isValid, content) => {
        setRequiredFields(prevRequiredFields => ({
            ...prevRequiredFields, [field]: {
                isValid: isValid,
                content: content
            }
        }))
        console.log(requiredFields);
    }

    const handleSubmit = (event) => {
        console.log(event);
        event.preventDefault();
        for (let key in requiredFields) {
            if (!requiredFields[key].isValid) {
                console.warn("campos faltando")
                //visually notify that there's an invalid field
                return;
            }
        }
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
        // email.sendMail(mailpostData);
        return false;
    }

    return (
        <div>
            <Title />
            <StyledForm onSubmit={handleSubmit}>
                <InputField name="Nome" reportState={validateField} isValidCondition={notEmptyRegex} />
                <InputField name="Email" reportState={validateField} isValidCondition={mailRegex} />
                <InputField name="Assunto" reportState={validateField} isValidCondition={notEmptyRegex} />
                <InputField name="Telefone" reportState={validateField} />
                <TextAreaField name="Mensagem" reportState={validateField} isValidCondition={notEmptyRegex} maxLength={500} />
                <Button type="submit" content="Enviar" maxWidth="none" />
            </StyledForm>
            {/* <Modal image="Loading" illustration={WorkspaceCat} title="Sending e-mail" description="Your e-mail will be sent shortly (if the cat allow)" /> */}
        </div>
    );
}

export default Form;