import styled from 'styled-components'
import palette from '../../assets/style/palette.module.scss';
import fonts from '../../assets/style/fonts.module.scss';

function HeaderButton(props) {
    const Button = styled.button`
        grid-column-start: 2;
        cursor: pointer;
        border: 0;
        border-radius: 5px;
        padding: 15px 10px;
        color: ${palette.support_white};
        font: ${fonts.button1};
        background-image: linear-gradient(to right, ${palette.primary_blue}, ${palette.secondary_purple});
        max-width: ${props.maxWidth};
    `;

    return (
        <Button onClick={props.onClick}>
            {props.content}
        </Button>
    );
}

export default HeaderButton;