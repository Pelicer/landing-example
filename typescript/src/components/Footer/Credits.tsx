import styled from 'styled-components'

const Credit = styled.span`
    padding-top: 10px;
    color: ${props => props.theme.colors.supportWhite};
    font: ${props => props.theme.fonts.body1};
`;

export const Credits: React.FC<{ to: string; }> = (props) => {
    return (
        <Credit>{props.to}</Credit >
    )
}