import React, { Component } from 'react';

class Counter extends Component {
  state = {
    count: 0
  };

  handleIncrement = () => this.setState(state => ({ count: state.count + 1 }));

  handleDecrement = () => this.setState(state => ({ count: state.count - 1 }));

  render() {
    return (
      this.props.children({
        count: this.state.count,
        increment: this.handleIncrement,
        decrement: this.handleDecrement,
      })
    );
  }
}

export default Counter;