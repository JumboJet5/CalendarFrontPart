import React, {Component} from 'react';
import './css/Event.css';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {push} from 'react-router-redux';
import deleteEvent from './actions/deleteEvent';
import './css/main.css';

class Event extends Component {
    forDelete() {
        this.props.deleteEvent(this.props.id, this.props.auth.token);
        this.props.push(`/day/${this.props.dayId}`);
    }

    render() {
        return (
            <div className='Event' onClick={() => {
                this.props.push(`/event/${this.props.id}`);
            }}>
                <p>{this.props.title}</p>
            </div>
        );
    }
}

function mapStateToProps(state) {
    return {
        auth: state.auth
    }
}

function mapDispatchToProps(dispatch) {
    return {
        push: bindActionCreators(push, dispatch),
        deleteEvent: bindActionCreators(deleteEvent, dispatch)
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Event);
