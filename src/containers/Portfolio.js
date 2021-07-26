import styled from 'styled-components'
import palette from '../assets/style/palette.module.scss';
import Title from '../components/Portfolio/Title';
import Item from '../components/Portfolio/Item';
import { v4 as uuidv4 } from 'uuid';

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
    padding: 0 100px;
    background-color: ${palette.support_white};
    justify-content: space-around;
`;

const ItemsWrapper = styled.div`
    margin: 50px 0;
    padding: 0 150px;
    display: grid;
    grid-template-columns: repeat(3, auto);
    grid-column-gap: 30px;
    grid-row-gap: 30px;
    justify-items: center;
`;

function Portfolio() {
    return (
        <PortfolioSection>
            <Title />
            <ItemsWrapper>
                {
                    Articles.map((article) => {
                        return <Item
                            key={uuidv4()}
                            icon={article.icon}
                            title={article.title}
                            content={article.content}>
                        </Item>
                    })
                }
            </ItemsWrapper>
        </PortfolioSection>
    );
}

export default Portfolio;