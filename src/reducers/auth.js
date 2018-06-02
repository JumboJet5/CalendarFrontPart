import {LOGIN, LOGOUT} from '../constants';
const initialState = {auth: false};
// const initialState = {auth: true};

export default function auth(state = initialState, action) {
    switch (action.type) {
        case LOGIN:
            console.log(45);
            return {...{token: action.payload.token, auth: true}};

        case LOGOUT:
            return {auth: false};

        default:
            return state;
    }
}