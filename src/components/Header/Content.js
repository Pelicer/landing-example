import styled from 'styled-components';
import palette from '../../assets/style/palette.module.scss';
import fonts from '../../assets/style/fonts.module.scss';

const Message = styled.p`
    font: ${fonts.subtitle2};
    color: ${palette.support_grey_70};
    line-height: 1.5rem;
    margin-bottom: 0;
`;

function Content() {
    return (
        <Message>
            Streamline time and value for your data engineers, scientists, and analytics using our cloud-based data warehouse platform.
        </Message>
    );
}

export default Content;