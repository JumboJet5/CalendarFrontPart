import React, {Component} from 'react';
import PropTypes from 'prop-types';
import './css/OpenedEvent.css';
import './css/main.css';
import {connect} from 'react-redux';
import changeEvent from './actions/changeEvent';
import {bindActionCreators} from 'redux';
import Map from './Map';
// import Reminder from './Reminder';
import getUserByEmail from './actions/getUserByEmail';
import inviteUser from './actions/inviteUser';

class OpenedEvent extends Component {
    constructor(props) {
        super(props);
        this.state = {
            editMode: false,
            inviteMode: false,
            invateReady: !this.props.invitedUser.message,
            initialCenter: {
                lat: this.props.event.location.latitude,
                lng: this.props.event.location.longitude
            }
            // state: this.props.invitedUser.message !== null? this.props.inviteUser.message : 'OK!',
        };
    }

    componentDidMount() {
        let input = document.getElementById('inviteEmail');
        input.addEventListener('change', () => {
            this.props.getUser(input.value, this.props.auth.token);
            console.log(this.props.invitedUser);
        });
    }

    onSaveEvent() {
        let tempEvent = {...this.props.event};
        tempEvent.title = document.getElementById('newTitle').value;
        tempEvent.description = document.getElementById('newDescription').value;
        this.props.changeEvent(tempEvent, this.props.auth.token);
        this.setState({editMode: false});
    }

    onSendInvite() {
        this.props.inviteUser(this.props.event.id, this.props.invitedUser.id, this.props.auth.token);
        this.setState({inviteMode: false});
    }

    static getDerivedStateFromProps(props, state) {
        return {
            ...state, ...{
                invateReady: !props.invitedUser.message,
                location: {
                    lat: props.event.location.latitude,
                    lng: props.event.location.longitude
                }
            }
        }
    }

    render() {
        // const change = this.props.change;
        // let i = 0;
        let zoom = 13;
        console.log(this.props.event);
        let participant = this.props.participant.map((item, index) => (<p id={index}>{item.user.email}</p>));
        return (
            <div className='OpenedEvent outer'>
                <h1>Some event's info</h1>
                <div className='inner outer' style={{display: this.state.editMode ? 'none' : 'block'}}>
                    <p className='inner'>Title:</p><p className='inner'>{this.props.event.title}</p>
                    <br/><p className='inner'>Description:</p><p className='inner'>{this.props.event.description}</p>
                    <br/><p className='inner'>Start at:</p><p className='inner'>{this.props.event.startAt}</p>
                    <br/><p className='inner'>Finish at:</p><p className='inner'>{this.props.event.finishAt}</p>
                    <br/><p className='inner'>participant:</p>{participant}
                    <br/>
                    <div className='inner'><Map zoom={zoom} initialCenter={this.state.initialCenter}
                                                eventLocation={() => {
                                                }}/>
                    </div>
                    <br/>
                    <div className='inner'>
                        <button className={this.props.event.public ? '' : 'disabled'}
                                onClick={() => this.setState({inviteMode: true})}>invite
                        </button>
                        {/*<button onClick={() => this.setState({editMode: true})}>edit</button>*/}
                    </div>
                </div>
                <div className='inner outer'
                     style={{display: this.state.inviteMode && this.props.event.public ? 'block' : 'none'}}>
                    <p className='inner'>Email:</p>
                    <input className='inner' type='text' name='inviteEmail' id='inviteEmail'/>
                    <p>{this.props.invitedUser.message}</p>
                    <button style={this.state.invateReady ? {display: 'inline-block'} : {display: 'none'}}
                            onClick={() => this.onSendInvite()}>send
                    </button>
                    <button onClick={() => this.setState({inviteMode: false})}>cancel</button>
                </div>
            </div>
        );
    }
}

OpenedEvent.propsType = {
    auth: PropTypes.object,
    event: PropTypes.object,
    participant: PropTypes.array,
    invitedUser: PropTypes.object,
    changeEvent: PropTypes.func,
    getUser: PropTypes.func,
    inviteUser: PropTypes.func
};

function mapStateToProps(state) {
    return {
        auth: state.auth,
        event: state.event,
        participant: state.participant,
        invitedUser: state.invitedUser
    }
}

function mapDispatchToProps(dispatch) {
    return {
        changeEvent: bindActionCreators(changeEvent, dispatch),
        getUser: bindActionCreators(getUserByEmail, dispatch),
        inviteUser: bindActionCreators(inviteUser, dispatch),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(OpenedEvent);