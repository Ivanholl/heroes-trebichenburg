import {axiosInstance} from './axiosConfig';

export function me() {
    return axiosInstance.get('users/me');
}
