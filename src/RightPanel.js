import React, {Component} from 'react';
import PropTypes from 'prop-types';
import './css/RightPanel.css';
import './css/main.css';
import ToDoList from './ToDoList';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import createList from './actions/createList';
import {DAY_LEVEL, EVENT_LEVEL, GLOBAL_LEVEL} from './constants';
import UserInfo from './UserInfo';
import logout from './actions/logout';
import image from './img/Astrology-Fortune-Teller-icon.png'

class RightPanel extends Component {
    constructor(props) {
        super(props);
        this.state = {
            createMode: false,
            userInfo: false
        };
    }

    onCreateList() {
        let list = {
            id: -15,
            type: null,
            name: document.getElementById('newListDataText').value,
            eventId: null,
            forDay: null,
            owner: 0
        };

        switch (this.props.eventLevel) {
            case 'day':
                list.type = DAY_LEVEL;
                list.forDay = this.props.eventId;
                break;
            case 'event':
                list.type = EVENT_LEVEL;
                list.eventId = parseInt(this.props.eventId);
                break;
            default:
                list.type = GLOBAL_LEVEL;
                break;
        }
        this.props.createList(list, this.props.auth.token);
        this.setState({createMode: false});
    }

    render() {
        let toDoLists = this.props.lists.map((list, index) => <ToDoList key={index} id={list.id}/>);
        return (
            <div className='RightPanel'>
                <button onClick={() => this.props.logout()}>SignOut</button>
                <br/>
                <button
                    className='user'
                    onClick={() => this.setState({userInfo: !this.state.userInfo})}
                    style={{
                        backgroundColor: this.props.invites.length > 0 ? 'green' : 'transparent'
                    }}
                />
                <UserInfo style={{display: this.state.userInfo ? 'block' : 'none'}}/>
                <br/>
                <br/>
                <button
                    className='add'
                    style={{display: this.state.createMode ? 'none' : 'block'}}
                    onClick={() => this.setState({createMode: true})}/>
                <div style={{display: this.state.createMode ? 'block' : 'none'}}>
                    <input
                        className='inline'
                        type='text'
                        name='newListDataText'
                        id={'newListDataText'}
                    />
                    <button className='inline add' onClick={() => this.onCreateList()}/>
                    <button className='inline close' onClick={() => this.setState({createMode: false})}/>
                </div>
                {toDoLists}
            </div>
        );
    }
}

RightPanel.propsType = {
    eventLevel: PropTypes.string,
    eventId: PropTypes.string,
    lists: PropTypes.array,
    auth: PropTypes.object,
    invites: PropTypes.object,
    createList: PropTypes.func,
    logout: PropTypes.func
};

function mapStateToProps(state) {
    return {
        lists: state.lists,
        auth: state.auth,
        invites: state.invites
    }
}

function mapDispatchToProps(dispatch) {
    return {
        createList: bindActionCreators(createList, dispatch),
        logout: bindActionCreators(logout, dispatch)
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(RightPanel);
