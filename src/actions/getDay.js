import {ERROR_ACTION, FETCH_ACTION, GET_DAY, dateToString, DAY_LEVEL} from '../constants';

export default function getDay(date, token) {
    // let url = new URL('/todolist');
    // url.searchParams.append('date', date);

    return {
        type: FETCH_ACTION,
        fetchConfig: {
            path: '/todolist',
            method: 'GET',
            params: {date: dateToString(new Date(date)), type: DAY_LEVEL},
            headers: {
                'Authorization': `Bearer ${token}`,
                'Access-Control-Allow-Origin': '*',
                'Content-Type': 'application/json'
            },
            success: (json) => ({
                type: GET_DAY,
                payload: [...json]
            }),
            failure: (error) => {
                console.log(error.message);
                return {type: ERROR_ACTION};
            }
        }
    };
}