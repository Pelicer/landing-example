import styled from 'styled-components'
import palette from '../assets/style/palette.module.scss';
import SocialMedia from '../components/Footer/SocialMedia';
import Credits from '../components/Footer/Credits';

const FooterWrapper = styled.div`
    background-image: linear-gradient(to right, ${palette.primary_blue}, ${palette.secondary_purple});
    bottom: 0;
    width: 100%;
    display: grid;
    grid-template-columns: 1fr;
    grid-template-rows: auto;
    text-align: center;
    padding: 30px 0;
`;

function Footer() {
    return (
        <FooterWrapper>
            <SocialMedia />
            <Credits />
        </FooterWrapper >
    )
}

export default Footer;