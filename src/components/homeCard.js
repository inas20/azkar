import React from 'react';
import {Text, View, TouchableOpacity, StyleSheet} from 'react-native';
import { colors } from '../constants/colors';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
 
export const HomeCard =(props)=>{
    return (
        <View style={styles.container}>
            <Text style={{color:colors.dark, padding: 15, fontSize:25}}>{props.title} </Text>
            <Text style={{color:colors.mediumRed, padding: 15, fontSize:100, fontWeight:"bold",textAlign:"center" }}>{props.description} </Text>
            <View style={{alignItems:'center', justifyContent:"center"}}>
            <TouchableOpacity style={styles.roundedCircle}>
                <MaterialIcons name="keyboard-arrow-left" size={50}/>
            </TouchableOpacity>
            </View>
        </View>
    )
}

const styles= StyleSheet.create({
    container:{
        borderRadius:25, 
        backgroundColor: colors.noticeText, 
        margin:15,
        elevation: 8,
        shadowOpacity: 0.3,
        shadowRadius: 50,
        paddingBottom:25
    },
    roundedCircle:{
        borderRadius: 50, 
        paddingHorizontal: 10, 
        paddingVertical:10,
        backgroundColor:'#fff',
        elevation: 8,
        shadowOpacity: 0.3,
        shadowRadius: 50,
    }
})
   
       
 