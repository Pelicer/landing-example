import styled from 'styled-components';
import palette from '../../assets/style/palette.module.scss';
import fonts from '../../assets/style/fonts.module.scss';

const Message = styled.p`
    font: ${fonts.subtitle2};
    color: ${palette.support_grey_70};
    line-height: 1.5rem;
`;

function Content(props) {
    return (
        <Message>{props.message}</Message>
    );
}

export default Content;