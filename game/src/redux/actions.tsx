import { Dispatch } from 'redux';

import { authenticate, setTokenInterseptor } from '../api/axiosConfig';
import { Hero, User } from '../types'
import * as userApi from '../api/userApi';
import * as heroesApi from '../api/heroesApi';

import { MyThunk, SET_USER, SET_IS_AUTHENTICATED, SET_HERO } from './types';


export function setUser(user: User) {
  return { type: SET_USER, user };
};
export function setIsAuthenticated(isAuthenticated: boolean) {
  return { type: SET_IS_AUTHENTICATED, isAuthenticated };
};


export const login = (email: String, password: String): MyThunk | any => async (dispatch: Dispatch) => {
    let res = await authenticate({email, password})

    if (res.data) {
        var { token } = res.data;
        setTokenInterseptor(token);
        let userInfo = await dispatch(getUserInfo())
        
        if (userInfo) {
            return true;
        } else {
            return false;
        }
    }
}

export const getUserInfo = (): MyThunk | any => async (dispatch: Dispatch) => {
    let res = await userApi.me();
    
    if (res.data) {
        dispatch(setUser(res.data));
        dispatch(setIsAuthenticated(true));
        return res.data
    } else {
        return false;
    }
}

export const checkIfAuth = (): MyThunk | any => async (dispatch: Dispatch) => {
   if (localStorage && localStorage.token) {
        setTokenInterseptor(localStorage.token);
        let userInfo = await dispatch(getUserInfo());
        
        if (userInfo) {
            return true;
        } else {
            return false;
        }
    } else {
        return false
    }
}

export const logout = (): MyThunk | any => async (dispatch: Dispatch) => {
    if (localStorage && localStorage.token) {
        setTokenInterseptor('');
        dispatch(setUser({username: ''}));

        return true;
    } else {
        return false;
    }
}


export const editUser = (user: User): MyThunk | any => async (dispatch: Dispatch) => {
    let res = await userApi.editUser(user);

    if (res) {
        
        return true;
    } else {
        return false;
    }
}

export function setHero(hero: Hero) {
    return { type: SET_HERO, hero };
}

export const createHero = (hero: Hero): MyThunk | any => async (dispatch: Dispatch) => {

    let res = await heroesApi.createHero(hero);
    if (res.data.hero) {
        dispatch(setHero(res.data));
        dispatch(setIsAuthenticated(true));
        debugger
        return res.data
    } else if(res.data.error) {
        return res.data.error
    } else {
        return false;
    }
};


export const getHero = (_id: String): MyThunk | any => async (dispatch: Dispatch) => {

    let res = await heroesApi.getHero(_id);

    debugger
    if (res.data) {
        dispatch(setHero(res.data));
        return res.data
    } else if(res.data.error) {
        return res.data.error
    } else {
        return false;
    }
};
