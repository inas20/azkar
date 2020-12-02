import React from 'react';
import {Text, View, TouchableOpacity, StyleSheet} from 'react-native';
import { colors } from '../constants/colors';

 
export const WerdCard =(props)=>{
    return (
        <TouchableOpacity style={styles.container} onPress={() => props.navigation.navigate('Azkar',{title: props.title})}>
            <Text style={{color:'#FFF', padding: 15, fontSize:20}}>اذكار {props.title} </Text>
        </TouchableOpacity>
    )
}

const styles= StyleSheet.create({
    container:{
        borderRadius:25, 
        backgroundColor: colors.primary, 
        margin:15,
        elevation: 22,
        shadowOpacity: 0.3,
        shadowRadius: 50,
    }
})
   
       
 