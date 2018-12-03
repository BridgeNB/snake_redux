import React, { Component } from 'react';
import GameDisplay from '../GameDisplay';
import InfoDisplay from '../InfoDisplay';

export class Display extends Component {
    render() {
        return (
            <div className="display">
                <div className="show-area">
                    <GameDisplay />
                    <InfoDisplay />
                </div>
            </div>
        )
    }
}

export default Display;

