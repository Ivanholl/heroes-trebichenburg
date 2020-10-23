import { Hero } from '../types';
import {axiosInstance} from './axiosConfig';

export function createHero(hero: Hero) {
    return axiosInstance.post('heroes/createHero', hero);
}

export function getHero(_id: String) {
    return axiosInstance.post('heroes/getHero', {_id});
}