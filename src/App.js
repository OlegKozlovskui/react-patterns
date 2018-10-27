import React, { Component } from 'react';

import Tabs from './Tabs';

class App extends Component {
  render() {
    return (
      <Tabs>
        <Tabs.Tab title="Tab 1">
          1Lorem ipsum dolor sit amet, illud maluisset philosophia vel ea, te mea duis partem, movet exerci id eum.
        </Tabs.Tab>
        <Tabs.Tab title="Tab 2">
          2Lorem ipsum dolor sit amet, illud maluisset philosophia vel ea, te mea duis partem, movet exerci id eum.
        </Tabs.Tab>
        <Tabs.Tab title="Tab 3">
          3Lorem ipsum dolor sit amet, illud maluisset philosophia vel ea, te mea duis partem, movet exerci id eum.
        </Tabs.Tab>
      </Tabs>
    );
  }
}

export default App;
