import styled from 'styled-components'
import FeaturedImage from '../components/Header/FeaturedImage'
import Title from '../components/Header/Title'
import Content from '../components/Header/Content'
import HeaderButton from '../components/Header/Button'
import Recommendation from '../components/Header/Recommendation'
import palette from '../assets/style/palette.module.scss';

const HeaderSection = styled.section`
    padding: 0 100px;
    display: grid;
    height: 100vh;
    grid-template-columns: repeat(2, 1fr);
    background-image: linear-gradient(to bottom, ${palette.support_grey_05}, ${palette.secondary_purple}20);
`;

const HeaderImage = styled.div`
    display: flex;
    align-self: center;
    justify-content: space-around;
`;

const HeaderContent = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    max-width: 400px;
    padding: 0 50px;
`;

function Header() {
    return (
        <HeaderSection>
            <HeaderImage>
                <FeaturedImage />
            </HeaderImage>
            <HeaderContent>
                <Title />
                <Content />
                <HeaderButton content="Watch 2-Min Demo Video" maxWidth="250px" />
                <Recommendation />
            </HeaderContent>
        </HeaderSection>
    );
}

export default Header;