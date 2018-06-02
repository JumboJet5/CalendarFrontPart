import {combineReducers} from 'redux'
import {routerReducer} from 'react-router-redux'
import event from './event'
import lists from './lists';
import eventList from './eventList';
import auth from './auth';
import user from './user';
import reminders from './reminders';
import invitedUser from "./invitedUser";
import invites from "./invites";
import participant from "./participant";

export default combineReducers({
    auth,
    user,
    lists,
    event,
    reminders,
    invites,
    invitedUser,
    eventList,
    participant,
    routerReducer
})