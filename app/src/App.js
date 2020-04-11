import React, {Suspense, lazy} from 'react';
import {BrowserRouter as Router, Route, Switch, Redirect} from 'react-router-dom';
import { useSelector } from 'react-redux';

import './css/index.css';
import AccountWidget from './components/AccountWidget.js';
// import {axiosInstance, authenticate} from './api/axiosConfig.js';

const Home = lazy(() => import ('./routes/HomePage'));
const About = lazy(() => import ('./routes/HomePage'));
const CharacterCreation = lazy(() => import ('./routes/CharacterCreationPage'));

export default function App() {

    return (
        <>
        <Router>
            <Suspense fallback={<div> Loading ...</div>}>
                <AccountWidget />
                <Switch>
                    <Route exact={true} path="/" component={Home}/>
                    <Route path="/about" component={About}/>
                    <PrivateRoute path="/charactercreation">
                        <CharacterCreation />
                    </PrivateRoute>

                    <Redirect from='*' to='/' />
                </Switch>
            </Suspense>
        </Router>
        </>
    );
}

// A wrapper for <Route> that redirects to the login
// screen if you're not yet authenticated.
function PrivateRoute({ children, ...args }) {
    const isAuthenticated = useSelector(state => state.userReducer.isAuthenticated);

    return (
        <Route {...args} render={({ location }) =>
            isAuthenticated ? (children) : (<Redirect to={{ pathname: "/", state: { from: location }}} />)
        }/>
    );
};
