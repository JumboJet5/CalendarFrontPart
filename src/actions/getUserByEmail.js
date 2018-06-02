import {ERROR_NOT_FOUND_USER_BY_ID, FETCH_ACTION, GET_USER_BY_EMAIL} from '../constants'

export default function hetUserByEmail(email, token) {
    let params = {
        email: email
    };
    return {
        type: FETCH_ACTION,
        fetchConfig: {
            path: `/user`,
            method: 'GET',
            params: params,
            headers: {
                'Authorization': `Bearer ${token}`,
                'Access-Control-Allow-Origin': '*',
                'Content-Type': 'application/json'
            },
            success: (json) => ({
                type: GET_USER_BY_EMAIL,
                payload: {...json}
            }),
            failure: (error) => {
                console.log(error.message);
                return {type: ERROR_NOT_FOUND_USER_BY_ID};
            }
        }
    };
}