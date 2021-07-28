import styled from 'styled-components';
import palette from '../../assets/style/palette.module.scss';
import fonts from '../../assets/style/fonts.module.scss';

const TitleParagraph = styled.p`
    font: ${fonts.h2};
    color: ${palette.support_grey_70};
    margin-bottom: 0;
`;

const Subtitle = styled.p`
    font: ${fonts.subtitle2};
    margin-top: 0;
    color: ${palette.support_grey_70};
`;

function Title() {
    return (
        <div>
            <TitleParagraph>Nos mande um e-mail</TitleParagraph>
            <Subtitle>foo@bar.com</Subtitle>
        </div>
    );
}

export default Title;