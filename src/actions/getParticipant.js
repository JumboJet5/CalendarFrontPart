import {ERROR_ACTION, FETCH_ACTION, GET_PARTICIPANT} from '../constants';

export default function getParticipant(id, token) {
    return {
        type: FETCH_ACTION,
        fetchConfig: {
            path: `/event_participant/event/${id}`,
            method: 'GET',
            headers: {
                'Authorization': `Bearer ${token}`,
                'Access-Control-Allow-Origin': '*',
                'Content-Type': 'application/json'
            },
            success: (json) => ({
                type: GET_PARTICIPANT,
                payload: [...json]
            }),
            failure: (error) => {
                console.log(error.message);
                return {type: ERROR_ACTION};
            }
        }
    };
}