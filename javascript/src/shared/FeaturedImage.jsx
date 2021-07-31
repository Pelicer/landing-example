import styled from 'styled-components';

const CustomSizedImage = styled.img`
    width: 350px;

    @media (max-width: 992px){
        width: 300px;
    }
    @media (min-width: 1680px){
        width: 500px;
    }
`;

function FeaturedImage(props) {
    return (
        <CustomSizedImage src={props.image} />
    );
}

export default FeaturedImage;