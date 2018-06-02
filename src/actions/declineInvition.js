import {DECLINE_INVATION, ERROR_ACTION, FETCH_ACTION} from '../constants';

export default function acceptInvation(id, token) {
    return {
        type: FETCH_ACTION,
        fetchConfig: {
            path: `/invitation/${id}/declination`,
            method: 'POST',
            headers: {
                'Authorization': `Bearer ${token}`,
                'Access-Control-Allow-Origin': '*',
                'Content-Type': 'application/json'
            },
            success: (json) => ({
                type: DECLINE_INVATION,
                payload: {...json}
            }),
            failure: (error) => {
                console.log(error.message);
                return {type: ERROR_ACTION};
            }
        }
    };
}