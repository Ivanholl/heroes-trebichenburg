import React, {useState} from 'react';
import {Jumbotron, Form, Button} from 'react-bootstrap';
import {setUser} from '../redux/actions';
import { useDispatch } from 'react-redux'

function LoginForm() {
    const [email, setEmail] = useState('');
    const [password, setPass] = useState('');
    const dispatch = useDispatch();

    function login() {
        let sendParams = {
            email,
            password
        }
        fetch('http://localhost:8001/users/login', {
            method: 'POST', // or 'PUT'
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(sendParams)
        })
        .then((response) => response.json())
        .then((res) => {
            console.log('Success:', res);

            fetch(`http://localhost:8001/users/me`, {
                headers: {
                    'token' : res.token
                }
            })
            .then((response) => response.json())
            .then((res) => {
                console.log('Success:', res);

                dispatch(setUser(res))

            })
        })
        .catch((error) => {
            console.error('Error:', error);
        });
    }

    return (<Jumbotron>
        <Form>
            <Form.Group controlId="formBasicEmail">
                <Form.Label>Email address</Form.Label>
                <Form.Control type="email" placeholder="Enter email" onChange={e => setEmail(e.target.value)}/>
                <Form.Text className="text-muted">
                    We'll never share your email with anyone else.
                </Form.Text>
            </Form.Group>

            <Form.Group controlId="formBasicPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control type="password" placeholder="Password" onChange={e => setPass(e.target.value)}/>
            </Form.Group>
            <Form.Group controlId="formBasicCheckbox">
                <Form.Check type="checkbox" label="Check me out"/>
            </Form.Group>
            <Button variant="primary" onClick={() => login()}>
                Submit
            </Button>
        </Form>
    </Jumbotron>);
}

export default LoginForm;
