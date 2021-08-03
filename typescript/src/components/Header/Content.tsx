import styled from 'styled-components';

const Message = styled.p`
    font: ${props => props.theme.fonts.subtitle2};
    color: ${props => props.theme.fonts.supportGrey70};
    line-height: 1.5rem;
`;

export const Content: React.FC<{ message: string; }> = (props) => {
    return (
        <Message>{props.message}</Message>
    );
}