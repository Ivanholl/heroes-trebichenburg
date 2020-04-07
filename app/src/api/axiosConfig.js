import axios from 'axios';

export const axiosInstance  axios({
     baseURL: 'http://localhost:8001'
})

export function authenticate(email, password) {
    const config = {
        headers: {
            'Content-Type': 'application/json'
        }
    };
    const credentials = {email, password};

    return axiosInstance.post('/users/login', credentials, config);
};

export function setTokenInterseptor(token) {
    const interceptor = axiosInstance.interceptors.request.use(config => {
        config.headers.token = 'token';
        return config
    })
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
        history.push("/charactercreation");

        dispatch(setUser(res))

    })
}).catch((error) => {
    console.error('Error:', error);
});
}
