import {CREATE_TASK, ERROR_ACTION, FETCH_ACTION} from '../constants'

export default function createTask(task, token) {
    let data = {
        text: task.text,
        toDoListId: task.toDoListId
    };
    return {
        type: FETCH_ACTION,
        fetchConfig: {
            path: `/todoitem`,
            method: 'POST',
            body: data,
            headers: {
                'Authorization': `Bearer ${token}`,
                'Access-Control-Allow-Origin': '*',
                'Content-Type': 'application/json'
            },
            success: (json) => ({
                type: CREATE_TASK,
                payload: {...json}
            }),
            failure: (error) => {
                console.log(error.message);
                return {type: ERROR_ACTION};
            }
        }
    };
}