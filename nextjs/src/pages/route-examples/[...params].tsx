import React from 'react';
import { useRouter } from 'next/router';

const Route: React.FC = () => {
    const router = useRouter();
    console.log(router.query.params)
    const params: string[] = router.query.params as string[];
    return (
        <div>
            <h1>Im yet another example. You searched for multiple values!</h1>
            <ul>
                {params?.map(param => {
                    return <li key={param}>{param}</li>
                })}
            </ul>

        </div>
    );
}

export default Route;