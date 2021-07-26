import styled from 'styled-components'
import FeaturedImage from '../components/Contact/FeaturedImage';
import Form from '../components/Contact/Form';

const Contact = styled.section`
    margin: 50px 0;
    padding: 0 100px;
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
                <FeaturedImage />
            </ImageWrapper>
            <Form />
        </Contact>
    );
}

export default Social;