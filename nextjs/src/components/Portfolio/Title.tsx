import styled from 'styled-components'

const TitleArea = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
    margin-bottom: 35px;
`;

const TitleParagraph = styled.p`
    margin-bottom: 1rem;
    font: ${props => props.theme.fonts.title};
    color: ${props => props.theme.colors.supportGrey70};
`;

const ContentParagraph = styled.p`
    margin-top: 0;
    font: ${props => props.theme.fonts.body1};
    color: ${props => props.theme.colors.supportGrey70};
    max-width: 500px;
`;

export const Title: React.FC<{ title: string; subtitle: string }> = (props) => {
    return (
        <TitleArea>
            <TitleParagraph>{props.title}</TitleParagraph>
            <ContentParagraph>{props.subtitle}</ContentParagraph>
        </TitleArea>
    );
}