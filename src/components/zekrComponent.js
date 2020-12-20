import React, {useState}from 'react';
import {TouchableOpacity, Text, View, StyleSheet, Animated} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons'
import { colors } from '../constants/colors';

const ZekrCard = (props) => {
  const zekr = props.zekr;
  const [zekrCount, setZekrCount] = useState(props.zekr.count!=0? props.zekr.count : 1);
  
  const changeZekrCount =()=>{
    if(zekrCount> 1){
      setZekrCount(zekrCount-1)
    }else if(zekrCount==1){
      props.showZekr(zekr)
      setZekrCount(props.zekr.count)
    }
  }

  return(
  <Animated.View style={styles.container} >
    <TouchableOpacity onPress={()=> changeZekrCount()}>
      <View style={styles.roundedContainer}>
        <Text style={{textAlign: 'center', padding:25, fontSize:22, flexWrap:'wrap'}}>{zekr?.zekr}</Text>
      </View>
    </TouchableOpacity>
    <View style={[styles.roundedContainer,{flexDirection: 'row', backgroundColor:'grey', padding: 15, justifyContent:'space-between'}]}>
      <TouchableOpacity style={{flexDirection:'row'}} onPress={props.shareZekr}>
        <Ionicons name="share-social" size={30} color={"#FFF"}/>
        <Text style={[styles.text,{paddingLeft:6}]}>المشاركة</Text>
      </TouchableOpacity>
      <View style={{flexDirection:'row'}}>
        <View style={{borderRadius: 30, paddingHorizontal: 10, backgroundColor:'#fff', paddingVertical:3}}> 
          <Text style={[styles.text,{color: colors.grey, fontWeight:'normal', fontSize:18, textAlign:'center'}]}>{zekrCount}</Text>
        </View>
        <Text style={[styles.text,{paddingLeft:6}]}>التكرار</Text>
      </View>
    </View>
  </Animated.View>
  )
};

const styles = StyleSheet.create({
 
  container:{
    backgroundColor:'#FFF',
    borderColor:'red',
    borderRadius:20,
    marginHorizontal:25,
    marginVertical:15
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
