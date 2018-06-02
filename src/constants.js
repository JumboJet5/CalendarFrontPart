export const GLOBAL_LEVEL = 'GLOBAL';
export const DAY_LEVEL = 'DAILY';
export const EVENT_LEVEL = 'EVENT_BASED';
export const CHANGE_EVENT = 1;
export const SET_DONE_TASK = 2;
export const DELETE_TASK = 3;
export const GET_DAY = 4;
export const GET_EVENT = 5;
export const GET_GLOBAL = 6;
export const GET_EVENTS = 7;
export const CHANGE_TASK = 8;
export const CREATE_TASK = 9;
export const CHANGE_LIST = 10;
export const CREATE_LIST = 11;
export const DELETE_LIST = 12;
export const CREATE_EVENT = 13;
export const LOGIN = 14;
export const LOGOUT = 15;
export const CHANGE_USER_INFO = 16;
export const INVITE = 17;
export const GET_USER_BY_EMAIL = 18;
export const DELETE_EVENT = 19;
export const MY_INVATION = 20;
export const ACCEPT_INVATION = 21;
export const DECLINE_INVATION = 22;
export const GET_PARTICIPANT = 23;

export const FETCH_ACTION = 999;
export const ERROR_ACTION = -15;
export const  ERROR_NOT_FOUND_USER_BY_ID = -16;

export function addingInfo(event) {
    return event;
}

export function dateToString(date) {
    let year = date.getFullYear();
    let month = date.getMonth();
    let day = date.getDate();
    if (month < 10) month = '0' + month;
    if (day < 10) day = '0' + day;
    return year + '-' + month + '-' + day;
}

