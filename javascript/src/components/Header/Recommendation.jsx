import styled from 'styled-components'
import palette from '../../assets/style/palette.module.scss';
import fonts from '../../assets/style/fonts.module.scss';

const Recommender = styled.p`
    font: ${fonts.h2};
    color: ${palette.support_grey_70};
    margin-top: 1rem;
    margin-bottom: 0;
`;

const Quote = styled.p`
    font: ${fonts.subtitle2};
    color: ${palette.support_grey_70};
`;

const Author = styled.span`
    font: ${fonts.subtitle3};
    color: ${palette.support_grey_70};
    display: inline;
`;

function Recommendation(props) {
    return (
        <div>
            <Recommender>
                {props.recommender}
            </Recommender>
            <Quote>
                "{props.quote}"
                <Author>
                    - {props.author}
                </Author>
            </Quote>
        </div>

    );
}

export default Recommendation;