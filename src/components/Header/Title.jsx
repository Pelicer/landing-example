import styled from 'styled-components'
import palette from '../../assets/style/palette.module.scss';
import fonts from '../../assets/style/fonts.module.scss';

const HeaderTitle = styled.p`
    font: ${fonts.h2};
    color: ${palette.support_grey_70};
    margin: 0;
`;

function Title(props) {
    return (
        <HeaderTitle>{props.title}</HeaderTitle>
    );
}

export default Title;