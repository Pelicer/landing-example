import styled from 'styled-components'
import palette from '../assets/style/palette.module.scss';
import SocialApp from '../components/Social/SocialApp'
import { v4 as uuidv4 } from 'uuid';
import { facebook, instagram, linkedin, twitter } from '../components/Social/SocialIcons';

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

const SocialBar = styled.section`
    padding: 0 300px;
    display: flex;
    background-color: ${palette.support_grey_05};
    justify-content: space-around;
`;

function Social() {
    return (
        <SocialBar>
            {
                SocialMedias.map((media) => {
                    return <SocialApp
                        key={uuidv4()}
                        link={media.link}
                        social={media.icon.default}
                    />
                })
            }
        </SocialBar>
    );
}

export default Social;