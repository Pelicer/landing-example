import React from 'react';
import styled from 'styled-components';
import { useRouter } from 'next/router';
import Head from 'next/head'

const Title = styled.h1`
    font: ${props => props.theme.fonts.title};
    margin-top: 5rem;
    text-align: center;
`;

const Route: React.FC = () => {
    const router = useRouter();
    return (
        <div>
            <Head>
                <title>Route 2</title>
            </Head>
            <Title>Im another example. You searched for a single value: {router.query.id}</Title>
        </div>
    );
}

export default Route;