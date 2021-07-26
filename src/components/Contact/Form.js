import React from 'react';
import styled from 'styled-components';
import Dialog from '../../parts/Dialog';
import Title from './Title';
import InputField from './InputField';
import TextAreaField from './TextAreaField';
import Button from '../Header/Button';

const Form = styled.div`
    display: grid;
    grid-gap: 30px;
`;

export default class ContactForm extends React.Component {
    constructor(props) {
        super(props);
        this.validateMessage = this.validateMessage.bind(this);
        this.validateMail = this.validateMail.bind(this);
        this.validatePhone = this.validatePhone.bind(this);
        this.sendMail = this.sendMail.bind(this);
        this.setDialogData = this.setDialogData.bind(this);
        this.state = {
            maxMessageChar: 500,
            remainingMessageChar: 500,
            mailRegex: /^(([^<>()[\]\\.,;:\s@]+(\.[^<>()[\]\\.,;:\s@]+)*)|(.+))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
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
        };
    }

    setDialogData(newData) {
        this.setState({ dialogData: newData }, () => console.log(this.state.dialogData));
    }

    sendMail(mailpostData) {
        this.setDialogData(
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
                this.setState(
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

    validatePhone(e) {
        return true;
    }

    validateMail(e) {
        let mail = null;
        if (e.target === undefined) {
            e.target = e;
            mail = e.value
        } else {
            mail = e.target.value;
        }
        if (!this.state.mailRegex.test(mail)) {
            e.target.classList.add("error");
            return false;
        } else {
            e.target.classList.remove("error");
            return true;
        }
    }

    validateMessage(e) {
        let msg = null;
        if (e.target === undefined) {
            e.target = e;
            msg = e.value
        } else {
            msg = e.target.value;
        }
        if (msg.length > this.state.maxMessageChar) {
            e.target.value = msg.substring(0, this.state.maxMessageChar);
            return false;
        } else {
            this.setState({ remainingMessageChar: this.state.maxMessageChar - msg.length })
            return true;
        }
    }

    validateForm() {
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
        if (!(this.validateMail(fields[1]) && this.validatePhone((fields[3])))) {
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
            this.sendMail(mailpostData);
        };

    }

    render() {
        return (
            <div id="sunshine-contact">
                <div className="form-wrapper">
                    <Title />
                    <Form>
                        <InputField name="Nome" />
                        <InputField name="Email" onKeyUp={(event) => this.validateMail(event)} />
                        <InputField name="Assunto" />
                        <InputField name="Telefone" onKeyUp={(event) => this.validatePhone(event)} />
                        <TextAreaField name="Mensagem" onKeyUp={(event) => this.validateMessage(event)} />
                        <p id="txtRemainingChars">{this.state.remainingMessageChar} caracteres</p>
                        <Button content="Enviar" maxWidth="none" onClick={() => this.validateForm()} />
                    </Form>
                </div>
            </div>
        );
    }
}