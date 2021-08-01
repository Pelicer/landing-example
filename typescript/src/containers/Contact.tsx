import styled from 'styled-components'
import measures from '../assets/style/measures.module.scss'
import FeaturedImage from '../shared/FeaturedImage';
import { Form } from '../components/Contact/index';
import Mail from '../assets/illustrations/mail.svg';
import { Modal, IModalContent } from '../components/Modal/index';
import React, { useState } from 'react';
import { SendingEmail, EmailSent, EmailError } from '../components/Modal/ModalStates'

const StyledContact = styled.section`
    margin: 50px 0;
    padding: 0 ${measures.main_content_margin};
    display: grid;
    grid-template-columns: repeat(2, 1fr);

    @media (max-width: 992px){
        padding: 0 50px;
    }

    @media (max-width: 762px){
        grid-template-columns: 1fr;
        padding: 0 ${measures.main_content_margin};
    }
`;

const ImageWrapper = styled.div`
    display: flex;
    align-self: center;
    justify-content: space-around;

    @media (max-width: 762px){
        display: none;
    }
`;

const mailRegex = /^(([^<>()[\]\\.,;:\s@]+(\.[^<>()[\]\\.,;:\s@]+)*)|(.+))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
const notEmptyRegex = /^(?!\s*$).+/;
const FormFields = [
    {
        name: "Nome",
        isValid: false,
        content: "",
        isUnchanged: true,
        tip: "",
        isValidCondition: notEmptyRegex
    },
    {
        name: "Email",
        isValid: false,
        content: "",
        isUnchanged: true,
        tip: "",
        isValidCondition: mailRegex
    },
    {
        name: "Assunto",
        isValid: false,
        content: "",
        isUnchanged: true,
        tip: "",
        isValidCondition: notEmptyRegex
    },
    {
        name: "Telefone",
        isValid: true,
        content: "",
        isUnchanged: true,
        tip: " (optional)",
        isValidCondition: undefined
    },
    {
        name: "Mensagem",
        isValid: false,
        content: "",
        isUnchanged: true,
        tip: "",
        isValidCondition: notEmptyRegex
    }
];

const Contact: React.FC = () => {

    const closeModal = () => {
        setUseModal(false);
    }

    const reportSendProgress = (content: string) => {
        setUseModal(true);
        switch (content) {
            case "SENDING":
                setModalContent(SendingEmail(closeModal));
                break;
            case "SENT":
                setModalContent(EmailSent(closeModal));
                break;
            case "ERROR":
                setModalContent(EmailError(closeModal));
                break;
        }
    }

    const [useModal, setUseModal] = useState(false);
    const [modalContent, setModalContent] = useState<IModalContent>({ image: "", title: "", description: "", illustration: "", close: closeModal });

    return (
        <StyledContact>
            <ImageWrapper>
                <FeaturedImage image={Mail} />
            </ImageWrapper>
            <Form data={FormFields} reportSendProgress={reportSendProgress} />
            {
                useModal ? (<Modal {...modalContent} />) : null
            }
        </StyledContact>
    );
}

export default Contact;