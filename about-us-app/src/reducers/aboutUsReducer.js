import initialState from './initialState';
import { UPDATE_START } from '../actions/actionTypes';

export default function aboutUs(state = initialState.aboutUs, action) {
    let newState;
    switch (action.type) {
        case UPDATE_START:
            newState = action.aboutUs;
            return newState;
        default:
            return state;
    }
}