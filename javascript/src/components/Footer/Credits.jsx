import styled from 'styled-components'
import palette from '../../assets/style/palette.module.scss';
import fonts from '../../assets/style/fonts.module.scss';

const Credit = styled.span`
    padding-top: 10px;
    color: ${palette.support_white};
    font: ${fonts.body1};
`;

function Credits(props) {
    return (
        <Credit>{props.to}</Credit >
    )
}

export default Credits;