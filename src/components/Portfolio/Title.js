import styled from 'styled-components'
import palette from '../../assets/style/palette.module.scss';
import fonts from '../../assets/style/fonts.module.scss';

const TitleArea = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 0 100px;
    text-align: center;
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
`;


function Title() {
    return (
        <TitleArea>
            <TitleParagraph>Discover Your Insights</TitleParagraph>
            <ContentParagraph>Make data-driven decisions with confidence. Panoply provides a single source of data truth taht's compatible with all major business intelligence tools.</ContentParagraph>
        </TitleArea>
    );
}

export default Title;