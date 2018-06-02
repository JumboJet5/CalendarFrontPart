import {CHANGE_USER_INFO, ERROR_ACTION, FETCH_ACTION, LOGIN} from '../constants';
export default function signup(data) {
    return {
        type: FETCH_ACTION,
        fetchConfig: {
            path: `/user/signup`,
            method: 'POST',
            body: data,
            headers: {
                // 'Authorization': `Bearer ${token}`,
                'Access-Control-Allow-Origin': '*',
                'Content-Type': 'application/json'
            },
            success: (json) => (dispatch) => {
                dispatch({
                    type: CHANGE_USER_INFO,
                    payload: {...json.user}
                });
                console.log(1);
                dispatch({
                    type: LOGIN,
                    payload: {...{token: json.token}}
                });
                console.log(213516);

            },
            failure: (error) => {
                console.log(error.message);
                return {type: ERROR_ACTION};
            }
        }
    };
}