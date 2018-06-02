import {CREATE_LIST, FETCH_ACTION, ERROR_ACTION} from '../constants'

export default function createList(list, token) {
    let data = {
        name: list.name,
        forDay: list.forDay,
        eventId: list.eventId,
        type: list.type
    };
    return {
        type: FETCH_ACTION,
        fetchConfig: {
            path: `/todolist`,
            method: 'POST',
            body: data,
            headers: {
                'Authorization': `Bearer ${token}`,
                'Access-Control-Allow-Origin': '*',
                'Content-Type': 'application/json'
            },
            success: (json) => ( {
                type: CREATE_LIST,
                payload: {...json}
            }),
            failure: (error) => {
                console.log(error.message);
                return {type: ERROR_ACTION};
            }
        }
    };
}