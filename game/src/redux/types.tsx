import { Action } from 'redux';
import { ThunkAction } from 'redux-thunk';
import { User } from '../types'
import combinedReducers from './reducers';


export const SET_USER = 'SET_USER';
export const SET_IS_AUTHENTICATED = 'SET_IS_AUTHENTICATED';

export type InitialState = {
    user: User,
    isAuthenticated: Boolean
}
export type RootState = ReturnType<typeof combinedReducers>

export type MyAction = {
    type: String    
}

export type MyThunk<T = void> = ThunkAction<
    T,
    InitialState,
    unknown,
    Action<string>
>