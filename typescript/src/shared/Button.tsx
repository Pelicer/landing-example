import styled from 'styled-components'

interface StyledProps {
    maxWidth?: string;
}
const StyledButton = styled.button<StyledProps>`
    position: relative;
    grid-column-start: 2;
    cursor: pointer;
    border: 0;
    border-radius: 5px;
    padding: 15px 10px;
    color: ${props => props.theme.colors.supportWhite};
    font: ${props => props.theme.fonts.body1};
    background-image: linear-gradient(to right, ${props => props.theme.colors.primaryBlue}, ${props => props.theme.colors.primaryPurple});
    max-width: ${props => props.maxWidth};
    transition: opacity .3s ease-out;
    &:hover{
        opacity: .8;
    }
`;

const Button: React.FC<{ type?: string; maxWidth?: string; content: string }> = (props) => {
    return (
        <StyledButton maxWidth={props.maxWidth} >
            {props.content}
        </StyledButton >
    );
}

export default Button;