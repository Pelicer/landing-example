import React from 'react';
import styled from 'styled-components';
import { useRouter } from 'next/router';
import Head from 'next/head';

const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
`;

const Title = styled.h1`
    font: ${props => props.theme.fonts.title};
    margin-top: 5rem;
    text-align: center;
`;

const List = styled.ul`
    font: ${props => props.theme.fonts.body1};
`;

const Route: React.FC = () => {
    const router = useRouter();
    const params: string[] = router.query.params as string[];
    return (
        <Container>
            <Head>
                <title>Route 3</title>
            </Head>
            <Title>Im yet another example. You searched for multiple values!</Title>
            <List>
                {params?.map(param => {
                    return <li key={param}>{param}</li>
                })}
            </List>
        </Container>
    );
}

export default Route;