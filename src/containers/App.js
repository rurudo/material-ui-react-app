import React, { Component } from 'react';
import { Provider } from 'react-redux';
import Root from '../components/Root';

class App extends Component {
  render() {
    const { store } = this.props;
    return (
      <Provider store={store}>
        <Root />
      </Provider>
    );
  }
}

export default App;
