import * as React from 'react';
import {Text, View, TouchableOpacity, StyleSheet, FlatList} from 'react-native';
import {ZekrCard}  from '../components/zekrComponent';
import AZKAR from '../DataSet/azkar.json';

export default class HomeScreen extends React.Component {
  constructor(props) {
    super(props)
    this.state={
      count: 3,
      zekrVisibility: true,
      azkar: []
    }
  }

  componentDidMount(){
    this.setupData()
  }

  setupData=()=>{
    let azkar = AZKAR;
    azkar.forEach(zekr=>{
      zekr.id= Math.round(Math.random()*10000)
    },   this.setState({azkar: azkar},()=> console.log('this.state.azkar---', this.state.azkar.length)))
  }


  showZekr =(item)=>{
    let newAzkar= this.state.azkar.slice();
    let filtered = []
    console.log('newAzkar.length--before--', newAzkar.length)
    console.log('item finished-id---', item.id)
    filtered= newAzkar.filter(zekr=>zekr.id !=item.id) 
    console.log('newAzkar.length--after--', filtered.length)
    console.log('item wanted--after--', newAzkar.find(zekr=> zekr.id == item.id))
    this.setState({azkar: filtered})
  }

  renderZekrItem=({item})=>{
    return(
      <ZekrCard zekr={item}  showZekr={(item)=> this.showZekr(item)}/>
    )
  }

  render() {
    //let updatedAzkar = this.state.azkar.filter(zekr=> !!zekr.visible )
    return (
      <View style={styles.container}>
        <TouchableOpacity style={styles.btnContainer} onPress={() => this.props.navigation.navigate('Azkar')}>
          <Text style={{color:'#FFF', padding: 15, fontSize:20}}>اذكار الصباح </Text>
        </TouchableOpacity>
        {/* {this.state.zekrVisibility && <ZekrCard count={this.state.count} updateCount={()=> this.showZekr()}/>} */}

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
  },
  btnContainer:{
    borderRadius:25, 
    backgroundColor:'blue', 
    margin:15
  }
})
