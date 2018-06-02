import {DELETE_LIST, ERROR_ACTION, FETCH_ACTION} from '../constants'

export default function deleteList(id, token) {
    return {
        type: FETCH_ACTION,
        fetchConfig: {
            path: `/todolist/${id}`,
            method: 'DELETE',
            headers: {
                'Authorization': `Bearer ${token}`,
                'Access-Control-Allow-Origin': '*',
                'Content-Type': 'application/json'
            },
            success: (json) => json ? ({
                type: DELETE_LIST,
                payload: id
            }) : ({}),
            failure: (error) => {
                console.log(error.message);
                return {type: ERROR_ACTION};
            }
        }
    };
}