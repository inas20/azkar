import React, {useState}from 'react';
import {TouchableOpacity, Text, View, StyleSheet} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons'

const ZekrCard = (props) => {
  const zekr = props.zekr;
  const [zekrCount, setZekrCount] = useState(zekr.count);
  
  const changeZekrCount =()=>{
    if(zekrCount> 0){
      setZekrCount(zekrCount-1)
    }else{
      props.showZekr(zekr)
    }
  }

  return(
  <TouchableOpacity style={styles.container} onPress={()=> changeZekrCount()}>
    <View>
      <View style={styles.roundedContainer}>
        <Text style={{textAlign: 'center', padding:25, fontSize:22, flexWrap:'wrap'}}>{zekr?.zekr}</Text>
      </View>
    </View>
    <View style={[styles.roundedContainer,{flexDirection: 'row', backgroundColor:'grey', padding: 15, justifyContent:'space-between'}]}>
      <TouchableOpacity style={{flexDirection:'row'}}>
        <Ionicons name="share-social" size={30} color={"#FFF"}/>
        <Text style={[styles.text,{paddingLeft:6}]}>المشاركة</Text>
      </TouchableOpacity>
      {/* <View style={{width: 1, backgroundColor:'#fff'}}/> */}
      {/* <View style={{flex: 1}}/>  */}
      <View style={{flexDirection:'row'}}>
        <View style={{borderRadius: 50, paddingHorizontal: 10, backgroundColor:'#fff'}}> 
          <Text style={[styles.text,{color: '#000', fontWeight:'normal'}]}>{zekrCount}</Text>
        </View>
        <Text style={[styles.text,{paddingLeft:6}]}>التكرار</Text>
      </View>
    </View>
  </TouchableOpacity>
  )
};

const styles = StyleSheet.create({
 
  container:{
    backgroundColor:'#FFF',
    borderColor:'red',
    borderRadius:20,
    //justifyContent:'space-between',
    marginHorizontal:25,
   // flex: 1,
  },
  roundedContainer:{
    borderRadius:30,
    //margin:15
  },
  text:{
    color: '#fff', 
    fontSize: 22, 
    textAlign:'right', 
    fontWeight:'bold'
  }
});

export {ZekrCard};
