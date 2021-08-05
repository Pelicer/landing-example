import styled from 'styled-components';

const TitleParagraph = styled.p`
    font: ${props => props.theme.fonts.title};
    color: ${props => props.theme.colors.supportGrey70};
    margin-bottom: 0;
`;

const Subtitle = styled.p`
    font: ${props => props.theme.fonts.subtitle2};
    margin-top: 0;
    color: ${props => props.theme.colors.supportGrey70};
`;

export const Title: React.FC<{ title: string; emailAddress: string; }> = (props) => {
    return (
        <div>
            <TitleParagraph>{props.title}</TitleParagraph>
            <Subtitle>{props.emailAddress}</Subtitle>
        </div>
    );
}