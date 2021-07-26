import styled from 'styled-components'
import palette from '../assets/style/palette.module.scss';
import SocialApp from '../components/Social/SocialApp'
import { v4 as uuidv4 } from 'uuid';

const SocialMedias = [
    {
        "link": "#",
        "icon": "../assets/icons/social-media/facebook.svg"
    },
    {
        "link": "#",
        "icon": "../assets/icons/social-media/twitter.svg"
    },
    {
        "link": "#",
        "icon": "../assets/icons/social-media/instagram.svg"
    },
    {
        "link": "#",
        "icon": "../assets/icons/social-media/linkedin.svg"
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
            <SocialApp link="#" social={require("../assets/icons/social-media/facebook.svg")} />
            <SocialApp link="#" social={require("../assets/icons/social-media/instagram.svg")} />
            <SocialApp link="#" social={require("../assets/icons/social-media/linkedin.svg")} />
            <SocialApp link="#" social={require("../assets/icons/social-media/twitter.svg")} />
            {/* {
                SocialMedias.map((media) =>{
                    return <SocialApp 
                        key={uuidv4()}
                        link={media.link}
                        social={require(media.icon)}
                    />
                })
            } */}
        </SocialBar>
    );
}

export default Social;