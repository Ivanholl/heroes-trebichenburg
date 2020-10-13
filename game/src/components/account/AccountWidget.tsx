import React from 'react';
import {useDispatch, useSelector} from 'react-redux';

import * as UserActions from '../../redux/actions';
import {useHistory} from 'react-router-dom';
import { RootState } from '../../redux/types';

export default function AccountWidget() {
    const user = useSelector((state: RootState) => state.userReducer.user);
    const dispatch = useDispatch();
    const history = useHistory();

    async function logout () {
        let isLoggedOut = await dispatch(UserActions.logout())

        if(isLoggedOut) {
            history.push('/')
        }
    }

    if (user && user.username) {
        return (
            <div id="AccountWidget">
                <span>{user.username}</span>
                <button onClick={() => logout()}>Logout</button>
            </div>
        );
    } else {
        return(<></>)
    }
};
