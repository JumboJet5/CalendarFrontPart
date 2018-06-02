import React, {Component} from 'react';
import PropTypes from 'prop-types';
import './css/Invite.css';
import {bindActionCreators} from "redux";
import {connect} from "react-redux";
import './css/main.css';
import acceptInvition from "./actions/acceptInvition";
import declineInvition from "./actions/declineInvition";

class Invite extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className='Invite'>
               <p>{this.props.invite.sender.email}</p>
               <p>{this.props.invite.event.title}</p>
                <button onClick={()=>this.props.acceptInvite(this.props.invite.id, this.props.auth.token)}>accept</button>
                <button onClick={()=>this.props.declineInvite(this.props.invite.id, this.props.auth.token)}>decline</button>
            </div>
        );
    }
}

Invite.propTypes = {
     auth: PropTypes.object,
    invite: PropTypes.object,
    acceptInvite: PropTypes.func,
    declineInvite: PropTypes.func,
};

Invite.defaultProps = {

};

function mapStateToProps(state) {
    return {
        auth: state.auth
    }
}

function mapDispatchToProps(dispatch) {
    return {
        acceptInvite: bindActionCreators(acceptInvition, dispatch),
        declineInvite: bindActionCreators(declineInvition, dispatch),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Invite);
