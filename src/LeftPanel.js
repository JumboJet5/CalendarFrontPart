import React, {Component} from 'react';
import './css/LeftPanel.css';
import Calendar from './Calendar';
import OpenedDay from './OpenedDay';
import OpenedEvent from './OpenedEvent';
import './css/main.css';

class LeftPanel extends Component {
    constructor() {
        super();

    }

    render() {
        let elem = (<div/>);
        switch (this.props.eventLevel) {
            case 'day':
                elem = (<OpenedDay
                    dayId={this.props.eventId}
                />);
                break;
            case 'event':
                elem = (<OpenedEvent
                    EventId={parseInt(this.props.eventId)}
                />);
                break;
            default:
                elem = (<Calendar/>);
                break;
        }
        return <div className='LeftPanel'>
            {elem}
        </div>

    }
}

export default LeftPanel;
