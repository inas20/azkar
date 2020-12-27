import * as React from 'react';
import {View, Image, Dimensions} from 'react-native';
import { colors } from '../constants/colors';

const{height, width}= Dimensions.get('window')


export default SplashScreen =()=> {
    return (
        <View style={{flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor:colors.lightBlue}}>
          <Image source ={require("../assets/logo.png")} style={{width : width, height :height/3, margin :15}}/>
        </View>
      )
}
