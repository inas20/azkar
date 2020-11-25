/* eslint-disable prettier/prettier */
/* eslint-disable react-native/no-inline-styles */
/* eslint-disable semi */
import * as React from 'react';
import {Text, View} from 'react-native';

export default class QuraanScreen extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
        <Text>القران!</Text>
      </View>
    );
  }
}
