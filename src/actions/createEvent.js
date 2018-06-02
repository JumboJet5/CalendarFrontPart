import {CREATE_EVENT, ERROR_ACTION, FETCH_ACTION} from '../constants'

export default function createEvent(event, token, date) {
    let data = {
        title: event.title,
        startAt: event.startAt,
        finishAt: event.finishAt,
        location: event.location,
        description: event.description,
        public: event.isPublic,
        recurring: event.isRecurring,
        wholeDay: event.isWholeDay,
        reminders: event.reminders,
        inviteUsers: [],
        creatorId: event.creatorId,
        recurringRule: event.recurringRule
    };
    return {
        type: FETCH_ACTION,
        fetchConfig: {
            path: `/event`,
            method: 'POST',
            body: data,
            headers: {
                'Authorization': `Bearer ${token}`,
                'Access-Control-Allow-Origin': '*',
                'Content-Type': 'application/json'
            },
            success: (json) => date === null ? ({
                type: CREATE_EVENT,
                payload: {...json}
            }) : ({}),
            failure: (error) => {
                console.log(error.message);
                return {type: ERROR_ACTION};
            }
        }
    };
}