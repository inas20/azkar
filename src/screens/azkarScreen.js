import * as React from 'react';
import {Share, View, StyleSheet, FlatList,  UIManager,Platform, LayoutAnimation} from 'react-native';
import { v4 as uuidv4 } from 'uuid';
import { ZekrCard } from '../components/zekrComponent';
import AZKAR from '../DataSet/azkar.json';

if (Platform.OS === 'android') {
  UIManager.setLayoutAnimationEnabledExperimental &&
    UIManager.setLayoutAnimationEnabledExperimental(true);
}

export default class AzkarScreen extends React.Component {
  constructor(props) {
    super(props)
    this.state={
      azkar: []
    }
  }

  componentDidMount(){
    this.setupData()
  }
  

  setupData =()=> {
    let azkar = AZKAR;
    azkar.forEach(zekr=>{
      zekr.id= uuidv4()
    },this.setState({azkar: azkar}))
  }


  showZekr =(item)=>{
    let newAzkar= this.state.azkar.slice();
    let filtered = []
    filtered= newAzkar.filter(zekr=>zekr.id !=item.id) 
    this.setAnimation();
    this.setState({azkar: filtered})
  }

  onShareZekr = async (item) => {
    try {
      const result = await Share.share({
        message:item.zekr +'\n' + 'تطبيق_أذكار\n'
      });

      if (result.action === Share.sharedAction) {
        if (result.activityType) {
          // shared with activity type of result.activityType
        } else {
          // shared
        }
      } else if (result.action === Share.dismissedAction) {
        // dismissed
      }
    } catch (error) {
      alert(error.message);
    }
  };
  

  setAnimation = () => {
    LayoutAnimation.configureNext({
      duration: 250,
      update: {
        type: LayoutAnimation.Types.spring,
        springDamping: 0.7,
      },
    });
    LayoutAnimation.configureNext({
      duration: 500,
      create: {
        type: LayoutAnimation.Types.easeOut,
        property: LayoutAnimation.Properties.scaleXY,
        springDamping: 0.7,
      },
    });
  };
  


  renderZekrItem =({item})=>{
    return(
      <ZekrCard zekr={item}  showZekr={(item)=> this.showZekr(item)} shareZekr={()=> this.onShareZekr(item)}/>
    )
  }

  render() {
    return (
      <View style={styles.container}>
        {this.state.azkar.length>0 && <FlatList
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
    flex: 1, 
    justifyContent: 'center', 
    alignItems: 'center'
  }
})
