import React, { Component } from 'react';

export class GameDisplay extends Component {
    constructor(props) {
        super(props)
        this.state = {
            row: 0,
            column: 0
        }
    }
    resetSize = () => {
        const height = this.divElement.clientHeight;
        const width  = this.divElement.clientWidth;
        console.log(height, width);
        const row    = Math.floor(width / 16);
        const column = Math.floor(height / 16);
        console.log(row, column);
        this.setState({ row, column });
    }
    createTable = () => {
        let cells = [];
        let counts = 0;
        for(let i = 0; i < this.state.row; i++) {
            for(let j = 0; j < this.state.column; j++) {
                cells.push(<div className='cell' key={counts++} />);
            }
        }
        return cells;
    }
    componentDidMount() {
        this.resetSize();
    }
    render() {
        return (
            <div className="game-display left-part"
                ref={
                    (divElement) => {this.divElement = divElement}
                }>
                {this.createTable()}
            </div>
        )
    }
}

export default GameDisplay;