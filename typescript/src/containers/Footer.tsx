import styled from 'styled-components'
import { SocialMedia, Credits } from '../components/Footer/index';

const FooterWrapper = styled.div`
    background-image: linear-gradient(to right, ${props => props.theme.colors.primaryBlue}, ${props => props.theme.colors.primaryPurple});
    bottom: 0;
    width: 100%;
    display: grid;
    grid-template-columns: 1fr;
    grid-template-rows: auto;
    text-align: center;
    padding: 30px 0;
`;

const Footer: React.FC = () => {
    return (
        <FooterWrapper>
            <SocialMedia />
            <Credits to="Foo © 2021" />
        </FooterWrapper >
    )
}

export default Footer;