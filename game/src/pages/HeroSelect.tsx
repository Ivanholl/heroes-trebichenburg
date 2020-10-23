import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import CharCard from '../components/character/CharCard';
import { RootState } from '../redux/types';
import {Race, RaceName, User} from '../types';
import * as Actions from '../redux/actions';

export default function HeroSelect() {
    const user = useSelector((state: RootState) => state.userReducer.user);
    const dispatch = useDispatch();
    
    async function getHero(user: any) {
        let hero = await dispatch(Actions.getHero(user.heroId))
        debugger
    }

    useEffect(() => {
        getHero(user);
    }, []); 

    return (
        <div id="HeroSelect">
            <h2>Select Hero</h2>

            <div className="row">
                
            </div>
        </div>
    );
};
