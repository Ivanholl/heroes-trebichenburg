import { Dispatch } from 'redux';

import { authenticate, setTokenInterseptor } from '../api/axiosConfig';

import * as userApi from '../api/userApi';
import { MyThunk, SET_USER, SET_IS_AUTHENTICATED } from './types';


export function setUser(user: any) {
  return { type: SET_USER, user };
};
export function setIsAuthenticated(isAuthenticated: any) {
  return { type: SET_IS_AUTHENTICATED, isAuthenticated };
};



export const login = (email: String, pass: String): MyThunk | any => async (dispatch: Dispatch) => {
    let res = await authenticate(email, pass)

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
    let res = await userApi.me({});
    
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
        dispatch(setUser({}));

        return true;
    } else {
        return false;
    }
}