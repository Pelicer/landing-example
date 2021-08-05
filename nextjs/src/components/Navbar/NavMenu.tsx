import Link from 'next/link'
import styled from 'styled-components';

const List = styled.ul`
    display: flex;

    @media (max-width: 768px){
        flex-direction: column;
        margin: 0;
    }

    .item_toggle_show{
        display: flex;
    }
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

    @media (max-width: 768px){
        display: none;
        margin: 10px 0;
    }
`;

const NavMenu: React.FC = () => {
    return (
        <List>
            <ListItem className="navmenu_item"><Link href="/">Home</Link></ListItem>
            <ListItem className="navmenu_item"><Link href="/route-examples/">Route example 1</Link></ListItem>
            <ListItem className="navmenu_item"><Link href="/route-examples/1">Route example 2</Link></ListItem>
            <ListItem className="navmenu_item"><Link href="/route-examples/valor1/valor2/valor3">Route example 3</Link></ListItem>
        </List>
    );
}

export default NavMenu;