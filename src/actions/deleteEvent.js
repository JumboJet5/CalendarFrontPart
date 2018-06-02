import {DELETE_EVENT, ERROR_ACTION, FETCH_ACTION} from '../constants'

export default function deleteEvent(id, token) {
    return {
        type: FETCH_ACTION,
        fetchConfig: {
            path: `/event/${id}`,
            method: 'DELETE',
            headers: {
                'Authorization': `Bearer ${token}`,
                'Access-Control-Allow-Origin': '*',
                'Content-Type': 'application/json'
            },
            success: (json) => ({
                type: DELETE_EVENT,
                payload: {...json}
            }),
            failure: (error) => {
                console.log(error.message);
                return {type: ERROR_ACTION};
            }
        }
    };
}