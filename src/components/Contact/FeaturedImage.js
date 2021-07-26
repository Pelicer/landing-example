import Mail from '../../assets/illustrations/mail.svg';
import styled from 'styled-components';

const CustomSizedImage = styled.img`
    width: 400px;
`;

function FeaturedImage() {
    return (
        <CustomSizedImage src={Mail} />
    );
}

export default FeaturedImage;