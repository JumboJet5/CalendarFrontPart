import {CHANGE_USER_INFO, ERROR_ACTION, FETCH_ACTION} from '../constants'

export default function changeUserInfo(user, token) {
    let data = {
        firstName: user.firstName,
        lastName: user.lastName
    };
    return {
        type: FETCH_ACTION,
        fetchConfig: {
            path: `/user/me`,
            method: 'PUT',
            body: data,
            headers: {
                'Authorization': `Bearer ${token}`,
                'Access-Control-Allow-Origin': '*',
                'Content-Type': 'application/json'
            },
            success: (json) => ({
                type: CHANGE_USER_INFO,
                payload: {...json}
            }),
            failure: (error) => {
                console.log(error.message);
                return {type: ERROR_ACTION};
            }
        }
    };
}