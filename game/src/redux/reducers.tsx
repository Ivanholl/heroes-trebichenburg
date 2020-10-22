import {  combineReducers } from 'redux'

import { InitialUserState, InitialHeroState, SET_USER, SET_IS_AUTHENTICATED, SET_HERO } from './types';

const initialUserState: InitialUserState = {
    user: {
        username: '',
    },
    isAuthenticated: false,
}

function userReducer(state = initialUserState, action: any): InitialUserState {
    switch (action.type) {
        case SET_USER:
            return { ...state,  user: action.user }
        case SET_IS_AUTHENTICATED:
            return { ...state,  isAuthenticated: action.isAuthenticated }
        default:
            return state
    }
}

const initialHeroState: InitialHeroState = {
    hero: undefined
}

function heroReducer(state = initialHeroState, action: any): InitialHeroState {
    switch (action.type) {
        case SET_HERO:
            return { ...state,  hero: action.hero }
        default:
            return state
    }
}

const combinedReducers = combineReducers({
    userReducer,
    heroReducer
})

export default combinedReducers;
