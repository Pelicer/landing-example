import React, { useState } from 'react';
import styled from 'styled-components';
import Dialog from '../../parts/Dialog';
import Title from './Title';
import InputField from './InputField';
import TextAreaField from './TextAreaField';
import Button from '../Header/Button';

const StyledForm = styled.div`
    display: grid;
    grid-gap: 30px;
`;

const maxMessageLength = 500;
const mailRegex = /^(([^<>()[\]\\.,;:\s@]+(\.[^<>()[\]\\.,;:\s@]+)*)|(.+))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
;
function Form(props) {
    const [formState, setFormState] = useState(
        {
            remainingMessageChar: 500,
            dialogData: {
                set: false,
                mode: "",
                title: "",
                text: "",
                button: {
                    set: false,
                    text: "",
                    action: null
                }
            }
        });

    const validateForm = () => {
        let formDataIsValid = true;
        let fields = [
            document.getElementsByName("txtNome")[0],
            document.getElementsByName("txtEmail")[0],
            document.getElementsByName("txtAssunto")[0],
            document.getElementsByName("txtTelefone")[0],
            document.getElementsByName("txtMensagem")[0]
        ];
        fields.forEach((element) => {
            if (element.value.length <= 0) {
                element.classList.add("error");
                formDataIsValid = false;
            } else {
                element.classList.remove("error");
            }
        })
        if (!(validateMail(fields[1]) && validatePhone((fields[3])))) {
            formDataIsValid = false;
        }

        if (formDataIsValid) {
            let mailpostData = {
                lang: "pt-BR",
                sender: {
                    name: fields[0].value,
                    mail: fields[1].value
                },
                mail: {
                    subject: fields[2].value,
                    body: fields[4].value
                },
                additionalInfo: {
                    phoneNumber: fields[3].value
                }
            }
            sendMail(mailpostData);
        };

    }

    const setDialogData = (newData) => {
        setFormState({ dialogData: newData }, () => console.log(formState.dialogData));
    }

    const sendMail = (mailpostData) => {
        setDialogData(
            {
                set: true,
                mode: "loading",
                title: "Carregando",
                text: "Aguarde enquanto enviamos seu e-mail",
                button: {
                    set: false,
                    text: "",
                    action: null
                }
            });
        fetch("./api/v1/contact", {
            method: "POST",
            body: JSON.stringify(mailpostData)
        })
            .then((resp) => resp.json())
            .then((data) => {
                this.props.setDialogData(
                    {
                        set: true,
                        mode: "success",
                        title: "Sucesso",
                        text: "Seu e-mail foi enviado para o time da TK com sucesso",
                        button: {
                            set: true,
                            text: "OK",
                            action: () => {
                                document.getElementsByName("txtName")[0].value = "";
                                document.getElementsByName("txtMail")[0].value = "";
                                document.getElementsByName("txtSubject")[0].value = "";
                                document.getElementsByName("txtPhone")[0].value = "";
                                document.getElementsByName("txtMessage")[0].value = "";
                                document.getElementsByName("txtName")[0].focus();
                                this.props.setDialogData({ set: false });
                            }
                        }
                    });
            })
            .catch((error) => {
                setFormState(
                    {
                        set: true,
                        mode: "error",
                        title: "Ops!",
                        text: "Algo de errado aconteceu quando tentamos enviar seu e-mail. Por favor, tente novamente mais tarde",
                        button: {
                            set: true,
                            text: "Fechar",
                            action: () => {
                                this.props.setDialogData({ set: false });
                            }
                        }
                    }
                );
            });
    }

    const validatePhone = (e) => {
        return true;
    }

    const validateMail = (e) => {
        let mail = e.target.value;
        if (!mailRegex.test(mail)) {
            e.target.classList.add("error");
            return;
        }
        e.target.classList.remove("error");
    }

    const validateMessage = (e) => {
        let msg = e.target.value;
        if (msg.length > maxMessageLength) {
            e.target.value = msg.substring(0, maxMessageLength);
            return;
        }
        setFormState({ remainingMessageChar: maxMessageLength - msg.length })
    }

    return (
        <div id="sunshine-contact">
            <div className="form-wrapper">
                <Title />
                <StyledForm>
                    <InputField name="Nome" />
                    <InputField name="Email" onKeyUp={(event) => validateMail(event)} />
                    <InputField name="Assunto" />
                    <InputField name="Telefone" onKeyUp={(event) => validatePhone(event)} />
                    <TextAreaField name="Mensagem" onKeyUp={(event) => validateMessage(event)} />
                    <p id="txtRemainingChars">{formState.remainingMessageChar} caracteres</p>
                    <Button content="Enviar" maxWidth="none" onClick={() => validateForm()} />
                </StyledForm>
            </div>
        </div>
    );
}

export default Form;