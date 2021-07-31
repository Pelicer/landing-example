import styled from 'styled-components'
import { Item } from './Item';
import { v4 as uuidv4 } from 'uuid';
import { facebook, instagram, linkedin, twitter } from '../Social/SocialIcons';

const SocialMedias = [
    {
        "icon": facebook
    },
    {
        "icon": twitter
    },
    {
        "icon": instagram
    },
    {
        "icon": linkedin
    },
];

const Social = styled.div`
    display: flex;
    align-items: flex-end;
    justify-content: center;
`;

export const SocialMedia: React.FC = () => {
    return (
        <Social>
            {
                SocialMedias.map((media) => {
                    return <Item
                        key={uuidv4()}
                        icon={media.icon.default}
                    />
                })
            }
        </Social>
    );
}