import {CHANGE_TASK, ERROR_ACTION, FETCH_ACTION} from '../constants'

export default function setDone(task, token) {
    let data = {
        text: task.text,
        done: true
    };
    return {
        type: FETCH_ACTION,
        fetchConfig: {
            path: `/todoitem/${task.id}`,
            method: 'PUT',
            body: data,
            headers: {
                'Authorization': `Bearer ${token}`,
                'Access-Control-Allow-Origin': '*',
                'Content-Type': 'application/json'
            },
            success: (json) => ({
                type: CHANGE_TASK,
                payload: {...json}
            }),
            failure: (error) => {
                console.log(error.message);
                return {type: ERROR_ACTION};
            }
        }
    };
}