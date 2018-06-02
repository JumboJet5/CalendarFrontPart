import {
    CHANGE_LIST,
    CHANGE_TASK,
    CREATE_LIST,
    CREATE_TASK,
    DELETE_LIST,
    DELETE_TASK,
    GET_DAY,
    GET_EVENT,
    GET_GLOBAL, GLOBAL_LEVEL,
    SET_DONE_TASK
} from '../constants';

const initialState = [];
// const initialState = [{
//     id: 0,
//     eventId: 0,
//     forDay: "day",
//     type: GLOBAL_LEVEL,
//     name: 'name',
//     items: [
//         {
//             id: 0,
//             done: false,
//             text: 'text'
//         }
//     ]
// }];

export default function lists(state = initialState, action) {
    switch (action.type) {
        case GET_DAY:
            return [...action.payload];

        case GET_EVENT:
            return [...action.payload.lists];

        case GET_GLOBAL:
            return [...action.payload];

        case CHANGE_LIST:
            return state.map((item) => item.id === action.payload.id ? action.payload : item);

        case CREATE_LIST:
            state.push(action.payload);
            return [...state];

        case DELETE_LIST:
            return state.filter((item) => item.id !== action.payload);

        case CHANGE_TASK:
            let list = state.find((item) => item.id === action.payload.toDoListId);
            let task = list.items.find((item) => item.id === action.payload.id);
            task.done = action.payload.done;
            task.text = action.payload.text;
            return {...state};

            // return state.map((list) =>
            //     list.id === action.payload.toDoListId ?
            //         {...list, ...{items: list.items.map((item) => item.id === action.payload.id ? action.payload : item)}} :
            //         list);

        case SET_DONE_TASK:
            return state.map((list) => ({
                ...list, ...{
                    items: list.items.map((item) =>
                        item.id === action.payload ? {...item, ...{isDone: true}} : item)
                }
            }));

        case CREATE_TASK:
            let temp = state.find((list) => list.id === action.payload.toDoListId);
            temp.items.push(action.payload);
            return [...state];

        case DELETE_TASK:
            return state.map((list) => ({...list, ...{items: list.items.filter((it) => it.id !== action.payload)}}));

        default:
            return state;
    }
}