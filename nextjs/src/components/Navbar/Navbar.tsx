import styled from 'styled-components';
import Link from 'next/link'

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
`;

const List = styled.ul`
    display: flex;
`;

const ListItem = styled.li`
    list-style: none;
    margin-left: 2em;
    cursor: pointer;
    color: ${props => props.theme.colors.supportGrey05};
    a {
        color: ${props => props.theme.colors.supportGrey05};
        text-decoration: none;
    }
`;

const Brand = styled.p`
    font: ${props => props.theme.fonts.body1};
    color: ${props => props.theme.colors.supportWhite};
    text-transform: uppercase;
`;

export const Navbar: React.FC = () => {

    return (
        <NavbarContainer>
            <Brand>Landing example</Brand>
            <List>
                <ListItem><Link href="/">Home</Link></ListItem>
                <ListItem><Link href="/route-examples/">Route example 1</Link></ListItem>
                <ListItem><Link href="/route-examples/1">Route example 2</Link></ListItem>
                <ListItem><Link href="/route-examples/valor1/valor2/valor3">Route example 3</Link></ListItem>
            </List>
        </NavbarContainer>
    );
}