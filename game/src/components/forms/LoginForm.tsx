import React, {useState, useEffect} from 'react';
import {Form, Button} from 'react-bootstrap';
import {useDispatch, useSelector} from 'react-redux';

import * as UserActions from '../../redux/actions';
import {useHistory} from 'react-router-dom';
import { RootState } from '../../redux/types';


export default function LoginForm() {
    const [email, setEmail] = useState('');
    const [password, setPass] = useState('');
    const history = useHistory();
    const dispatch = useDispatch();
    const isAuthenticated = useSelector((state: RootState) => state.userReducer.isAuthenticated);

    async function login() {
        let res = await dispatch(UserActions.login(email, password))
        if(res) {
            history.push("/charactercreation");
        }
    }
    async function checkIfAuth() {
            let isAuth = await dispatch(UserActions.checkIfAuth())
            if(isAuth === true) {
                history.push("/charactercreation")
            }  
    }
    useEffect(() => {
        if (!isAuthenticated) {
            checkIfAuth()
        }
    })

    return (<Form>
        <h3>Login</h3>
        <Form.Group controlId="formBasicEmail">
            <Form.Label>
                <svg viewBox="0 0 20 20">
                    <path d="M0,20 a10,8 0 0,1 20,0z M10,0 a4,4 0 0,1 0,8 a4,4 0 0,1 0,-8"></path>
                </svg>
            </Form.Label>
            <Form.Control type="email" placeholder="Enter email" onChange={e => setEmail(e.target.value)}/>
        </Form.Group>

        <Form.Group controlId="formBasicPassword">
            <Form.Label>
                <svg viewBox="0 0 20 20">
                    <path d="M0,20 20,20 20,8 0,8z M10,13 10,16z M4,8 a6,8 0 0,1 12,0"></path>
                </svg>
            </Form.Label>
            <Form.Control type="password" placeholder="Password" onChange={e => setPass(e.target.value)}/>
        </Form.Group>
        <Button variant="primary" onClick={() => login()}>Submit</Button>
    </Form>);
};
