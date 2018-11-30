import React, { Component } from 'react';
import * as FontAwesome from 'react-fontawesome';

export class Keyboard extends Component {
    render() {
        return (
            <div className="keyboard">
                <div className="left-console">
                    <div className="left-console-top">
                        <button><FontAwesome name="play" /></button>
                    </div>
                    <div className="left-console-bottom">
                        <ul>
                            <li>
                                <button>
                                    <FontAwesome name="undo" /> 
                                </button>
                            </li>
                            <li>
                                <button>
                                    <FontAwesome name="pause" />
                                </button>
                            </li>
                        </ul>
                    </div>
                </div>
                <div className="right-console">
                    <div className="top-button">
                        <button>
                            <FontAwesome name="caret-up" />
                        </button>
                    </div>
                    <div className="left-and-right">
                        <ul>
                            <li>
                                <button>
                                    <FontAwesome name="caret-left" />
                                </button>
                            </li>
                            <li>
                            </li>
                            <li>
                                <button>
                                    <FontAwesome name="caret-right" />
                                </button>
                            </li>
                        </ul>
                    </div>
                    <div className="bottom-button">
                        <button>
                            <FontAwesome name="caret-down" />
                        </button>
                    </div>
                </div>
            </div>
        )
    }
}

export default Keyboard;