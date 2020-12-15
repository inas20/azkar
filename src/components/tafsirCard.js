import React from 'react';
import {View, Text, StyleSheet} from 'react-native'
import { colors } from '../constants/colors';
import { FontType } from '../constants/fonts';

export const TafsirCard =(props)=>{
    return(
        <View style={styles.cardContainer}>
            <Text style={styles.resourceNameStyle}>  {props.tafserData.resourceName} </Text>
            <Text style={styles.tafsirStyle}>{props.tafserData.tafsir}</Text>
        </View>
    )
}

const styles= StyleSheet.create({
    cardContainer:{
        height: 'auto',
        alignItems:'center',
        justifyContent:'center',
        borderColor:colors.grey, borderWidth:1,
        marginHorizontal:6,
        paddingBottom:10,
        paddingHorizontal:10,
        marginVertical:15
    },
    resourceNameStyle:{
        fontFamily: FontType.bold,
        fontSize: 30,
        textAlign:'center',
        color: colors.primary,
        paddingTop:6,
        marginVertical:9
    },
    tafsirStyle:{
        fontFamily: FontType.regular,
        fontSize:18,
        color: colors.grey,
        textAlign:"center",
        flexWrap:'wrap',
        paddingRight:5,
        lineHeight:35,
        paddingBottom:10
    }
})