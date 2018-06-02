import {GET_EVENTS, dateFromTo, ERROR_ACTION, FETCH_ACTION} from '../constants';

export default function getEvents(date, user, token) {
    // let url = new URL('/event');
    let startFinish = dateFromTo(date);
    // url.searchParams.append('from', startFinish.from);
    // url.searchParams.append('to', startFinish.to);
    // url.searchParams.append('userId', user);

    return {
        type: FETCH_ACTION,
        fetchConfig: {
            path: '/event',
            method: 'GET',
            params: {from: startFinish.from, to: startFinish.to, userId: user},
            headers: {
                'Authorization': `Bearer ${token}`,
                'Access-Control-Allow-Origin': '*',
                'Content-Type': 'application/json'
            },
            success: (json) => ({
                type: GET_EVENTS,
                payload: [...json]
            }),
            failure: (error) => {
                console.log(error.message);
                return {type: ERROR_ACTION};
            }
        }
    };
}