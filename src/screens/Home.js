import * as React from 'react';
import {Text, View, StyleSheet, Dimensions, ScrollView} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons'

import { WerdCard } from '../components/werdComponent';
import { HomeCard } from '../components/homeCard';
import NAMES_OF_ALLAH from '../DataSet/names_of_allah.json';

const{height, width}= Dimensions.get('window')


export default class HomeScreen extends React.Component {
  static navigationOptions = ({navigation}) => {
    return ({
      headerLeft: (<Text>أذكار المسلم</Text>),
      headerRight: null,
      headerTitle:"أذكار المسلم"
    })
  }

  constructor(props) {
    super(props)
    this.state={
      numberHolder : Math.floor(Math.random() * 100)
    }
  }

  componentDidMount(){
    this.setState({numberHolder: Math.floor(Math.random() * 100)})
  }

  render() {
    return (
      <ScrollView style={styles.container}>
        <View style={{backgroundColor:"#9AC4F8", height: height/3, margin:5}}>
            <Text style={styles.welcomeText}> السلام عليكم </Text>
            <View style={{flexDirection:'row'}}>
              <Ionicons name="md-sunny-outline" color={"yellow"} size={87} style={{margin :3}}/>
              <Text style={[styles.welcomeText,{marginTop:10}]}>ربنا يتقبل منا </Text>
            </View>
        </View>
        <View style={{flexDirection:'row',justifyContent:'space-between'}}>
          <WerdCard navigation={this.props.navigation} title={"المساء"}/>
          <WerdCard navigation={this.props.navigation} title={"الصباح"}/>
        </View>
        <HomeCard 
          title = {"من أسماء الله الحسنى"} 
          description = {NAMES_OF_ALLAH[this.state.numberHolder].name} 
          details = {NAMES_OF_ALLAH[this.state.numberHolder].meaning}
          transliation ={NAMES_OF_ALLAH[this.state.numberHolder].transliation}
        />
        <HomeCard title={"أشكرك يا ربي على نعمة"} description= {"السمع"}/>
      </ScrollView>
    );
  }
}

const styles= StyleSheet.create({
  container:{
   // flex: 1
  },
  welcomeText:{
    fontSize:50,
    color:'#FFF',
    marginTop:50,
    marginHorizontal:5
  }
})
