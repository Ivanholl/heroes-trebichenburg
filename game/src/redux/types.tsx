import { Action } from 'redux';
import { ThunkAction } from 'redux-thunk';
import { User, Hero } from '../types'
import combinedReducers from './reducers';


export const SET_USER = 'SET_USER';
export const SET_IS_AUTHENTICATED = 'SET_IS_AUTHENTICATED';

export const SET_HERO = 'SET_HERO';


export type InitialUserState = {
    user: User,
    isAuthenticated: Boolean
}

export type InitialHeroState = {
    hero?: Hero
}

export type RootState = ReturnType<typeof combinedReducers>

export type MyAction = {
    type: String    
}

export type MyThunk<T = void> = ThunkAction<
    T,
    InitialUserState,
    unknown,
    Action<string>
>