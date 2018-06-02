import {ERROR_ACTION, FETCH_ACTION, MY_INVATION} from '../constants';

export default function myInvition(token) {
    return {
        type: FETCH_ACTION,
        fetchConfig: {
            path: '/invitation/me',
            method: 'GET',
            params: {},
            headers: {
                'Authorization': `Bearer ${token}`,
                'Access-Control-Allow-Origin': '*',
                'Content-Type': 'application/json'
            },
            success: (json) => ({
                type: MY_INVATION,
                payload: [...json.content]
            }),
            failure: (error) => {
                console.log(error.message);
                return {type: ERROR_ACTION};
            }
        }
    };
}