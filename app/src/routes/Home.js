import React from 'react';
import {Link} from 'react-router-dom';
import LoginForm from '../components/LoginForm';

function Home() {
    return (<div id="home">    
        <h1>Heroes Of Trebichenburg</h1>
        <div className="form">
            <LoginForm/>
            <div>
                <Link to="/about">About</Link>
            </div>
        </div>
    </div>);
}

export default Home;
