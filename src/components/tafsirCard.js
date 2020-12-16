import React,{useState} from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import MaterialIcons  from 'react-native-vector-icons/MaterialIcons';

import { colors } from '../constants/colors';
import { FontType } from '../constants/fonts';

export const TafsirCard =(props)=>{
    const [expanded, setExpanded] = useState(false);
    return(
        <TouchableOpacity style={styles.cardContainer} onPress={()=> setExpanded(!expanded)}>
            <View style={styles.resourceNameContainer}>
                <MaterialIcons name="keyboard-arrow-left" size={45} style={{paddingTop:15}} color={colors.lightBlue}/>
                <Text style={styles.resourceNameStyle}>  {props.tafserData.resourceName} </Text>
            </View>
            {expanded && 
                <View style={{marginHorizontal:6}}>
                    <Text style={styles.tafsirStyle}>{props.tafserData.tafsir}</Text>
                </View>}
        </TouchableOpacity>
    )
}

const styles= StyleSheet.create({
    cardContainer:{
        //alignItems:'center',
        borderColor:colors.grey, 
        borderWidth:1,
        borderRadius:50,
        marginHorizontal:6,
        marginVertical:15,
        paddingBottom:10,
        paddingHorizontal:10,
       
    },
    resourceNameContainer:{
        flexDirection:'row',
        justifyContent: 'space-between',
        alignItems:'center',
        flex:1
    },
    resourceNameStyle:{
        fontFamily: FontType.bold,
        fontSize: 22,
        textAlign:'right',
        color: colors.primary,
        padding:6,
        marginVertical:9,
        paddingHorizontal:10
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