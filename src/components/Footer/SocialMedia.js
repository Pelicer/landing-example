import styled from 'styled-components'
import Item from './Item';
import { v4 as uuidv4 } from 'uuid';

const SocialMedias = [
    {
        "link": "#",
        "icon": "../../assets/icons/social-media/facebook.svg"
    },
    {
        "link": "#",
        "icon": "../../assets/icons/social-media/twitter.svg"
    },
    {
        "link": "#",
        "icon": "../../assets/icons/social-media/instagram.svg"
    },
    {
        "link": "#",
        "icon": "../../assets/icons/social-media/linkedin.svg"
    },
];

const Social = styled.div`
    display: flex;
    align-items: flex-end;
    justify-content: center;
`;

function SocialMedia() {
    return (
        <Social>
            <Item link="#" icon={require("../../assets/icons/social-media/facebook.svg")} />
            <Item link="#" icon={require("../../assets/icons/social-media/instagram.svg")} />
            <Item link="#" icon={require("../../assets/icons/social-media/linkedin.svg")} />
            <Item link="#" icon={require("../../assets/icons/social-media/twitter.svg")} />
            {/* {
                SocialMedias.map((media) => {
                    return <Item
                        key={uuidv4()}
                        name={media.name}
                        icon={require(media.icon)}
                    />
                })
            } */}
        </Social>
    );
}

export default SocialMedia;