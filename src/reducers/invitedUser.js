import {GET_USER_BY_EMAIL, ERROR_NOT_FOUND_USER_BY_ID} from '../constants';
const initialState = {
    id: 'BAD_ID'
};

export default function invitedUser(state = initialState, action) {
    switch (action.type) {
        case GET_USER_BY_EMAIL:
            return {...action.payload};

        case ERROR_NOT_FOUND_USER_BY_ID:
            return {...initialState};

        default:
            return state;
    }
}