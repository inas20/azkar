/* eslint-disable prettier/prettier */
/* eslint-disable react-native/no-inline-styles */
/* eslint-disable semi */
import * as React from 'react';
import {Text, View, TouchableOpacity} from 'react-native';

export default class HomeScreen extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
        <Text>Home!</Text>
      <TouchableOpacity onPress={() => this.props.navigation.navigate('Azkar')}>
        <Text>aZKAR</Text>
      </TouchableOpacity>
      </View>
    );
  }
}
