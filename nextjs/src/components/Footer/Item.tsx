import styled from 'styled-components'
import Image from 'next/image'

const ItemWrapper = styled.div`
    background-color: ${props => props.theme.colors.primaryBlue};
    border-radius: 100%;
    height: 40px;
    width: 40px;
    margin-left: 10px;
    cursor: pointer;
    display: flex;
    justify-content: center;
`;

const CustomSizedImage = styled(Image)`
    width: 20px;
    filter: brightness(0) invert(1);
`;

export const Item: React.FC<{ icon: string; }> = (props) => {

    return (
        <ItemWrapper>
            <CustomSizedImage src={props.icon} width={20} height={20}/>
        </ItemWrapper>
    );
}