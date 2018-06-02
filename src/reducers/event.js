import {CHANGE_EVENT, GET_EVENT} from '../constants';

// const initialState = {};
const initialState = {
    title: '',
    description: '',
    startAt: '',
    finishAt: '',
    public: true,
    location: {
        latitude: 30,
        longitude: 50
    }
};

export default function event(state = initialState, action) {
    switch (action.type) {
        case CHANGE_EVENT:
            return {...action.payload};

        case GET_EVENT:
            console.log('reduser'+action.payload.event);
            console.log('reduser'+action.payload.event.id);
            return {...action.payload.event};

        default:
            return state;
    }
}