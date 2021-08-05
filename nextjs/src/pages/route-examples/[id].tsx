import React from 'react';
import { useRouter } from 'next/router';

const Route: React.FC = () => {
    const router = useRouter();
    return (<h1>Im another example. You searched for a single value: {router.query.id}</h1>);
}

export default Route;