import { getData } from './ejercicio-clase14-API.mjs';

export function solution() {
	return getData().then(movies => console.log(movies));
}

solution();

