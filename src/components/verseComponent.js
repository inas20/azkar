import React from 'react';
import {Text, View, StyleSheet} from 'react-native';
import { TouchableNativeFeedback } from 'react-native-gesture-handler';
import MaterialIcons  from 'react-native-vector-icons/MaterialIcons';

import { colors } from '../constants/colors';
import { FontType } from '../constants/fonts';

export const VerseComponent =(props)=>{
    const ayah = props.ayah;  
        return(
            <TouchableNativeFeedback  style={styles.container} >
                <Text style={styles.text}>
                    {ayah.text} 
                    <Text style={{flexWrap:'wrap'}}>&#x6dd;</Text>
                    {ayah.sajdah && <Text style={[styles.text, {paddingRight:3}]}>&#x6e9;</Text>}
                </Text>
            </TouchableNativeFeedback>
        )
}

const styles=StyleSheet.create({
    containter:{
        //flexDirection:'row',
        flexWrap:'wrap'
    },
    cardStyle: {
        height: 'auto',
        padding: 10,
        borderColor:colors.separator
      },
      cardContainer: {
        flex: 1,
        flexDirection: 'row',
      },
    ayahContainer:{
        flex: 3,
    },
    ayahNumContainer:{
        height: 45,
        width: 45,
        borderRadius: 100,
        borderColor: colors.separator,
        borderWidth: 2,
        backgroundColor: colors.white,
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 15,
        marginLeft: 5,
        marginBottom: 10,
    },
    text:{
        textAlign: 'right',
        paddingTop: 10,
        paddingRight: 10,
        fontSize: 27,
        fontFamily: FontType.arabic,
        lineHeight: 50,
        flexWrap:"wrap",

    },
    ayahNum:{
        color: colors.grey,
        fontSize: 18,
        fontFamily: FontType.arabic,

    },
    tafserTitle:{
        fontSize:20,
        lineHeight:25,
        textAlign:"center",
        fontFamily: FontType.bold,
        marginVertical:15,
        color:colors.primary
    }
})