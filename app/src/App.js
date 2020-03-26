// import React from 'react';
// import logo from './logo.svg';
import './css/main.css';

import React, {Suspense, lazy} from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';

const Home = lazy(() => import ('./routes/Home'));
const About = lazy(() => import ('./routes/About'));

function App() {

    return (
        <Router>

            <Suspense fallback={<div> Loading ...</div>}>
                <Switch>
                    <Route exact={true} path="/" component={Home}/>
                    <Route path="/about" component={About}/>
                </Switch>
            </Suspense>
        </Router>
    );
}

export default App;
