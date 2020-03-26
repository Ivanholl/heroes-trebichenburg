// import React from 'react';
// import logo from './logo.svg';
import './App.css';

import React, {Suspense, lazy} from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';

const Home = lazy(() => import('./routes/Home'));
const About = lazy(() => import('./routes/About'));

function App() {

    return (<Router>
        <Suspense fallback={<div> Loading ...</div>}>
            <Switch>
                <div className="container">
                    <Route exact={true} path="/" component={Home}/>
                    <Route path="/about" component={About}/>
                </div>
            </Switch>
        </Suspense>
    </Router>);
}

export default App;
