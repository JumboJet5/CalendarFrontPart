import React, {Component} from 'react';
import PropTypes from 'prop-types';
import './css/UserInfo.css';
import './css/main.css';
import {connect} from 'react-redux';
import changeUserInfo from './actions/changeUserInfo';
import {bindActionCreators} from 'redux';
import Invite from "./Invite";

class UserInfo extends Component {
    constructor(props) {
        super(props);
        this.state = {
            editMode: false
        };
    }

    onEdit() {
        this.setState({editMode: true});
    }

    onSave() {
        let info = {
            firstName: document.getElementById('userFirstName').innerHTML,
            lastName: document.getElementById('userLastName').innerHTML
        };
        this.props.changeUserInfo(info, this.props.auth.token);
        this.setState({editMode: false});
    }

    onCancelEdit() {
        let email = document.getElementById('userEmail');
        let firsName = document.getElementById('userFirstName');
        let lastName = document.getElementById('userLastName');
        email.innerHTML = this.props.user.email;
        firsName.innerHTML = this.props.user.profile.firstName;
        lastName.innerHTML = this.props.user.profile.lastName;
        this.setState({editMode: false});
    }

    render() {
        console.log('hdb' + this.props.invites);
        let invates = this.props.invites.map((item, index) => {
            return (<Invite style={{}} invite={item} key={index}/>)
        });
        return (
            <div className='UserInfo' style={this.props.style}>
                <div className='inline'>
                    <label className='inline'>Email: </label>
                    <label id='userEmail' className='inline'>{this.props.user.email}</label>
                    <br/>
                    <label className='inline'>FirstName: </label>
                    <label id='userFirstName' className='inline'
                           contentEditable={this.state.editMode}>{this.props.user.profile.firstName}</label>
                    <br/>
                    <label className='inline'>LastName: </label>
                    <label id='userLastName' className='inline'
                           contentEditable={this.state.editMode}>{this.props.user.profile.lastName}</label>
                </div>
                <br/>
                <button
                    style={{display: !this.state.editMode ? 'inline' : 'none'}}
                    className='edit'
                    onClick={() => this.onEdit()}
                />
                <div style={{display: this.state.editMode ? 'block' : 'none'}}>
                    <button className='save' onClick={() => this.onSave()}/>
                    <button className='close' onClick={() => this.onCancelEdit()}/>
                </div>
                <div>
                    <h2>Invations</h2>
                    {invates}
                </div>
            </div>
        );
    }
}

UserInfo.propTypes = {
    user: PropTypes.object,
    au: PropTypes.object,
    invites: PropTypes.array,
    style: PropTypes.object,
    changeUserInfo: PropTypes.func
};

UserInfo.defaultProps = {
    style: {
        display: 'none'
    }
};

function mapStateToProps(state) {
    return {
        auth: state.auth,
        user: state.user,
        invites: state.invites
    }
}

function mapDispatchToProps(dispatch) {
    return {
        changeUserInfo: bindActionCreators(changeUserInfo, dispatch),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(UserInfo);
