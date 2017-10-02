import * as types from './actionTypes';

export function updateStart(clicked) {
	return {
		type: types.UPDATE_START,
		aboutUs: clicked
	}
}