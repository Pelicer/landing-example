import styled from 'styled-components'
import palette from '../../assets/style/palette.module.scss';
import fonts from '../../assets/style/fonts.module.scss';
import defaultIcon from '../../assets/icons/system-icons/navbar-icons/layout.svg'

const Article = styled.div`
    border-radius: 10px;
    background-image: linear-gradient(to bottom, ${palette.support_grey_05}, ${palette.secondary_purple}20);
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 0 50px;
    min-height: 350px;
    justify-content: center;
`;
const Icon = styled.img`
    width: 35px;
`;

const Title = styled.p`
    font: ${fonts.subtitle2};
    text-align: center;
`;

const Content = styled.p`
    font: ${fonts.body1};
    text-align: center;
`;

function Item(props) {
    return (
        <Article>
            <Icon src={defaultIcon}/>
            <Title>{props.title}</Title>
            <Content>{props.content}</Content>
        </Article>
    );
}

export default Item;