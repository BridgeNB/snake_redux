import React, { Component } from 'react';

const format = num => (num < 10? `0${num}`.split(''): `${num}`.split(''));

export class Clock extends Component {
    constructor() {
        super();
        this.state = {
            time_count: false,
            time: new Date()
        };
    }
    componentWillMount() {
        const clock = () => {
            const count = +this.timeInterval;
            this.timeInterval = setTimeout(() => {
                this.setState({
                    time: new Date(),
                    time_count: count
                });
                clock();
            }, 1000);
        };
        clock();
    }
    shouldComponentUpdate(nextProps, nextState) {
        if (this.state.time !== nextState.time) {
            return true;
        }
        return false;
    }
    componentWillUnmount() {
        clearTimeout(this.timeInterval);
    }
    render(){
        const now = this.state.time;
        const hour = format(now.getHours());
        const min  = format(now.getMinutes());
        const sec  = now.getSeconds() % 2;
        const currentTime = hour.concat(sec ? 'd': 'd_c', min);
        return (
            <div className="clock">
                <div className="clock-tag">
                    <p>Time: </p>
                </div>
                <div className="clock-number">
                    {currentTime.map((e, k) => <span className={`bg s_${e}`} key={k} />)}
                </div>
            </div>
        );
    }
}

export default Clock;