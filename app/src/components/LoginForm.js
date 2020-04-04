import React, {useState} from 'react';
import {Jumbotron, Form, Button} from 'react-bootstrap';
import {setUser} from '../redux/actions';
import {useDispatch} from 'react-redux'

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
        }).then((response) => response.json()).then((res) => {
            console.log('Success:', res);

            fetch(`http://localhost:8001/users/me`, {
                headers: {
                    'token': res.token
                }
            }).then((response) => response.json()).then((res) => {
                console.log('Success:', res);

                dispatch(setUser(res))

            })
        }).catch((error) => {
            console.error('Error:', error);
        });
    }

    // <Jumbotron>
    return (<Form>
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
        {/**}<Form.Group controlId="formBasicCheckbox">
            <Form.Check type="checkbox" label="Check me out"/>
        </Form.Group>*/}
        <Button variant="primary" onClick={() => login()}>
            Submit
        </Button>
    </Form>);
    // </Jumbotron>
}

export default LoginForm;
