import React, {useState}from 'react';
import {TouchableOpacity, Text, View, StyleSheet} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons'

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
  <View style={styles.container} >
    <TouchableOpacity onPress={()=> changeZekrCount()}>
      <View style={styles.roundedContainer}>
        <Text style={{textAlign: 'center', padding:25, fontSize:22, flexWrap:'wrap'}}>{zekr?.zekr}</Text>
      </View>
    </TouchableOpacity>
    <View style={[styles.roundedContainer,{flexDirection: 'row', backgroundColor:'grey', padding: 15, justifyContent:'space-between'}]}>
      <TouchableOpacity style={{flexDirection:'row'}}>
        <Ionicons name="share-social" size={30} color={"#FFF"}/>
        <Text style={[styles.text,{paddingLeft:6}]}>المشاركة</Text>
      </TouchableOpacity>
      {/* <View style={{width: 1, backgroundColor:'#fff'}}/> */}
      {/* <View style={{flex: 1}}/>  */}
      <View style={{flexDirection:'row'}}>
        <View style={{borderRadius: 30, paddingHorizontal: 10, backgroundColor:'#fff'}}> 
          <Text style={[styles.text,{color: '#000', fontWeight:'normal', fontSize:20, textAlign:'center'}]}>{zekrCount}</Text>
        </View>
        <Text style={[styles.text,{paddingLeft:6}]}>التكرار</Text>
      </View>
    </View>
  </View>
  )
};

const styles = StyleSheet.create({
 
  container:{
    backgroundColor:'#FFF',
    borderColor:'red',
    borderRadius:20,
    //justifyContent:'space-between',
    marginHorizontal:25,
    marginVertical:15
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
