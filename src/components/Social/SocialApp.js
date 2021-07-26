import styled from 'styled-components';


const Social = styled.a`
    padding: 30px 0;
    &:hover{
        cursor: pointer;
        img{
        }
    }
`;

const CustomSizedImage = styled.img`
    width: 35px;
    height: 35px;
    &:hover{
        filter: brightness(0) invert(0)
    }
    transition: filter ease-in-out .3s;
`;

function SocialApp(props) {
    return (
        <Social href={props.link} target="_blank">
            <CustomSizedImage src={props.social.default} />
        </Social>
    );
}

export default SocialApp;