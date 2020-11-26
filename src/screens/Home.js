import * as React from 'react';
import {Text, View, TouchableOpacity, StyleSheet} from 'react-native';
import {ZekrCard}  from '../components/zekrComponent';

export default class HomeScreen extends React.Component {
  constructor(props) {
    super(props)
    this.state={
      count: 3,
      zekrVisibility: true
    }
  }

  showZekr =()=>{
    this.setState(prevState=>{
      return{count: prevState.count-1}
    },()=>{
      if(this.state.count ==0){
        this.setState({zekrVisibility: false})
      }
    })
  }

  render() {
    return (
      <View style={styles.container}>
        <TouchableOpacity style={styles.btnContainer} onPress={() => this.props.navigation.navigate('Azkar')}>
          <Text style={{color:'#FFF', padding: 15, fontSize:20}}>اذكار الصباح </Text>
        </TouchableOpacity>
        {this.state.zekrVisibility && <ZekrCard count={this.state.count} updateCount={()=> this.showZekr()}/>}
      </View>
    );
  }
}

const styles= StyleSheet.create({
  container:{
   // flex: 1
  },
  btnContainer:{
    borderRadius:25, 
    backgroundColor:'blue', 
    margin:15
  }
})
