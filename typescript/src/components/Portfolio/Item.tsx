import styled from 'styled-components'

const ArticleContainer = styled.div`
    display: flex;
    place-content: center;
`;

const Article = styled.div`
    border-radius: 10px;
    background-image: linear-gradient(to bottom, ${props => props.theme.colors.supportGrey05}, ${props => props.theme.colors.primaryPurple}20);
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 0 50px;
    min-height: 350px;
    max-width: 200px;
    justify-content: center;

    @media (max-width: 992px){
        margin: 0 30px;
    }
`;

const Icon = styled.img`
    width: 35px;
`;

const Title = styled.p`
    font: ${props => props.theme.fonts.subtitle2};
    text-align: center;
`;

const Content = styled.p`
    font: ${props => props.theme.fonts.body1};
    text-align: center;
`;

export const Item: React.FC<{ title: string; content: string; }> = (props) => {

    const defaultIcon = require('../../assets/icons/system-icons/navbar-icons/layout.svg');

    return (
        <ArticleContainer>
            <Article>
                <Icon src={defaultIcon.default} />
                <Title>{props.title}</Title>
                <Content>{props.content}</Content>
            </Article>
        </ArticleContainer>
    );
}