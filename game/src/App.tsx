import React, {Suspense, lazy} from 'react';
import {BrowserRouter as Router, Route, Switch, Redirect} from 'react-router-dom';
import { useSelector } from 'react-redux';

import './styles/index.css';
import AccountWidget from './components/account/AccountWidget';
import { RootState } from './redux/types';


const Home = lazy(() => import ('./pages/Home'));
const CharacterCreation = lazy(() => import ('./pages/CharCreatePage'));
const HeroSelect = lazy(() => import('./pages/HeroSelect') );

export default function App() {
    return (
        <>
        <Router>
            <Suspense fallback={<div> Loading ...</div>}>
                <AccountWidget />
                <Switch>
                    <Route exact={true} path="/" component={Home}/>
                    <PrivateRoute path="/charactercreation">
                        <CharacterCreation />
                    </PrivateRoute>
                    <PrivateRoute path="/selectHero">
                        <HeroSelect />
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
function PrivateRoute({ children, ...args }: any) {  
    const isAuthenticated = useSelector((state: RootState) => state.userReducer.isAuthenticated || false);
    
    return (
        <Route {...args} render={({ location }) =>
            isAuthenticated ? (children) : (<Redirect to={{ pathname: "/", state: { from: location }}} />)
        }/>
    );
};
