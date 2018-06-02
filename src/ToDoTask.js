import React, {Component} from 'react';
import './css/ToDoTask.css';
import './css/main.css';
import PropTypes from 'prop-types';
import connect from 'react-redux/es/connect/connect';
import bindActionCreators from 'redux/src/bindActionCreators';
import setDone from './actions/setDone'
import changeTask from './actions/changeTask';
import deleteTask from './actions/deleteTask';
// import edit from './img/Pencil-icon.png';

class ToDoTask extends Component {
    constructor(props) {
        super(props);
        this.state = {
            editMode: false
        };
    }

    onEdit() {
        this.setState({editMode: true});
    }

    onSave(task) {
        // task.title = document.getElementById('newData' + this.props.id).value;
        this.props.changeTask({...task, ...{text: document.getElementById('taskTitle').innerHTML}}, this.props.auth.token);
        this.setState({editMode: false});
    }

    onCancelEdit() {
        let title = document.getElementById('taskTitle');
        title.innerHTML = this.props.task.text;
        this.setState({editMode: false});
    }


    render() {
        // let id = this.props.id;
        // let task = this.props.tasks.find((item) => item.id === id);
        let task = this.props.task;
        return (
            <div className='ToDoTask'>
                {/*<img src=''/>*/}
                <div className='outer'>
                    <div className='inner'>
                        <label
                            className={task.done ? 'isDone' : 'isNotDone'}
                            contentEditable={this.state.editMode}
                            id='taskTitle'
                        >{task.text}</label>
                    </div>
                    <div className='inner' style={{display: this.state.editMode ? 'block' : 'none'}}>
                        <button className='inline save' onClick={() => this.onSave(task)}/>
                        <button className='inline close' onClick={() => this.onCancelEdit()}/>
                    </div>
                    <div className='inner'>
                        <button
                            className='inline check-mark'
                            onClick={() => this.props.setDone(task, this.props.auth.token)}/>
                        <button
                            className='edit inline'
                            onClick={() => this.onEdit()}/>
                        <button
                            className='inline close'
                            onClick={() => this.props.deleteTask(task.id, this.props.auth.token)}/>
                    </div>
                </div>
            </div>
        );
    }
}

ToDoTask.propTypes = {
    id: PropTypes.number,
    task: PropTypes.object,
    auth: PropTypes.object,
    setDone: PropTypes.func,
    changeTask: PropTypes.func,
    deleteTask: PropTypes.func,
};


ToDoTask.defaultProps = {
    id: 0,
    task: {},
    auth: {token:0},
    setDone: ()=>{},
    changeTask: ()=>{},
    deleteTask: ()=>{},
};

function mapStateToProps(state) {
    return {
        auth: state.auth
    }
}

function mapDispatchToProps(dispatch) {
    return {
        setDone: bindActionCreators(setDone, dispatch),
        changeTask: bindActionCreators(changeTask, dispatch),
        deleteTask: bindActionCreators(deleteTask, dispatch),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ToDoTask);
