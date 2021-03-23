import React, { Component } from 'react';
import { LogBox } from 'react-native';
import { Root } from 'native-base';
import Navigator from './navigation/AppNavigation';

export default class App extends Component {
  constructor(props) {
    super(props);
    LogBox.ignoreLogs(['Setting a timer', 'getNode()']);
  }

  render() {
    return (
      <Root>
        <Navigator />
      </Root>
    );
  }
}
