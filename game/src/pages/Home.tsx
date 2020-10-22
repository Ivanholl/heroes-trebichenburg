import React, { useEffect, useState } from 'react';
import LoginForm from '../components/forms/LoginForm';

export default function Home() {
    const [isLoaded, setIsLoaded] = useState(false);

    useEffect(() => {
        setIsLoaded(true);
    }, []); 

    return (<div id="home" className={isLoaded ? 'loaded' : ''}>
        <h1>Heroes of Trebichenburg</h1>
        <div className="form">
            <LoginForm/>
        </div>
    </div>);
};
