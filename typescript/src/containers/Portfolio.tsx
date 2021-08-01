import styled from 'styled-components'
import { useLayoutEffect, useState } from "react";
import palette from '../assets/style/palette.module.scss';
import measures from '../assets/style/measures.module.scss';
import { Title, Item } from '../components/Portfolio/index';
import { v4 as uuidv4 } from 'uuid';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Articles = [
    {
        "icon": "",
        "title": "Operational BI",
        "content": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. "
    },
    {
        "icon": "",
        "title": "Data Visualization",
        "content": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. "
    },
    {
        "icon": "",
        "title": "Machine Learning",
        "content": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. "
    },
    {
        "icon": "",
        "title": "Natural Language Processing",
        "content": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. "
    },
    {
        "icon": "",
        "title": "Enhancing Privacy & Security",
        "content": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. "
    },
    {
        "icon": "",
        "title": "Data Mining",
        "content": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. "
    }
]

const PortfolioSection = styled.section`
    padding: 0 ${measures.main_content_margin};
    background-color: ${palette.support_white};
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

    // const ParentElement = (width > 992) ? ItemsWrapper : Slider;
    return width > 992 ? (
        <PortfolioSection>
            <Title title="Discover Your Insights" subtitle="Make data-driven decisions with confidence. Panoply provides a single source of data truth taht's compatible with all major business intelligence tools." />
            <ItemsWrapper>
                {
                    Articles.map((article) => {
                        return <Item
                            key={uuidv4()}
                            title={article.title}
                            content={article.content}>
                        </Item>
                    })
                }
            </ItemsWrapper>
        </PortfolioSection>
    ) : (
        <PortfolioSection>
            <Title title="Discover Your Insights" subtitle="Make data-driven decisions with confidence. Panoply provides a single source of data truth taht's compatible with all major business intelligence tools." />
            <Slider {...settings}>
                {
                    Articles.map((article) => {
                        return <Item
                            key={uuidv4()}
                            title={article.title}
                            content={article.content}>
                        </Item>
                    })
                }
            </Slider>
        </PortfolioSection>
    );
}

export default Portfolio;