import React from 'react';
import styled from 'styled-components';
import Head from 'next/head';

const Title = styled.h1`
    font: ${props => props.theme.fonts.title};
    margin-top: 5rem;
    text-align: center;
`;

const Route: React.FC = () => {
    return (
        <div>
            <Head>
                <title>Route 1</title>
            </Head>
            <Title>Im a route example without query strings!</Title>
        </div>
    );
}

export default Route;