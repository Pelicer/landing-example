import GirlTyping from '../../assets/illustrations/girl-typing.svg';
import styled from 'styled-components';

const CustomSizedImage = styled.img`
    width: 400px;
`;

function FeaturedImage(){
    return(
        <CustomSizedImage src={GirlTyping}/>
    );
}

export default FeaturedImage;