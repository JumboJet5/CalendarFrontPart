import React, {Component} from 'react';
import PropTypes from 'prop-types';
import './css/ToDoList.css';
import './css/main.css';
import ToDoTask from './ToDoTask';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import createTask from './actions/createTask';
import changeList from './actions/changeList';
import deleteList from './actions/deleteList';

class ToDoList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            createMode: false,
            editMode: false,
            showMode: false,
            list: []
        };
    }

    onCreateTask() {
        let task = {
            toDoListId: this.props.id,
            text: document.getElementById('newTaskDataText' + this.props.id).value
        };

        this.props.createTask(task, this.props.auth.token);
        this.setState({createMode: false});
    }

    onSaveList() {
        let temp = {...this.state.list};
        temp = {
            ...temp, ...{
                name: document.getElementById('listTitle').innerHTML
            }
        };

        this.setState({list: temp});
        this.props.changeList(temp, this.props.auth.token);
        this.setState({editMode: false});
    }

    showMode() {
        this.setState({showMode: true});
    }

    hideMode() {
        this.setState({showMode: false});
    }

    onCancelEdit() {
        let title = document.getElementById('listTitle');
        console.log(this);
        title.innerHTML = this.state.list.name;
        this.setState({editMode: false});
    }

    componentWillMount() {
        let id = this.props.id;
        let list = this.props.lists.find((item) => item.id === id);
        this.setState({list: list});
    }

    render() {
        // console.log(this.props);
        // console.log(this.state.list);
        // console.log(list);
        let tasks = this.state.list.items.map((task, index) => <ToDoTask
            key={index}
            task={task}
            id={task.id}
        />);
        return (
            <div className='ToDoList'>

                <h1 className='inner'
                    id='listTitle'
                    contentEditable={this.state.editMode}>{this.state.list.name}</h1>
                <br/>

                <div className='inner' style={{display: this.state.editMode ? 'block' : 'none'}}>
                    <button className='save inline' onClick={() => this.onSaveList()}/>
                    <button className='close inline' onClick={() => this.onCancelEdit()}/>
                </div>


                <div className='inner'>
                    <button className='edit inline' onClick={() => this.setState({editMode: true})}/>

                    <button className='close inline'
                            onClick={() => this.props.deleteList(this.props.id, this.props.auth.token)}/>

                    <button
                        style={{display: this.state.showMode ? 'inline-block' : 'none'}}
                        className='hide inline'
                        onClick={() => this.setState({showMode: false})}/>

                    <button
                        style={{display: this.state.showMode ? 'none' : 'inline-block'}}
                        className='show inline'
                        onClick={() => this.setState({showMode: true})}/>
                </div>
                <br/>
                <button
                    className='add'
                    onClick={() => this.setState({createMode: true})}
                    style={{display: this.state.createMode ? 'none' : 'block'}}/>

                <div className='inner' style={{display: this.state.createMode ? 'block' : 'none'}}>
                    <input
                        className='inline'
                        type='text'
                        name='newTaskDataText'
                        id={'newTaskDataText' + this.props.id}
                    />
                    <button className='add inline' onClick={() => this.onCreateTask()}/>
                    <button className='close inline' onClick={() => this.setState({createMode: false})}/>
                </div>

                <div style={{display: this.state.showMode ? 'block' : 'none'}}>
                    {tasks}
                </div>
            </div>
        );
    }
}

ToDoList.propsType = {
    id: PropTypes.number,
    lists: PropTypes.array,
    auth: PropTypes.object,
    createTask: PropTypes.func,
    changeList: PropTypes.func,
    deleteList: PropTypes.func
};


ToDoList.defaultProps = {
    id: 0,
    list: [],
    auth: {token:0},
    createTask: ()=>{},
    changeList: ()=>{},
    deleteList: ()=>{},
};

function mapStateToProps(state) {
    return {
        lists: state.lists,
        auth: state.auth
    }
}

function mapDispatchToProps(dispatch) {
    return {
        createTask: bindActionCreators(createTask, dispatch),
        changeList: bindActionCreators(changeList, dispatch),
        deleteList: bindActionCreators(deleteList, dispatch),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ToDoList);
