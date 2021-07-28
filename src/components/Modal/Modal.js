import React from 'react';
import ReactDOM from 'react-dom';
import { Loading, Warning, Check, Close } from './FeedbackIcons';
import styled from 'styled-components';
import palette from '../../assets/style/palette.module.scss';
import fonts from '../../assets/style/fonts.module.scss';
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
    background-color: ${palette.support_white};
    width: 50%;
    height: 50%;
    display: flex;
    align-items: center;
    justify-content: space-evenly;
    align-self: center;
`;

const Title = styled.div`
    color: ${palette.support_grey_70};
    font: ${fonts.subtitle1};
    text-align: center;
`;

const Description = styled.div`
    color: ${palette.support_grey_70};
    font: ${fonts.body2};
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

const LoadingIcon = styled(Icon)`
    background-image: linear-gradient(to right, ${palette.primary_blue}, ${palette.secondary_purple});
`;

const WarningIcon = styled(Icon)`
    background-color: ${palette.support_yellow};
`;

const ErrorIcon = styled(Icon)`
    background-color: ${palette.support_red};
`;

const SuccessIcon = styled(Icon)`
    background-color: ${palette.support_green};
`;

const CloseSpan = styled.span`
    cursor: pointer;
    position: absolute;
    top: 20px;
    right: 20px;
    color: ${palette.support_gre_70};
`;


function Modal(props) {
    let iconDictionary =
    {
        "Loading": {
            icon: Loading.default,
            styledComponent: LoadingIcon
        },
        "Warning": {
            icon: Warning.default,
            styledComponent: WarningIcon
        },
        "Success": {
            icon: Check.default,
            styledComponent: SuccessIcon
        },
        "Error": {
            icon: Close.default,
            styledComponent: ErrorIcon
        }
    }

    const ImageIcon = iconDictionary[props.content.image].styledComponent;
    return (

        ReactDOM.createPortal(
            <ModalContainer>
                <StyledModal>
                    <ImageIcon>
                        <FeaturedImage image={iconDictionary[props.content.image].icon} size="30px" />
                    </ImageIcon>
                    <div>
                        <Title>{props.content.title}</Title>
                        <Description>{props.content.description}</Description>
                    </div>
                    <FeaturedImage image={props.content.illustration}/>
                    <CloseSpan onClick={props.content.close}>🗙</CloseSpan>
                </StyledModal>
            </ModalContainer>, document.querySelector('#modal-root'))
    )
}

export default Modal;