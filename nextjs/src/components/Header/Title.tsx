import styled from 'styled-components'

const HeaderTitle = styled.p`
    font: ${props => props.theme.fonts.title};
    color: ${props => props.theme.colors.supportGrey70};
    margin: 0;
`;

export const Title: React.FC<{ title: string; }> = (props) => {
    return (
        <HeaderTitle>{props.title}</HeaderTitle>
    );
}