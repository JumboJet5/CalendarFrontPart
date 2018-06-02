import {ERROR_ACTION, FETCH_ACTION, GET_GLOBAL, GLOBAL_LEVEL} from '../constants';

export default function getGlobal(token) {
    // let url = new URL('/todolist');
    // url.searchParams.append('type', GLOBAL_LEVEL);

    return {
        type: FETCH_ACTION,
        fetchConfig: {
            path: '/todolist',
            method: 'GET',
            params: {type: GLOBAL_LEVEL},
            headers: {
                'Authorization': `Bearer ${token}`,
                'Access-Control-Allow-Origin': '*',
                'Content-Type': 'application/json'
            },
            success: (json) => ({
                type: GET_GLOBAL,
                payload: [...json]
            }),
            failure: (error) => {
                console.log(error.message);
                return {type: ERROR_ACTION};
            }
        }
    };
}