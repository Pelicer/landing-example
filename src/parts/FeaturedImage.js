import styled from 'styled-components';

const CustomSizedImage = styled.img`
    width: ${props => props.size};
`;

function FeaturedImage(props){
    return(
        <CustomSizedImage src={props.image} size={props.size}/>
    );
}

export default FeaturedImage;