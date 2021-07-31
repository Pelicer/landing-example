import styled from 'styled-components'
import palette from '../../assets/style/palette.module.scss';
import fonts from '../../assets/style/fonts.module.scss';

const HeaderTitle = styled.p`
    font: ${fonts.h2};
    color: ${palette.support_grey_70};
    margin: 0;
`;

export const Title: React.FC<{ title: string; }> = (props) => {
    return (
        <HeaderTitle>{props.title}</HeaderTitle>
    );
}