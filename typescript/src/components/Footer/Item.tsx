import styled from 'styled-components'
import palette from '../../assets/style/palette.module.scss';

const ItemWrapper = styled.div`
    background-color: ${palette.primary_blue};
    border-radius: 100%;
    height: 40px;
    width: 40px;
    margin-left: 10px;
    cursor: pointer;
    display: flex;
    justify-content: center;
`;

const Image = styled.img`
    width: 20px;
    filter: brightness(0) invert(1);
`;

export const Item: React.FC<{ icon: string; }> = (props) => {

    return (
        <ItemWrapper>
            <Image src={props.icon} />
        </ItemWrapper>
    );
}