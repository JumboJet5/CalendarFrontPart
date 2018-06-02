import {GET_EVENTS, CREATE_EVENT} from '../constants';

const initialState = [];

export default function event(state = initialState, action) {
    switch (action.type) {
        case GET_EVENTS:
            return [...action.payload];

        case CREATE_EVENT:
            // return state;
            return [...action.payload];

        default:
            return state;
    }
}