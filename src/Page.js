import React, {Component} from 'react';
import PropTypes from 'prop-types';
import './css/Page.css';
import './css/main.css';
import RightPanel from './RightPanel';
import LeftPanel from './LeftPanel';
import connect from 'react-redux/es/connect/connect';
import bindActionCreators from 'redux/src/bindActionCreators';
import getDay from './actions/getDay';
import getEvent from './actions/getEvent';
import getEvents from './actions/getEvents';
import getGlobal from './actions/getGlobal';
import logout from './actions/logout';
import myInvation from "./actions/myInvition";
import getParticipant from "./actions/getParticipant";

class Page extends Component {
    switchFunc(eventLevel, id) {
        switch (eventLevel) {
            case 'day':
                this.props.getDay(id, this.props.auth.token);
                this.props.getEvents(id, this.props.user.id, this.props.auth.token);
                break;
            case 'event':
                this.props.getParticipant(parseInt(id), this.props.auth.token);
                this.props.getEvent(parseInt(id), this.props.auth.token);
                break;
            default:
                this.props.getGlobal(this.props.auth.token);
                break;
        }
        this.props.myInvation(this.props.auth.token);
    }

    UNSAFE_componentWillMount() {
        this.switchFunc(this.props.level, this.props.id);
    }

    UNSAFE_componentWillUpdate(nextProps) {
        this.switchFunc(nextProps.level, nextProps.id);
    }

    render() {
        return (
            <div>
                <div className='Page'>
                    <LeftPanel
                        eventLevel={this.props.level}
                        eventId={this.props.id}
                    />
                    <RightPanel
                        eventLevel={this.props.level}
                        eventId={this.props.id}
                    />
                </div>
            </div>
        );
    }
}

Page.propsType = {
    id: PropTypes.string,
    level: PropTypes.string,
    auth: PropTypes.object,
    user: PropTypes.object,
    getDay: PropTypes.func,
    getEvent: PropTypes.func,
    getEvents: PropTypes.func,
    getGlobal: PropTypes.func,
    myInvation: PropTypes.func,
    getParticipant: PropTypes.func

};

function mapStateToProps(state) {
    return {
        auth: state.auth,
        user: state.user
    }
}


function mapDispatchToProps(dispatch) {
    return {
        getDay: bindActionCreators(getDay, dispatch),
        getEvent: bindActionCreators(getEvent, dispatch),
        getEvents: bindActionCreators(getEvents, dispatch),
        getGlobal: bindActionCreators(getGlobal, dispatch),
        myInvation: bindActionCreators(myInvation, dispatch),
        getParticipant: bindActionCreators(getParticipant, dispatch)
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Page);
