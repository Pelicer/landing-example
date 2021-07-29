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

function Social() {
    return (
        <Contact>
            <ImageWrapper>
                <FeaturedImage image={Mail} />
            </ImageWrapper>
            <Form />
        </Contact>
    );
}

export default Social;