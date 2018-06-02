import {ERROR_ACTION, FETCH_ACTION, INVITE} from '../constants'

export default function invite(eventId, userId, token) {
    let data = {
        userIds: [userId],
        eventId: eventId
    };
    return {
        type: FETCH_ACTION,
        fetchConfig: {
            path: `/invitation`,
            method: 'POST',
            body: data,
            headers: {
                'Authorization': `Bearer ${token}`,
                'Access-Control-Allow-Origin': '*',
                'Content-Type': 'application/json'
            },
            success: (json) => ({
                type: INVITE,
                payload: {...json}
            }),
            failure: (error) => {
                console.log(error.message);
                return {type: ERROR_ACTION};
            }
        }
    };
}