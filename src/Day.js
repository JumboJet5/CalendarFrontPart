import React, {Component} from 'react';
import './css/Day.css';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {push} from 'react-router-redux';
import './css/main.css';
// import {dateToString} from './constants';


class Day extends Component {
    render() {
        let day = "";
        let style = "";
        switch (this.props.date.getDay()) {
            case 0:
                day = 'Sun';
                style = 'red';
                break;

            case 1:
                day = 'Mon';
                break;

            case 2:
                day = 'Tue';
                break;

            case 3:
                day = 'Wen';
                break;

            case 4:
                day = 'Thu';
                break;

            case 5:
                day = 'Fri';
                break;

            case 6:
                day = 'Sat';
                break;

            default:
                day = 'Err';
        }
        return (
            <div className={this.props.inThisMonth ? 'Day activeMonth' : 'Day otherMonth'} onClick={() => {
                this.props.push(`/day/${this.props.date.toISOString()}`);
            }}>
                <h1>{this.props.date.getDate()}</h1>
                <p className={style}>{' ' + day}</p>
                {/*<p>{this.props.date.toISOString()}</p>*/}
            </div>
        );
    }
}

function mapDispatchToProps(dispatch) {
    return {
        push: bindActionCreators(push, dispatch)
    }
}

export default connect(null, mapDispatchToProps)(Day);
