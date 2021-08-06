import { useRef, useEffect, useState } from 'react'
import { createPortal } from 'react-dom';
import Loading from '../../assets/icons/modal/loading.svg';
import Warning from '../../assets/icons/modal/warning.svg';
import Check from '../../assets/icons/modal/check.svg';
import Close from '../../assets/icons/modal/close.svg';
import Image from 'next/image';
import styled from 'styled-components';
import FeaturedImage from '../../shared/FeaturedImage';

const ModalContainer = styled.div`
    display: flex;
    position: fixed;
    margin: auto;
    justify-content: center;
    top: 0;
    width: 100%;
    height: 100vh;
    backdrop-filter: blur(3px);
    background-color: rgba(0, 0, 0, 0.2);
`;

const StyledModal = styled.div`
    position: absolute;
    border-radius: 10px;
    padding: 30px;
    background-color: ${props => props.theme.colors.supportWhite};
    width: 60%;
    height: 50%;
    display: flex;
    align-items: center;
    justify-content: space-evenly;
    align-self: center;
`;

const Title = styled.div`
    color: ${props => props.theme.colors.supportGrey70};
    font: ${props => props.theme.fonts.subtitle1};
    text-align: center;
`;

const Description = styled.div`
    color: ${props => props.theme.colors.supportGrey70};
    font: ${props => props.theme.fonts.body2};
    text-align: center;
`;

const Icon = styled.div`
    position: absolute;
    top: -35px;
    width: 70px;
    height: 70px;
    border-radius: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
`;

const ImageContainer = styled.div`
display: block;
    @media (max-width: 768px){
        display: none;
    }
`;

const LoadingIcon = styled(Icon)`
    background-image: linear-gradient(to right, ${props => props.theme.colors.primaryblue}, ${props => props.theme.colors.primaryPurple});
`;

const WarningIcon = styled(Icon)`
    background-color: ${props => props.theme.colors.supportYellow};
`;

const ErrorIcon = styled(Icon)`
    background-color: ${props => props.theme.colors.supportRed};
`;

const SuccessIcon = styled(Icon)`
    background-color: ${props => props.theme.colors.supportGreen};
`;

const CloseSpan = styled.span`
    cursor: pointer;
    position: absolute;
    top: 20px;
    right: 20px;
    color: ${props => props.theme.colors.supportGrey70};
`;

export interface IModalContent {
    image: string;
    title: string;
    description: string;
    illustration: string;
    close: Function;
}

export const Modal: React.FC<IModalContent> = (props) => {
    const selector = "#modal";
    const ref = useRef<HTMLDivElement>()
    const [mounted, setMounted] = useState(false)

    useEffect(() => {
        ref.current = document.querySelector(selector) as HTMLDivElement
        setMounted(true)
    }, [selector])

    let iconDictionary: Array<{ name: string, icon: string; styledComponent: any; }> =
        [
            {
                name: "Loading",
                icon: Loading,
                styledComponent: LoadingIcon
            },
            {
                name: "Warning",
                icon: Warning,
                styledComponent: WarningIcon
            },
            {
                name: "Success",
                icon: Check,
                styledComponent: SuccessIcon
            },
            {
                name: "Error",
                icon: Close,
                styledComponent: ErrorIcon
            }
        ]


    const Styled = iconDictionary.filter((icon) => {
        return icon.name === props.image
    })[0];
    const IconComponent = Styled.styledComponent;

    return (
        mounted ?
            createPortal(
                <ModalContainer data-test-id="react-portal-modal">
                    <StyledModal>
                        <IconComponent>
                            <Image src={Styled.icon} width={30} height={30} alt="" />
                        </IconComponent>
                        <div>
                            <Title>{props.title}</Title>
                            <Description>{props.description}</Description>
                        </div>
                        <ImageContainer>
                            <FeaturedImage image={props.illustration} />
                        </ImageContainer>
                        <CloseSpan onClick={() => props.close()}>🗙</CloseSpan>
                    </StyledModal>
                </ModalContainer>, ref.current as HTMLDivElement) : null
    )
}