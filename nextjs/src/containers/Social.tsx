import styled from 'styled-components'
import { SocialApp } from '../components/Social/index'
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
    background-color: ${props => props.theme.colors.supportGrey05};
    justify-content: space-around;

    @media (max-width: 1680px){
        padding: 0 300px;
    }
    @media (max-width: 992px){
        padding: 0 100px;
    }
    @media (max-width: 768px){
        padding: 0 50px;
    }
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