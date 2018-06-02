import {ERROR_ACTION, EVENT_LEVEL, FETCH_ACTION, GET_EVENT} from '../constants';

export default function getEvent(id, token) {
    // let url = new URL('/todolist');
    // url.searchParams.append('eventId', id);

    return {
        type: FETCH_ACTION,
        fetchConfig: {
            path: `/event/${id}`,
            method: 'GET',
            headers: {
                'Authorization': `Bearer ${token}`,
                'Access-Control-Allow-Origin': '*',
                'Content-Type': 'application/json'
            },
            success: (json1) => ({
                type: FETCH_ACTION,
                fetchConfig: {
                    path: '/todolist',
                    method: 'GET',
                    params: {eventId: id, type: EVENT_LEVEL},
                    headers: {
                        'Authorization': `Bearer ${token}`,
                        'Access-Control-Allow-Origin': '*',
                        'Content-Type': 'application/json'
                    },
                    success: (json2) => {
                        console.log('event action' + json1);
                        console.log(json1.id);
                        return{
                        type: GET_EVENT,
                        payload: {...{event: json1}, ...{lists: json2}}
                    }},
                    failure: (error) => {
                        console.log(error.message);
                        return {type: ERROR_ACTION};
                    }
                }
            }),
            failure: (error) => {
                console.log(error.message);
                return {type: ERROR_ACTION};
            }
        }
    };
}