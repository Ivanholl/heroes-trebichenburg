import {axiosInstance} from './axiosConfig';

export function me(params: any) {
    return axiosInstance.get('users/me');
}
