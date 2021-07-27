import styled from 'styled-components'
import measures from '../assets/style/measures.module.scss'
import FeaturedImage from '../parts/FeaturedImage';
import Form from '../components/Contact/Form';
import Mail from '../assets/illustrations/mail.svg';

const Contact = styled.section`
    margin: 50px 0;
    padding: 0 ${measures.main_content_margin};
    display: grid;
    grid-template-columns: repeat(2, 1fr);
`;

const ImageWrapper = styled.div`
    display: flex;
    align-self: center;
    justify-content: space-around;
`;

function Social() {
    return (
        <Contact>
            <ImageWrapper>
                <FeaturedImage image={Mail} size="400px" />
            </ImageWrapper>
            <Form />
        </Contact>
    );
}

export default Social;