import axios from 'axios';
import { LoginInfo } from '../types'

export const axiosInstance = axios.create({
     baseURL: 'http://localhost:8001'
})

export async function authenticate({email, password}: LoginInfo) {
    const config = {
        headers: {
            'Content-Type': 'application/json'
        }
    };
    const credentials = {email, password};

    return await axiosInstance.post('/users/login', credentials, config);
};

export function setTokenInterseptor(token: string) {
    saveToLocalStorage('token', token);

    // const interceptor = axiosInstance.interceptors.request.use(config => {
    //     config.headers.token = token;
    //     return config
    // })
    axiosInstance.interceptors.request.use(config => {
        config.headers.token = token;
        return config
    })
};

function saveToLocalStorage(fileName: any, data: any) {
    if(localStorage) localStorage[fileName] = data;
}

/*
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
        history.push("/charactercreation");

        dispatch(setUser(res))

    })
}).catch((error) => {
    console.error('Error:', error);
});
*/
