import styled from 'styled-components';
import NavMenu from './NavMenu';
import Image from 'next/image';
import icon from '../../assets/icons/system-icons/upper-navbar-icons/menu.svg';

const NavbarContainer = styled.div`
    position: sticky;
    display: flex;
    justify-content: space-around;
    top: 0;
    width: 100%;
    z-index: 2;
    font: ${props => props.theme.fonts.body1};
    color: ${props => props.theme.colors.supportGrey05};
    background-image: linear-gradient(to right, ${props => props.theme.colors.primaryBlue}, ${props => props.theme.colors.primaryPurple});

    @media (max-width: 768px){
        flex-direction: column;
    }
`;

const HamburguerIcon = styled.div`
    position: absolute;
    top: 0;
    right: 0;
    display: none;
    cursor: pointer;
    margin: 10px 10px 0 0;
    @media (max-width: 768px){
        display: flex;
    }
`;

const Brand = styled.p`
    font: ${props => props.theme.fonts.body1};
    color: ${props => props.theme.colors.supportWhite};
    text-transform: uppercase;
    @media (max-width: 768px){
        align-self: center;
    }
`;

export const Navbar: React.FC = () => {
    const ToggleMenuHandler = () => {
        const navs = document.querySelectorAll('.navmenu_item')
        navs.forEach(nav => nav.classList.toggle('item_toggle_show'));
    }

    return (
        <NavbarContainer>
            <Brand>Landing example</Brand>
            <HamburguerIcon onClick={() => ToggleMenuHandler()}>
                <Image src={icon} alt="" width={25} height={25} />
            </HamburguerIcon>
            <NavMenu />
        </NavbarContainer>
    );
}