import {MY_INVATION} from "../constants";
const initialState = [
    // {
    // id: 0,
    // event: {
    //     title: 'text'
    // },
    // sender: {
    //     email: 'email'
    // }
// }
];

export default function invites(state = initialState, action) {
    switch (action.type) {
        case MY_INVATION:
            return [...action.payload];

        default:
            return state;
    }
}