export function dateFromTo(date) {
    let to = (new Date(date));
    to.setDate(to.getDate() + 1);

    return {
        from: date,
        to: to.toISOString()
    }
}
// export const user = {
//     id: 0,
//     email: 'jdfniwbfu',
//     profile: {
//         firstName: 'asdf',
//         lastName: 'sdafasdfasd',
//         avatar: 'String',
//         telegramId: 'tring'
//     }
// };
// export let eventList = [
//     {
//         id: 0,
//         title: 'Daily Event',
//         eventLevel: DAY_LEVEL,
//         startAt: '2018-4-1',
//         finishAt: '2018-4-2',
//         location: {
//             latitude: 0,
//             longitude: 0,
//             address: '',
//             title: ''
//         },
//         creatorID: 0,
//         description: '...',
//         isPublic: true,
//         isRecurring: true,
//         isWholeDay: true,
//         recurringRule: {
//             id: 0,
//             weekDays: ['MONDAY'],
//             recurringType: 'DAILY',
//             interval: 0
//         },
//         createdAt: '2018-3-1'
//     },
//     {
//         id: 1,
//         title: 'Daily Event',
//         eventLevel: DAY_LEVEL,
//         startAt: '2018-4-1',
//         finishAt: '2018-4-2',
//         location: {
//             latitude: 0,
//             longitude: 0,
//             address: '',
//             title: ''
//         },
//         creatorID: 0,
//         description: '...',
//         isPublic: true,
//         isRecurring: true,
//         isWholeDay: true,
//         recurringRule: {
//             id: 0,
//             weekDays: ['MONDAY'],
//             recurringType: 'DAILY',
//             interval: 0
//         },
//         createdAt: '2018-3-1'
//     },
//     {
//         id: 2,
//         title: 'Daily Event',
//         eventLevel: DAY_LEVEL,
//         startAt: '2018-4-1',
//         finishAt: '2018-4-2',
//         location: {
//             latitude: 0,
//             longitude: 0,
//             address: '',
//             title: ''
//         },
//         creatorID: 0,
//         description: '...',
//         isPublic: true,
//         isRecurring: true,
//         isWholeDay: true,
//         recurringRule: {
//             id: 0,
//             weekDays: ['MONDAY'],
//             recurringType: 'DAILY',
//             interval: 0
//         },
//         createdAt: '2018-3-1'
//     },
//     {
//         id: 3,
//         title: 'Daily Event',
//         eventLevel: DAY_LEVEL,
//         startAt: '2018-4-1',
//         finishAt: '2018-4-2',
//         location: {
//             latitude: 0,
//             longitude: 0,
//             address: '',
//             title: ''
//         },
//         creatorID: 0,
//         description: '...',
//         isPublic: true,
//         isRecurring: true,
//         isWholeDay: true,
//         recurringRule: {
//             id: 0,
//             weekDays: ['MONDAY'],
//             recurringType: 'DAILY',
//             interval: 0
//         },
//         createdAt: '2018-3-1'
//     },
//     {
//         id: 4,
//         title: 'Daily Event',
//         eventLevel: DAY_LEVEL,
//         startAt: '2018-4-1',
//         finishAt: '2018-4-2',
//         location: {
//             latitude: 0,
//             longitude: 0,
//             address: '',
//             title: ''
//         },
//         creatorID: 0,
//         description: '...',
//         isPublic: true,
//         isRecurring: true,
//         isWholeDay: true,
//         recurringRule: {
//             id: 0,
//             weekDays: ['MONDAY'],
//             recurringType: 'DAILY',
//             interval: 0
//         },
//         createdAt: '2018-3-1'
//     },
//     {
//         id: 5,
//         title: 'Daily Event',
//         eventLevel: DAY_LEVEL,
//         startAt: '2018-4-1',
//         finishAt: '2018-4-2',
//         location: {
//             latitude: 0,
//             longitude: 0,
//             address: '',
//             title: ''
//         },
//         creatorID: 0,
//         description: '...',
//         isPublic: true,
//         isRecurring: true,
//         isWholeDay: true,
//         recurringRule: {
//             id: 0,
//             weekDays: ['MONDAY'],
//             recurringType: 'DAILY',
//             interval: 0
//         },
//         createdAt: '2018-3-1'
//     },
//     {
//         id: 6,
//         title: 'Daily Event',
//         eventLevel: DAY_LEVEL,
//         startAt: '2018-4-1',
//         finishAt: '2018-4-2',
//         location: {
//             latitude: 0,
//             longitude: 0,
//             address: '',
//             title: ''
//         },
//         creatorID: 0,
//         description: '...',
//         isPublic: true,
//         isRecurring: true,
//         isWholeDay: true,
//         recurringRule: {
//             id: 0,
//             weekDays: ['MONDAY'],
//             recurringType: 'DAILY',
//             interval: 0
//         },
//         createdAt: '2018-3-1'
//     },
//     {
//         id: 7,
//         title: 'Daily Event',
//         eventLevel: DAY_LEVEL,
//         startAt: '2018-4-1',
//         finishAt: '2018-4-2',
//         location: {
//             latitude: 0,
//             longitude: 0,
//             address: '',
//             title: ''
//         },
//         creatorID: 0,
//         description: '...',
//         isPublic: true,
//         isRecurring: true,
//         isWholeDay: true,
//         recurringRule: {
//             id: 0,
//             weekDays: ['MONDAY'],
//             recurringType: 'DAILY',
//             interval: 0
//         },
//         createdAt: '2018-3-1'
//     },
//     {
//         id: 8,
//         title: 'Daily Event',
//         eventLevel: DAY_LEVEL,
//         startAt: '2018-4-1',
//         finishAt: '2018-4-2',
//         location: {
//             latitude: 0,
//             longitude: 0,
//             address: '',
//             title: ''
//         },
//         creatorID: 0,
//         description: '...',
//         isPublic: true,
//         isRecurring: true,
//         isWholeDay: true,
//         recurringRule: {
//             id: 0,
//             weekDays: ['MONDAY'],
//             recurringType: 'DAILY',
//             interval: 0
//         },
//         createdAt: '2018-3-1'
//     },
//     {
//         id: 9,
//         title: 'Daily Event',
//         eventLevel: DAY_LEVEL,
//         startAt: '2018-4-1',
//         finishAt: '2018-4-2',
//         location: {
//             latitude: 0,
//             longitude: 0,
//             address: '',
//             title: ''
//         },
//         creatorID: 0,
//         description: '...',
//         isPublic: true,
//         isRecurring: true,
//         isWholeDay: true,
//         recurringRule: {
//             id: 0,
//             weekDays: ['MONDAY'],
//             recurringType: 'DAILY',
//             interval: 0
//         },
//         createdAt: '2018-3-1'
//     },
//     {
//         id: 10,
//         title: 'Daily Event',
//         eventLevel: DAY_LEVEL,
//         startAt: '2018-4-1',
//         finishAt: '2018-4-2',
//         location: {
//             latitude: 0,
//             longitude: 0,
//             address: '',
//             title: ''
//         },
//         creatorID: 0,
//         description: '...',
//         isPublic: true,
//         isRecurring: true,
//         isWholeDay: true,
//         recurringRule: {
//             id: 0,
//             weekDays: ['MONDAY'],
//             recurringType: 'DAILY',
//             interval: 0
//         },
//         createdAt: '2018-3-1'
//     },
//     {
//         id: 11,
//         title: 'Daily Event',
//         eventLevel: DAY_LEVEL,
//         startAt: '2018-4-1',
//         finishAt: '2018-4-2',
//         location: {
//             latitude: 0,
//             longitude: 0,
//             address: '',
//             title: ''
//         },
//         creatorID: 0,
//         description: '...',
//         isPublic: true,
//         isRecurring: true,
//         isWholeDay: true,
//         recurringRule: {
//             id: 0,
//             weekDays: ['MONDAY'],
//             recurringType: 'DAILY',
//             interval: 0
//         },
//         createdAt: '2018-3-1'
//     },
//     {
//         id: 12,
//         title: 'Daily Event',
//         eventLevel: DAY_LEVEL,
//         startAt: '2018-4-1',
//         finishAt: '2018-4-2',
//         location: {
//             latitude: 0,
//             longitude: 0,
//             address: '',
//             title: ''
//         },
//         creatorID: 0,
//         description: '...',
//         isPublic: true,
//         isRecurring: true,
//         isWholeDay: true,
//         recurringRule: {
//             id: 0,
//             weekDays: ['MONDAY'],
//             recurringType: 'DAILY',
//             interval: 0
//         },
//         createdAt: '2018-3-1'
//     },
//     {
//         id: 13,
//         title: 'Daily Event',
//         eventLevel: DAY_LEVEL,
//         startAt: '2018-4-1',
//         finishAt: '2018-4-2',
//         location: {
//             latitude: 0,
//             longitude: 0,
//             address: '',
//             title: ''
//         },
//         creatorID: 0,
//         description: '...',
//         isPublic: true,
//         isRecurring: true,
//         isWholeDay: true,
//         recurringRule: {
//             id: 0,
//             weekDays: ['MONDAY'],
//             recurringType: 'DAILY',
//             interval: 0
//         },
//         createdAt: '2018-3-1'
//     },
//     {
//         id: 14,
//         title: 'Daily Event',
//         eventLevel: DAY_LEVEL,
//         startAt: '2018-4-1',
//         finishAt: '2018-4-2',
//         location: {
//             latitude: 0,
//             longitude: 0,
//             address: '',
//             title: ''
//         },
//         creatorID: 0,
//         description: '...',
//         isPublic: true,
//         isRecurring: true,
//         isWholeDay: true,
//         recurringRule: {
//             id: 0,
//             weekDays: ['MONDAY'],
//             recurringType: 'DAILY',
//             interval: 0
//         },
//         createdAt: '2018-3-1'
//     },
//     {
//         id: 15,
//         title: 'Daily Event',
//         eventLevel: DAY_LEVEL,
//         startAt: '2018-4-1',
//         finishAt: '2018-4-2',
//         location: {
//             latitude: 0,
//             longitude: 0,
//             address: '',
//             title: ''
//         },
//         creatorID: 0,
//         description: '...',
//         isPublic: true,
//         isRecurring: true,
//         isWholeDay: true,
//         recurringRule: {
//             id: 0,
//             weekDays: ['MONDAY'],
//             recurringType: 'DAILY',
//             interval: 0
//         },
//         createdAt: '2018-3-1'
//     },
//     {
//         id: 16,
//         title: 'Daily Event',
//         eventLevel: DAY_LEVEL,
//         startAt: '2018-4-1',
//         finishAt: '2018-4-2',
//         location: {
//             latitude: 0,
//             longitude: 0,
//             address: '',
//             title: ''
//         },
//         creatorID: 0,
//         description: '...',
//         isPublic: true,
//         isRecurring: true,
//         isWholeDay: true,
//         recurringRule: {
//             id: 0,
//             weekDays: ['MONDAY'],
//             recurringType: 'DAILY',
//             interval: 0
//         },
//         createdAt: '2018-3-1'
//     },
//     {
//         id: 17,
//         title: 'Daily Event',
//         eventLevel: DAY_LEVEL,
//         startAt: '2018-4-1',
//         finishAt: '2018-4-2',
//         location: {
//             latitude: 0,
//             longitude: 0,
//             address: '',
//             title: ''
//         },
//         creatorID: 0,
//         description: '...',
//         isPublic: true,
//         isRecurring: true,
//         isWholeDay: true,
//         recurringRule: {
//             id: 0,
//             weekDays: ['MONDAY'],
//             recurringType: 'DAILY',
//             interval: 0
//         },
//         createdAt: '2018-3-1'
//     },
//     {
//         id: 18,
//         title: 'Daily Event',
//         eventLevel: DAY_LEVEL,
//         startAt: '2018-4-1',
//         finishAt: '2018-4-2',
//         location: {
//             latitude: 0,
//             longitude: 0,
//             address: '',
//             title: ''
//         },
//         creatorID: 0,
//         description: '...',
//         isPublic: true,
//         isRecurring: true,
//         isWholeDay: true,
//         recurringRule: {
//             id: 0,
//             weekDays: ['MONDAY'],
//             recurringType: 'DAILY',
//             interval: 0
//         },
//         createdAt: '2018-3-1'
//     },
//     {
//         id: 19,
//         title: 'Daily Event',
//         eventLevel: DAY_LEVEL,
//         startAt: '2018-4-1',
//         finishAt: '2018-4-2',
//         location: {
//             latitude: 0,
//             longitude: 0,
//             address: '',
//             title: ''
//         },
//         creatorID: 0,
//         description: '...',
//         isPublic: true,
//         isRecurring: true,
//         isWholeDay: true,
//         recurringRule: {
//             id: 0,
//             weekDays: ['MONDAY'],
//             recurringType: 'DAILY',
//             interval: 0
//         },
//         createdAt: '2018-3-1'
//     },
//     {
//         id: 20,
//         title: 'Daily Event',
//         eventLevel: DAY_LEVEL,
//         startAt: '2018-4-1',
//         finishAt: '2018-4-2',
//         location: {
//             latitude: 0,
//             longitude: 0,
//             address: '',
//             title: ''
//         },
//         creatorID: 0,
//         description: '...',
//         isPublic: true,
//         isRecurring: true,
//         isWholeDay: true,
//         recurringRule: {
//             id: 0,
//             weekDays: ['MONDAY'],
//             recurringType: 'DAILY',
//             interval: 0
//         },
//         createdAt: '2018-3-1'
//     },
//     {
//         id: 21,
//         title: 'Daily Event',
//         eventLevel: DAY_LEVEL,
//         startAt: '2018-4-1',
//         finishAt: '2018-4-2',
//         location: {
//             latitude: 0,
//             longitude: 0,
//             address: '',
//             title: ''
//         },
//         creatorID: 0,
//         description: '...',
//         isPublic: true,
//         isRecurring: true,
//         isWholeDay: true,
//         recurringRule: {
//             id: 0,
//             weekDays: ['MONDAY'],
//             recurringType: 'DAILY',
//             interval: 0
//         },
//         createdAt: '2018-3-1'
//     },
//     {
//         id: 22,
//         title: 'Daily Event',
//         eventLevel: DAY_LEVEL,
//         startAt: '2018-4-1',
//         finishAt: '2018-4-2',
//         location: {
//             latitude: 0,
//             longitude: 0,
//             address: '',
//             title: ''
//         },
//         creatorID: 0,
//         description: '...',
//         isPublic: true,
//         isRecurring: true,
//         isWholeDay: true,
//         recurringRule: {
//             id: 0,
//             weekDays: ['MONDAY'],
//             recurringType: 'DAILY',
//             interval: 0
//         },
//         createdAt: '2018-3-1'
//     },
//     {
//         id: 23,
//         title: 'Daily Event',
//         eventLevel: DAY_LEVEL,
//         startAt: '2018-4-1',
//         finishAt: '2018-4-2',
//         location: {
//             latitude: 0,
//             longitude: 0,
//             address: '',
//             title: ''
//         },
//         creatorID: 0,
//         description: '...',
//         isPublic: true,
//         isRecurring: true,
//         isWholeDay: true,
//         recurringRule: {
//             id: 0,
//             weekDays: ['MONDAY'],
//             recurringType: 'DAILY',
//             interval: 0
//         },
//         createdAt: '2018-3-1'
//     },
//     {
//         id: 24,
//         title: 'Daily Event',
//         eventLevel: DAY_LEVEL,
//         startAt: '2018-4-1',
//         finishAt: '2018-4-2',
//         location: {
//             latitude: 0,
//             longitude: 0,
//             address: '',
//             title: ''
//         },
//         creatorID: 0,
//         description: '...',
//         isPublic: true,
//         isRecurring: true,
//         isWholeDay: true,
//         recurringRule: {
//             id: 0,
//             weekDays: ['MONDAY'],
//             recurringType: 'DAILY',
//             interval: 0
//         },
//         createdAt: '2018-3-1'
//     },
//     {
//         id: 25,
//         title: 'Daily Event',
//         eventLevel: DAY_LEVEL,
//         startAt: '2018-4-1',
//         finishAt: '2018-4-2',
//         location: {
//             latitude: 0,
//             longitude: 0,
//             address: '',
//             title: ''
//         },
//         creatorID: 0,
//         description: '...',
//         isPublic: true,
//         isRecurring: true,
//         isWholeDay: true,
//         recurringRule: {
//             id: 0,
//             weekDays: ['MONDAY'],
//             recurringType: 'DAILY',
//             interval: 0
//         },
//         createdAt: '2018-3-1'
//     },
//     {
//         id: 26,
//         title: 'Daily Event',
//         eventLevel: DAY_LEVEL,
//         startAt: '2018-4-1',
//         finishAt: '2018-4-2',
//         location: {
//             latitude: 0,
//             longitude: 0,
//             address: '',
//             title: ''
//         },
//         creatorID: 0,
//         description: '...',
//         isPublic: true,
//         isRecurring: true,
//         isWholeDay: true,
//         recurringRule: {
//             id: 0,
//             weekDays: ['MONDAY'],
//             recurringType: 'DAILY',
//             interval: 0
//         },
//         createdAt: '2018-3-1'
//     },
//     {
//         id: 27,
//         title: 'Daily Event',
//         eventLevel: DAY_LEVEL,
//         startAt: '2018-4-1',
//         finishAt: '2018-4-2',
//         location: {
//             latitude: 0,
//             longitude: 0,
//             address: '',
//             title: ''
//         },
//         creatorID: 0,
//         description: '...',
//         isPublic: true,
//         isRecurring: true,
//         isWholeDay: true,
//         recurringRule: {
//             id: 0,
//             weekDays: ['MONDAY'],
//             recurringType: 'DAILY',
//             interval: 0
//         },
//         createdAt: '2018-3-1'
//     },
//     {
//         id: 28,
//         title: 'Daily Event',
//         eventLevel: DAY_LEVEL,
//         startAt: '2018-4-1',
//         finishAt: '2018-4-2',
//         location: {
//             latitude: 0,
//             longitude: 0,
//             address: '',
//             title: ''
//         },
//         creatorID: 0,
//         description: '...',
//         isPublic: true,
//         isRecurring: true,
//         isWholeDay: true,
//         recurringRule: {
//             id: 0,
//             weekDays: ['MONDAY'],
//             recurringType: 'DAILY',
//             interval: 0
//         },
//         createdAt: '2018-3-1'
//     }
// ];
// export let toDoListList = [
//     {
//         id: 0,
//         type: DAY_LEVEL,
//         name: 'ToDoList',
//         eventId: null,
//         forDay: '2018-4-1',
//         creatorId: 0,
//         items: [{
//             id: 0,
//             listId: 0,
//             title: 'title',
//             isDone: true
//         }]
//     },
//     {
//         id: 1,
//         type: DAY_LEVEL,
//         name: 'ToDoList',
//         eventId: null,
//         forDay: '2018-4-1',
//         creatorId: 0,
//         items: [
//             {
//                 id: 1,
//                 listId: 1,
//                 title: 'title',
//                 isDone: false
//             },
//             {
//                 id: 2,
//                 listId: 1,
//                 title: 'title',
//                 isDone: false
//             },
//             {
//                 id: 3,
//                 listId: 1,
//                 title: 'title',
//                 isDone: true
//             }]
//     },
//     {
//         id: 2,
//         type: EVENT_LEVEL,
//         name: 'ToDoList',
//         eventId: 2,
//         forDay: 0,
//         creatorId: 0,
//         items: [
//             {
//                 id: 4,
//                 listId: 2,
//                 title: 'title',
//                 isDone: true
//             },
//             {
//                 id: 5,
//                 listId: 2,
//                 title: 'title',
//                 isDone: true
//             }
//         ]
//     },
//     {
//         id: 3,
//         type: GLOBAL_LEVEL,
//         name: 'GlobalToDoList',
//         eventId: null,
//         forDay: null,
//         creatorId: 0,
//         items: []
//     },
//     {
//         id: 4,
//         type: EVENT_LEVEL,
//         name: 'ToDoList',
//         eventId: 4,
//         forDay: 0,
//         creatorId: 0,
//         items: [{
//             id: 6,
//             listId: 4,
//             title: 'title',
//             isDone: true
//         }]
//     },
//     {
//         id: 5,
//         type: DAY_LEVEL,
//         name: 'ToDoList',
//         eventId: null,
//         forDay: '2018-4-5',
//         creatorId: 0,
//         items: []
//     },
//     {
//         id: 6,
//         type: EVENT_LEVEL,
//         name: 'ToDoList',
//         eventId: 6,
//         forDay: 0,
//         creatorId: 0,
//         items: []
//     },
//     {
//         id: 7,
//         type: EVENT_LEVEL,
//         name: 'ToDoList',
//         eventId: 7,
//         forDay: 0,
//         creatorId: 0,
//         items: []
//     },
//     {
//         id: 8,
//         type: EVENT_LEVEL,
//         name: 'ToDoList',
//         eventId: 8,
//         forDay: 0,
//         creatorId: 0,
//         items: [
//             {
//                 id: 7,
//                 listId: 8,
//                 title: 'title',
//                 isDone: true
//             },
//             {
//                 id: 8,
//                 listId: 8,
//                 title: 'title',
//                 isDone: true
//             }
//         ]
//     },
//     {
//         id: 9,
//         type: EVENT_LEVEL,
//         name: 'ToDoList',
//         eventId: 9,
//         forDay: 0,
//         creatorId: 0,
//         items: []
//     },
//     {
//         id: 10,
//         type: EVENT_LEVEL,
//         name: 'ToDoList',
//         eventId: 10,
//         forDay: 0,
//         creatorId: 0,
//         items: []
//     },
//     {
//         id: 11,
//         type: EVENT_LEVEL,
//         name: 'ToDoList',
//         eventId: 11,
//         forDay: 0,
//         creatorId: 0,
//         items: []
//     }
// ];
// export let toDoTaskList = [
//     {
//         id: 0,
//         listId: 0,
//         text: 'title',
//         isDone: true
//     },
//     {
//         id: 1,
//         listId: 1,
//         text: 'title',
//         isDone: false
//     },
//     {
//         id: 2,
//         listId: 1,
//         text: 'title',
//         isDone: false
//     },
//     {
//         id: 3,
//         listId: 1,
//         text: 'title',
//         isDone: true
//     },
//     {
//         id: 4,
//         listId: 2,
//         text: 'title',
//         isDone: true
//     },
//     {
//         id: 5,
//         listId: 2,
//         text: 'title',
//         isDone: true
//     },
//     {
//         id: 6,
//         listId: 4,
//         text: 'title',
//         isDone: true
//     },
//     {
//         id: 7,
//         listId: 8,
//         text: 'title',
//         isDone: true
//     },
//     {
//         id: 8,
//         listId: 8,
//         text: 'title',
//         isDone: true
//     }
// ];

