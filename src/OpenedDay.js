import React, {Component} from 'react';
import PropTypes from 'prop-types';
import './css/OpenedDay.css';
import './css/main.css';
import Event from './Event';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import createEvent from './actions/createEvent';
import {push} from 'react-router-redux';
import Map from './Map';
import deleteEvent from "./actions/deleteEvent";

class OpenedDay extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isRecurring: false,
            createMode: false,
            location: {lat: 0, lng: 0}
        };
    }

    componentDidMount() {
        let checkbox = document.getElementById('isRecurring');
        checkbox.addEventListener('change', () => {
            if (checkbox.checked) {
                this.setState({isRecurring: true});
            } else {
                this.setState({isRecurring: false});
            }
        });
    }

    onSave() {
        let tempEvent = {
            title: document.getElementById('newEventTitle').value,
            startAt: document.getElementById('startDate').value,
            finishAt: document.getElementById('finishDate').value,
            location: {
                latitude: this.state.location.lat,
                longitude: this.state.location.lng
            },
            creatorId: this.props.user.id,
            description: document.getElementById('newEventDescription').value,
            isPublic: document.getElementById('isPublic').checked,
            isRecurring: document.getElementById('isRecurring').checked,
            isWholeDay: document.getElementById('isWholeDay').checked,
            recurringRule: {
                // id: 0,
                weekDays: [],
                recurringType: 'DAILY',
                interval: document.getElementById('interval').value
            },
            reminders: [{
                reminderTime: document.getElementById('reminder').value,
                message: document.getElementById('reminderMessage').value
            }],
            inviteUsers: []
        };
        this.props.createEvent(tempEvent, this.props.auth.token);
        this.setState({createMode: false});
    }

    forDelete(id) {
        this.props.deleteEvent(id, this.props.auth.token);
        this.props.push(`/day/${this.props.dayId}`);
    }

    render() {
        let dayId = this.props.dayId;
        let list = this.props.eventList.map((event, index) => {
            return <div><Event
                dayId={dayId}
                title={event.title}
                id={event.id}
                key={index}
            /> <button className='close' onClick={() => this.forDelete(event.id)}/>
            </div>
        });
        return (
            <div className='OpenedDay outer'>
                <div style={{display: this.state.createMode ? 'block' : 'none', width: '100%'}}>
                    <div className='outer'>
                        <div className='inner'>
                            <label>title</label>
                            <br/><input type='text' name='newTitle' id={'newEventTitle'}/>
                        </div>
                        <br/>
                        <div className='inner'>
                            <label>start</label>
                            <br/><input type='datetime-local' name='startAt' id='startDate'/>
                        </div>
                        {/*<br/>*/}
                        <div className='inner'>
                            <label>finish</label>
                            <br/><input type='datetime-local' name='finishAt' id='finishDate'/>
                        </div>
                        <br/>
                        <div className='inner'>
                            <label>reminder message</label>
                            <br/><input type='text' name='newTitle' id={'reminderMessage'}/>
                        </div>
                        {/*<br/>*/}
                        <div className='inner'>
                            <label>reminder</label>
                            <br/><input type='datetime-local' name='reminder' id='reminder'/>
                        </div>
                        <br/>
                        <div className='inner'>
                            <input type='checkbox' name='isPublic' id='isPublic'/>
                            <br/><label>isPublic</label>
                        </div>
                        {/*<br/>*/}
                        <div className='inner'>
                            <input type='checkbox' name='isWholeDay' id='isWholeDay'/>
                            <br/><label>isWholeDay</label>
                        </div>
                        {/*<br/>*/}
                        <div className='inner'>
                            <input type='checkbox' name='isRecurring' id='isRecurring'/>
                            <br/><label>isRecurring</label>
                        </div>
                        <br/>
                        <div style={{display: this.state.isRecurring ? 'block' : 'none'}}>
                            <label className='inner'>Interval</label>
                            <input className='inner' type='text' name='interval' id='interval'/>
                        </div>
                        <br/>
                        <div className='inner'>
                            <label>description</label>
                            <br/><textarea type='text' cols='40' rows='5' name='newDescription'
                                           id={'newEventDescription'}/>
                        </div>
                        <br/>
                        <div className='inner'><Map forCreate eventLocation={(location) => {
                            this.setState({location: location})
                        }}/></div>
                        <br/>
                        <div className='inner'>
                            <button onClick={() => this.onSave()}>save</button>
                            <button onClick={() => this.setState({createMode: false})}>cancel</button>
                        </div>
                    </div>
                </div>
                <button className='inner' style={{display: this.state.createMode ? 'none' : 'inline-block'}}
                        onClick={() => this.setState({createMode: true})}>addEvent
                </button>
                {list}
                {/*<Event*/}
                    {/*title='test'*/}
                    {/*id={0}*/}
                    {/*key={0}*/}
                {/*/>*/}
            </div>
        );
    }
}

OpenedDay.propsType = {
    eventList: PropTypes.object,
    auth: PropTypes.object,
    user: PropTypes.object,
    createEvent: PropTypes.func,
    deleteEvent: PropTypes.func,
    deleteEvent: PropTypes.func
};

function mapStateToProps(state) {
    return {
        eventList: state.eventList,
        auth: state.auth,
        user: state.user
    }
}

function mapDispatchToProps(dispatch) {
    return {
        createEvent: bindActionCreators(createEvent, dispatch),
        deleteEvent: bindActionCreators(deleteEvent, dispatch),
        push: bindActionCreators(push, dispatch)
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(OpenedDay);