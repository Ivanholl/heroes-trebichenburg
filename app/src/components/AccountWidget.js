import React from 'react';
import {useDispatch, useSelector} from 'react-redux';

import * as UserActions from '../redux/actions';
// import {useHistory} from 'react-router-dom';

export default function AccountWidget() {
    const user = useSelector(state => state.userReducer.user);
    const dispatch = useDispatch();

    function logout () {
        dispatch(UserActions.logout())
    }

    return (
    <div id="AccountWidget">
        {user.username &&
            <>
                <span>{user.username}</span>
                <button onClick={() => logout()}>Logout</button>            
            </>
        }
    </div>
    );
};
