import React, {Component} from 'react';
import './css/Calendar.css';
import './css/main.css';
import Day from './Day';

class Calendar extends Component {

    static getDayList(year, month) {
        let list = [];
        let tempDate = new Date(year, month, 1, 0, 0, 0, 0);
        tempDate.setDate(tempDate.getDate() - tempDate.getDay() + 1);
        for (let i = 0; i < 42; i++) {
            list.push(new Date(tempDate));
            tempDate.setDate(tempDate.getDate() + 1);
        }
        return list;
    }

    createMonth() {
        let d = new Date();
        let list = Calendar.getDayList(d.getFullYear(), d.getMonth());
        let weeks = [];
        weeks[0] = [];
        let count = 0;
        for (let i = 0; i < list.length; i++) {
            weeks[count].push(list[i]);
            if (list[i].getDay() === 0 && list.length - i > 1) {
                count++;
                weeks[count] = [];
            }
        }
        weeks = weeks.map((week, index) => {
            return this.createWeek(week, index)
        });
        return (
            <div className='Month'>
                {weeks}
            </div>
        )
    }

    createWeek(list, key) {
        const thisMonth = (new Date()).getMonth();
        return <div className='Week' key={'week' + key.toString()}>
            {list.map((item, index) => {
                return <Day
                    inThisMonth={item.getMonth() === thisMonth}
                    date={item}
                    key={'day' + index.toString()}
                />
            })}
        </div>
    }

    render() {
        return (
            <div className='Calendar'>
                {this.createMonth()}
            </div>
        );
    }
}

export default Calendar;
