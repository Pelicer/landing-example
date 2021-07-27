import React, { useState } from 'react';
import styled from 'styled-components';
import Title from './Title';
import InputField from './InputField';
import TextAreaField from './TextAreaField';
import Button from '../Header/Button';
import axios from 'axios';

const StyledForm = styled.form`
    display: grid;
    grid-gap: 10px 30px;
`;

const mailRegex = /^(([^<>()[\]\\.,;:\s@]+(\.[^<>()[\]\\.,;:\s@]+)*)|(.+))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
const notEmptyRegex = /^(?!\s*$).+/;

function Form() {

    const handleSubmit = (event) => {
        event.preventDefault();
        console.log(event)
        return false;

        // if (formDataIsValid) {
        //     let mailpostData = {
        //         lang: "pt-BR",
        //         sender: {
        //             name: fields[0].value,
        //             mail: fields[1].value
        //         },
        //         mail: {
        //             subject: fields[2].value,
        //             body: fields[4].value
        //         },
        //         additionalInfo: {
        //             phoneNumber: fields[3].value
        //         }
        //     }
        //     sendMail(mailpostData);
        // };
    }

    const sendMail = (mailpostData) => {
        //modal carregando
        axios({
            method: "POST",
            url: "./api/v1/contact",
            body: JSON.stringify(mailpostData)
        }).then(() => {
            //modal sucesso

        }).catch(error => {
            //modal deu ruim
            console.log(error);
        })
    }

    return (
        <div id="sunshine-contact">
            <div className="form-wrapper">
                <Title />
                <StyledForm onSubmit={handleSubmit}>
                    <InputField name="Nome" isValidCondition={notEmptyRegex} />
                    <InputField name="Email" isValidCondition={mailRegex} />
                    <InputField name="Assunto" isValidCondition={notEmptyRegex} />
                    <InputField name="Telefone" isValidCondition={notEmptyRegex} />
                    <TextAreaField name="Mensagem" isValidCondition={notEmptyRegex} maxLength={500} />
                    <Button type="submit" content="Enviar" maxWidth="none" />
                </StyledForm>
            </div>
        </div>
    );
}

export default Form;