import React, {Component} from 'react';

class Counter extends Component {
    // propTypes = {
    //     value: PropTypes.number.isRequired,
    //     onIncreaseClick: PropTypes.func.isRequired
    // }
    render() {
        const { value, onIncreaseClick } = this.props
        return (
            <div>
               <p>{value}</p>
                <button onClick={onIncreaseClick}>点击</button>
            </div>
        );
    }
}

export default Counter;
