import styled from 'styled-components'
import measures from '../assets/style/measures.module.scss'
import FeaturedImage from '../shared/FeaturedImage';
import { Form } from '../components/Contact/index';
import Mail from '../assets/illustrations/mail.svg';

const Contact = styled.section`
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

const Social: React.FC = () => {
    return (
        <Contact>
            <ImageWrapper>
                <FeaturedImage image={Mail} />
            </ImageWrapper>
            <Form data={FormFields} />
        </Contact>
    );
}

export default Social;