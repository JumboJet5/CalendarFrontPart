import {CHANGE_EVENT} from '../constants'

export default function changeEvent(event) {
    // let index = eventList.indexOf(eventList.find((item)=>item.id===event.id));
    // if (index >= 0) eventList[index] = event;
    return {
        type: CHANGE_EVENT,
        payload: event
    }
}