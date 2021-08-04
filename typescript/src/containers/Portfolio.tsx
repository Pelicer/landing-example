import styled from 'styled-components'
import { useLayoutEffect, useState } from "react";
import { Title, Item } from '../components/Portfolio/index';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Articles = [
    {
        "id": 1,
        "icon": "",
        "title": "Operational BI",
        "content": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. "
    },
    {
        "id": 2,
        "icon": "",
        "title": "Data Visualization",
        "content": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. "
    },
    {
        "id": 3,
        "icon": "",
        "title": "Machine Learning",
        "content": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. "
    },
    {
        "id": 4,
        "icon": "",
        "title": "Natural Language Processing",
        "content": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. "
    },
    {
        "id": 5,
        "icon": "",
        "title": "Enhancing Privacy & Security",
        "content": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. "
    },
    {
        "id": 6,
        "icon": "",
        "title": "Data Mining",
        "content": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. "
    }
]

const PortfolioSection = styled.section`
    padding: 0 ${props => props.theme.measures.contentMargin};
    background-color: ${props => props.theme.colors.supportWhite};
    justify-content: space-around;
`;

const ItemsWrapper = styled.div`
    margin: 50px 0;
    display: grid;
    grid-gap: 30px;
    justify-items: center;

    @media (min-width: 992px){
        grid-template-columns: repeat(3, auto);
    }

    @media (min-width: 1200px){
        grid-template-columns: repeat(3, auto);
    }

    @media (min-width: 1680px){
        grid-template-columns: repeat(4, auto);
    }
`;

const Portfolio: React.FC = () => {

    const [width, setWidth] = useState(0);
    useLayoutEffect(() => {
        function updateSize() {
            setWidth(window.innerWidth);
        }
        window.addEventListener('resize', updateSize);
        updateSize();
    });

    const settings = {
        dots: true,
        infinite: true,
        autoplay: true,
        slidesToShow: 1,
        slidesToScroll: 1,
    };

    const ArticleList = Articles.map((article) => {
        return <Item
            key={article.id}
            title={article.title}
            content={article.content}>
        </Item>
    });

    return (
        <PortfolioSection>
            <Title title="Discover Your Insights" subtitle="Make data-driven decisions with confidence. Panoply provides a single source of data truth taht's compatible with all major business intelligence tools." />
            {
                width > 992 ? (
                    <ItemsWrapper>
                        {
                            ArticleList
                        }
                    </ItemsWrapper>
                ) : (
                    <Slider {...settings}>
                        {
                            ArticleList
                        }
                    </Slider>
                )
            }
        </PortfolioSection>
    )
}

export default Portfolio;