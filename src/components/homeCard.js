import React from 'react';
import {Text, View, TouchableOpacity, StyleSheet} from 'react-native';
import { colors } from '../constants/colors';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import { FontType } from '../constants/fonts';
 
export const HomeCard =(props)=>{
    return (
        <View style={styles.container}>
            <Text style={{color:colors.dark, padding: 15, fontSize:25}}>{props.title} </Text>
            <Text style={styles.text}>{props.description} </Text>
            <Text style={[styles.text,{fontSize :28, padding: 10, flexWrap:'wrap'}]}>{props.transliation}  : {props.details}</Text>
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
        backgroundColor: colors.white, 
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
        backgroundColor:colors.white,
        elevation: 8,
        shadowOpacity: 0.3,
        shadowRadius: 50,
    },
    text:{
        color:colors.mediumRed, 
        padding: 15, 
        fontSize:100,  
        fontFamily: FontType.arabic,
        textAlign:"center" 
    }
})
   
       
 