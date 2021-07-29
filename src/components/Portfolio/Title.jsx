import styled from 'styled-components'
import palette from '../../assets/style/palette.module.scss';
import fonts from '../../assets/style/fonts.module.scss';

const TitleArea = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
    margin-bottom: 35px;
`;

const TitleParagraph = styled.p`
    margin-bottom: 1rem;
    font: ${fonts.h2};
    color: ${palette.support_grey_70};
`;

const ContentParagraph = styled.p`
    margin-top: 0;
    font: ${fonts.body1};
    color: ${palette.support_grey_70};
    max-width: 500px;
`;

function Title(props) {
    return (
        <TitleArea>
            <TitleParagraph>{props.title}</TitleParagraph>
            <ContentParagraph>{props.subtitle}</ContentParagraph>
        </TitleArea>
    );
}

export default Title;