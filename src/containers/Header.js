import styled from 'styled-components'
import FeaturedImage from '../shared/FeaturedImage'
import Title from '../components/Header/Title'
import Content from '../components/Header/Content'
import Button from '../shared/Button'
import Recommendation from '../components/Header/Recommendation'
import palette from '../assets/style/palette.module.scss';
import measures from '../assets/style/measures.module.scss';
import GirlTypying from '../assets/illustrations/girl-typing.svg'

const HeaderSection = styled.section`
    padding: 0 ${measures.main_content_margin};
    display: flex;
    height: 100vh;
    flex-direction: row;
    justify-content: space-evenly;
    background-image: linear-gradient(to bottom, ${palette.support_grey_05}, ${palette.secondary_purple}20);

    @media (max-width: 992px){
        padding: 0;
    }
`;

const HeaderImage = styled.div`
    display: flex;
    align-self: center;
    justify-content: space-around;

    @media (max-width: 768px){
        display: none;
    }
`;

const HeaderContent = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    max-width: 400px;

    @media (max-width: 1680px){
        margin-left: 50px;
    }

    @media (max-width: 992px){
        margin-left: 0;
    }
`;

function Header() {
    return (
        <HeaderSection>
            <HeaderImage>
                <FeaturedImage image={GirlTypying} />
            </HeaderImage>
            <HeaderContent>
                <Title />
                <Content />
                <Button content="Watch 2-Min Demo Video" maxWidth="250px" />
                <Recommendation />
            </HeaderContent>
        </HeaderSection>
    );
}

export default Header;