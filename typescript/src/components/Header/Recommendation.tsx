import styled from 'styled-components'

const Recommender = styled.p`
    font: ${props => props.theme.fonts.title};
    color: ${props => props.theme.colors.supportGrey70};
    margin-top: 1rem;
    margin-bottom: 0;
`;

const Quote = styled.p`
    font: ${props => props.theme.fonts.subtitle2};
    color: ${props => props.theme.colors.supportGrey70};
`;

const Author = styled.span`
    font: ${props => props.theme.fonts.subtitle3};
    color: ${props => props.theme.colors.supportGrey70};
    display: inline;
`;

export const Recommendation: React.FC<{ recommender: string; quote: string; author: string; }> = (props) => {
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