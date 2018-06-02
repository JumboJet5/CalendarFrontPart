import React, {Component} from 'react';
import PropTypes from 'prop-types';
import './css/main.css';
import './css/SignIn.css';
import login from './actions/login';
import bindActionCreators from 'redux/src/bindActionCreators';
import connect from 'react-redux/es/connect/connect';
import {push} from 'react-router-redux';
import {Redirect} from 'react-router-dom';
import Page from './Page';
import signup from './actions/signup';

class SignIn extends Component {
    forLogin() {
        let data = {
            email: document.getElementById('LoginEmail').value,
            password: document.getElementById('LoginPassword').value
        };
        this.props.login(data);
        // this.setState({editMode: false});
    }

    forSignup() {
        let data = {
            email: document.getElementById('SignUpEmail').value,
            password: document.getElementById('SignUpPassword').value,
            firstName: document.getElementById('SignUpFirstName').value,
            lastName: document.getElementById('SignUpLastName').value
        };
        this.props.signup(data);
        // this.setState({editMode: false});
    }

    render() {
        let component = (<div/>);
        if (this.props.auth.auth)
            component = (<Page level={this.props.match.params.eventLevel} id={this.props.match.params.id}/>);
        else component =
            (<div className='SignIn outer'>
                <div className='outer inner centered'>
                    <label className='inner'>Email</label>
                    <br/><input className='inner' type='text' name='LoginEmail' id={'LoginEmail'}/>
                    <br/><label className='inner'>Password</label>
                    <br/><input className='inner' type='password' name='LoginPassword' id={'LoginPassword'}/>
                    <br/>
                    <button className='inner' onClick={() => this.forLogin()}>login</button>
                </div>
                <p>Or</p>
                <div className='outer inner centered'>
                    <br/><label className='inner'>Email</label>
                    <br/><input className='inner' type='text' name='SignUpEmail' id={'SignUpEmail'}/>
                    <br/><label className='inner'>Password</label>
                    <br/><input className='inner' type='password' name='SignUpPassword' id={'SignUpPassword'}/>
                    <br/><label className='inner'>FirstName</label>
                    <br/><input className='inner' type='text' name='SignUpFirstName' id={'SignUpFirstName'}/>
                    <br/><label className='inner'>LastName</label>
                    <br/><input className='inner' type='text' name='SignUpLastName' id={'SignUpLastName'}/>
                    <br/>
                    <button className='inner' onClick={() => this.forSignup()}>signup</button>
                </div>
            </div>);
        return component;
    }
}

SignIn.propsType = {
    match: PropTypes.object,
    auth: PropTypes.object,
    login: PropTypes.func,
    signup: PropTypes.func,
    push: PropTypes.func,
};


SignIn.defaultProps = {
};

function mapStateToProps(state) {
    return {
        auth: state.auth
    }
}

function mapDispatchToProps(dispatch) {
    return {
        login: bindActionCreators(login, dispatch),
        signup: bindActionCreators(signup, dispatch),
        push: bindActionCreators(push, dispatch)
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(SignIn);