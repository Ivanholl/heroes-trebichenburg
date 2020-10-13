import {  combineReducers } from 'redux'

import { InitialState, SET_USER, SET_IS_AUTHENTICATED } from './types';

const initialState: InitialState = {
    user: {
        username: '',
    },
    isAuthenticated: false,
}

function userReducer(state = initialState, action: any): InitialState {
    switch (action.type) {
        case SET_USER:
            return { ...state,  user: action.user }
        case SET_IS_AUTHENTICATED:
            return { ...state,  isAuthenticated: action.isAuthenticated }
        default:
            return state
    }
}

const combinedReducers = combineReducers({
    userReducer
})

export default combinedReducers;
