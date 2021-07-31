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
    
    @media (max-width: 768px){
        width: 25px;
    }
`;

export const SocialApp: React.FC<{ link: string; social: string; }> = (props) => {
    return (
        <Social href={props.link} target="_blank">
            <CustomSizedImage src={props.social} />
        </Social>
    );
}