import {axiosInstance} from './axiosConfig.js';

export function me(params) {
    return axiosInstance.get('users/me');
}
