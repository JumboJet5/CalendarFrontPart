import {CHANGE_LIST, ERROR_ACTION, FETCH_ACTION} from '../constants'

export default function changeList(list, token) {
    let data = {
        name: list.name,
        forDay: list.forDay,
        eventId: list.eventId,
        type: list.type
    };
    return {
        type: FETCH_ACTION,
        fetchConfig: {
            path: `/todolist/${list.id}`,
            method: 'PUT',
            body: data,
            headers: {
                'Authorization': `Bearer ${token}`,
                'Access-Control-Allow-Origin': '*',
                'Content-Type': 'application/json'
            },
            success: (json) => ({
                type: CHANGE_LIST,
                payload: {...json}
            }),
            failure: (error) => {
                console.log(error.message);
                return {type: ERROR_ACTION};
            }
        }
    };
}