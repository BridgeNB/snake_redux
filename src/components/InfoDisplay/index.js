import React, { Component } from 'react';
import Clock from '../Clock';

export class InfoDisplay extends Component {
    render() {
        return (
            <div className="info-display right-part" id="right-part">
                <Clock />
            </div>
        )
    }
}

export default InfoDisplay;