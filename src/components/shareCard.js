import React from 'react';
import { TouchableOpacity , Text,StyleSheet} from 'react-native';
import { colors } from '../constants/colors';
import { FontType } from '../constants/fonts';
import FontAwesome from "react-native-vector-icons/FontAwesome";


export const ShareCard =(props)=>{
    return(
        <TouchableOpacity onPress = {props.onShare} style={styles.cardContainer}>
            <FontAwesome style={{paddingVertical:15}} color={props.color} name= {props.icon} size={32}/>
            <Text style={[styles.title,{color: props.color}]}>{props.appName} </Text>
        </TouchableOpacity>
    )
}

const styles= StyleSheet.create({

    cardContainer :{
        borderRadius:10, 
        margin:15,
        shadowColor: colors.grey,
        shadowOffset: {
            width: 0,
            height: 1,
        },
        shadowOpacity: 0.6,
        shadowRadius: 1,
        elevation: 5,
        paddingHorizontal:30,
        paddingVertical: 10,
        flexDirection:'row',
        justifyContent:'space-between'
    },
    title:{
        fontSize: 25, 
        fontFamily:FontType.arabic,
        fontWeight: "bold",
        paddingVertical: 15
    }

})