import React from 'react';
import { useLoaderData } from 'react-router-dom';

const Premium = () => {
    const main = useLoaderData();
    console.log(main)
    return (
        <div>
            Premium
        </div>
    );
};

export default Premium;