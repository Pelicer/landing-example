import styled from 'styled-components'
import Item from './Item';
import { v4 as uuidv4 } from 'uuid';
import { facebook, instagram, linkedin, twitter } from '../Social/SocialIcons.js';

const SocialMedias = [
    {
        "link": "#",
        "icon": facebook
    },
    {
        "link": "#",
        "icon": twitter
    },
    {
        "link": "#",
        "icon": instagram
    },
    {
        "link": "#",
        "icon": linkedin
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
            {
                SocialMedias.map((media) => {
                    return <Item
                        key={uuidv4()}
                        name={media.name}
                        icon={media.icon.default}
                    />
                })
            }
        </Social>
    );
}

export default SocialMedia;