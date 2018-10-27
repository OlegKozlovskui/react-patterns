import React, { Component } from 'react';

import Counter from './Counter';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Counter>
          {({ count, increment, decrement }) =>
            <div className="counter">
              <button type="button" className="btn btn-primary" onClick={increment}>+</button>
              <h3>{count}</h3>
              <button type="button" className="btn btn-warning" onClick={decrement}>-</button>
            </div>
          }
        </Counter>
      </div>
    );
  }
}

export default App;
