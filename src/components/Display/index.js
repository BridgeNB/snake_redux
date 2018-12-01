import React, { Component } from 'react';
import Clock from '../Clock';

export class Display extends Component {
    render() {
        return (
            <div className="display">
                <div className="show-area">
                    this is display
                    <Clock />
                </div>
            </div>
        )
    }
}

export default Display;

