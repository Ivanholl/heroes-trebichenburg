import React from 'react';
import {Link} from 'react-router-dom';
import LoginForm from '../components/LoginForm';

export default function Home() {
    return (<div id="home">
        <h1>Heroes of Trebichenburg</h1>
        <div className="form">
            <LoginForm/>
        </div>
    </div>);
};
