import {CHANGE_USER_INFO} from '../constants';
const initialState = {};
// const initialState = {
//     id: 0,
//     email: 'email',
//     profile: {
//         firstName: 'first',
//         lastName: 'last'
//     }
// };

export default function auth(state = initialState, action) {
    switch (action.type) {
        case CHANGE_USER_INFO:
            console.log(action.payload);
            return {...action.payload};

        default:
            return state;
    }
}