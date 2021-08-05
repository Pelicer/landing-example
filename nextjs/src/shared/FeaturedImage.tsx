import styled from 'styled-components';
import Image from 'next/image'

const CustomSizedImage = styled(Image)`
    width: 350px;

    @media (max-width: 992px){
        padding: 30px !important;
    }
    @media (min-width: 1680px){
        width: 500px;
    }
`;

const FeaturedImage: React.FC<{ image: string }> = (props) => {
    return (
        <CustomSizedImage src={props.image} alt="" width={500} height={500}/>
    );
}

export default FeaturedImage;