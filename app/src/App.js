import React, {Suspense, lazy} from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';

import './css/index.css';
import Header from './components/Header';;

const Home = lazy(() => import ('./routes/HomePage'));
const About = lazy(() => import ('./routes/HomePage'));
const CharacterCreation = lazy(() => import ('./routes/CharacterCreationPage'));

function App() {

    return (        
        <Router>
            <Suspense fallback={<div> Loading ...</div>}>
                <Switch>
                    <Route exact={true} path="/" component={Home}/>
                    <Route path="/charactercreation" component={CharacterCreation}/>
                    <Route path="/about" component={About}/>
                </Switch>
            </Suspense>
        </Router>
    );
}

export default App;
