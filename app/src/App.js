import React, {Suspense, lazy} from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';

import './css/index.css';
import Header from './components/Header';;

const Home = lazy(() => import ('./routes/Home'));
const About = lazy(() => import ('./routes/About'));

function App() {

    return (
        <>
        <Header />

        <Router>
            <Suspense fallback={<div> Loading ...</div>}>
                <Switch>
                    <Route exact={true} path="/" component={Home}/>
                    <Route path="/about" component={About}/>
                </Switch>
            </Suspense>
        </Router>
        </>
    );
}

export default App;
