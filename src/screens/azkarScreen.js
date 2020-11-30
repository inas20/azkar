import * as React from 'react';
import {Text, View, TouchableOpacity, StyleSheet, FlatList} from 'react-native';
import { v4 as uuidv4 } from 'uuid';
import { ZekrCard } from '../components/zekrComponent';
import AZKAR from '../DataSet/azkar.json';

export default class AzkarScreen extends React.Component {
  constructor(props) {
    super(props)
    this.state={
      azkar: [],
    }
  }

  componentDidMount(){
    this.setupData()
  }

  setupData=()=>{
    let azkar = AZKAR;
    azkar.forEach(zekr=>{
      zekr.id= uuidv4()
    },this.setState({azkar: azkar}))
  }


  showZekr =(item)=>{
    let newAzkar= this.state.azkar.slice();
    let filtered = []
    filtered= newAzkar.filter(zekr=>zekr.id !=item.id) 
    this.setState({azkar: filtered})
  }



  renderZekrItem=({item})=>{
    return(
      <ZekrCard zekr={item}  showZekr={(item)=> this.showZekr(item)}/>
    )
  }

  render() {
    return (
      <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
        <Text>Azkar!</Text>
          
        {this.state.azkar.length>0 &&<FlatList
          data={this.state.azkar}
          renderItem={this.renderZekrItem}
          keyExtractor = { (item,index) => index.toString()}
          extraData= {this.state.azkar}
        />}
      </View>
    );
  }
}

const styles= StyleSheet.create({
  container:{
   // flex: 1
  }
})