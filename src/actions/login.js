import {CHANGE_USER_INFO, ERROR_ACTION, FETCH_ACTION, LOGIN} from '../constants';
export default function login(data) {
    return {
        type: FETCH_ACTION,
        fetchConfig: {
            path: `/user/signin`,
            method: 'POST',
            body: data,
            headers: {
                // 'Authorization': `Bearer ${token}`,
                'Access-Control-Allow-Origin': '*',
                'Content-Type': 'application/json'
            },
            success: (json1) => ({
                type: FETCH_ACTION,
                fetchConfig: {
                    path: `/user/me`,
                    method: 'GET',
                    headers: {
                        'Authorization': `Bearer ${json1.token}`,
                        'Access-Control-Allow-Origin': '*',
                        'Content-Type': 'application/json'
                    },
                    success: (json2) => dispatch => {
                        dispatch({
                            type: CHANGE_USER_INFO,
                            payload: {...json2}
                        });

                        dispatch({
                            type: LOGIN,
                            payload: {...json1}
                        });
                    },
                    failure: (error) => {
                        console.log(error.message);
                        return {type: ERROR_ACTION};
                    }
                }

            }),
            failure: (error) => {
                console.log(error.message);
                return {type: ERROR_ACTION};
            }
        }
    };
}