import * as React from 'react';
import {Text, View} from 'react-native';

export default class ShareScreen extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
        <Text>Share!</Text>
      </View>
    );
  }
}
