import styled from 'styled-components'
import palette from '../assets/style/palette.module.scss';
import fonts from '../assets/style/fonts.module.scss';

const StyledButton = styled.button`
    position: relative;
    grid-column-start: 2;
    cursor: pointer;
    border: 0;
    border-radius: 5px;
    padding: 15px 10px;
    color: ${palette.support_white};
    font: ${fonts.button1};
    background-image: linear-gradient(to right, ${palette.primary_blue}, ${palette.secondary_purple});
    max-width: ${props => props.maxWidth};
    transition: opacity .3s ease-out;
    &:hover{
        opacity: .8;
    }
`;

function Button(props) {
    return (
        <StyledButton onClick={props.onClick} maxWidth={props.maxWidth}>
            {props.content}
        </StyledButton>
    );
}

export default Button;