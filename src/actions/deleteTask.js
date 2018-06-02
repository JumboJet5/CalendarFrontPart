import {DELETE_TASK, ERROR_ACTION, FETCH_ACTION,} from '../constants'

export default function deleteTask(id, token) {
    return {
        type: FETCH_ACTION,
        fetchConfig: {
            path: `/todoitem/${id}`,
            method: 'DELETE',
            headers: {
                'Authorization': `Bearer ${token}`,
                'Access-Control-Allow-Origin': '*',
                'Content-Type': 'application/json'
            },
            success: (json) => json ? ({
                type: DELETE_TASK,
                payload: id
            }) : ({}),
            failure: (error) => {
                console.log(error.message);
                return {type: ERROR_ACTION};
            }
        }
    };
}