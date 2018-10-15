import React, { Component } from 'react';

class Counter extends Component {
  state = {
    count: 0
  };

  increment = () => this.setState(state => ({ count: state.count + 1 }));

  decrement = () => this.setState(state => ({ count: state.count - 1 }));

  render() {
    return (
      <div className="counter">
        <button type="button" className="btn btn-primary" onClick={this.increment}>+</button>
        <h3>{this.state.count}</h3>
        <button type="button" className="btn btn-warning" onClick={this.decrement}>-</button>
      </div>
    );
  }
}

export default Counter;