import styled from 'styled-components'
import FeaturedImage from '../shared/FeaturedImage'
import Button from '../shared/Button'
import { Title, Content, Recommendation } from '../components/Header/index'
import GirlTypying from '../assets/illustrations/girl-typing.svg'

const HeaderSection = styled.section`
    padding: 0 ${props => props.theme.measures.contentMargin};
    display: flex;
    height: 100vh;
    flex-direction: row;
    justify-content: space-evenly;
    background-image: linear-gradient(to bottom, ${props => props.theme.colors.supportGrey05}, ${props => props.theme.colors.primaryPurple}20);

    @media (max-width: 992px){
        padding: 0;
    }

    @media (max-width: 768px){
        padding: 0 ${props => props.theme.measures.contentMargin};
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

const Header: React.FC = () => {
    return (
        <HeaderSection>
            <HeaderImage>
                <FeaturedImage image={GirlTypying} />
            </HeaderImage>
            <HeaderContent>
                <Title title="Transform your data analytics in under 10 minutes" />
                <Content message="Streamline time and value for your data engineers, scientists, and analytics using our cloud-based data warehouse platform." />
                <Button content="Watch 2-Min Demo Video" maxWidth="250px" />
                <Recommendation recommender="GoDaddy" quote="Panoply enables non technical people to get questions answered more easily" author="Nissim, Director of Product" />
            </HeaderContent>
        </HeaderSection>
    );
}

export default Header;