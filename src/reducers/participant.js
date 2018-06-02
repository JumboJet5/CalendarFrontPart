import {GET_PARTICIPANT} from '../constants';
const initialState = [];

export default function participant(state = initialState, action) {
    switch (action.type) {
        case GET_PARTICIPANT:
            return [...action.payload];

        default:
            return state;
    }
}