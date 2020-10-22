import { Hero } from '../types';
import {axiosInstance} from './axiosConfig';

export function createHero(hero: Hero) {
    return axiosInstance.post('heroes/createHero', hero);
}
