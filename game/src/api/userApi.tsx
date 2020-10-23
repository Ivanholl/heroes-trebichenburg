import { User } from '../types';
import {axiosInstance} from './axiosConfig';

export function me() {
    return axiosInstance.get('users/me');
}

export function editUser(user: User) {
    return axiosInstance.put('users/edit', user);
}
