import React,{useState} from 'react';
import {Text, View, StyleSheet, TouchableOpacity} from 'react-native';
import MaterialIcons  from 'react-native-vector-icons/MaterialIcons';
import MaterialCommunityIcons  from 'react-native-vector-icons/MaterialCommunityIcons';

import { colors } from '../constants/colors';
import { FontType } from '../constants/fonts';

export const AyahComponent =(props)=>{
    const [selected, setSelected] = useState(false);
    const [bookmarkIcon, setIcon] = useState("bookmark-outline");
    const ayah = props.ayah; 

    const onPressBookmark =()=>{
        //setSelected(!selected)
        if(!selected){
            setSelected(true)
            console.log("icon--2-", bookmarkIcon , selected)
            setIcon("bookmark")
        }else{
            setSelected(false)
            console.log("icon--1-", bookmarkIcon , selected)
            setIcon("bookmark-outline")
        }
         props.setBookmark(selected)
    }

        return(
            <View  style={styles.container}>
                <View style={styles.cardStyle}>
                    <View style={styles.cardContainer}>
                        <TouchableOpacity onPress={()=> props.getTafsers()}>
                            <MaterialCommunityIcons name="information" size={35} style={{paddingTop:15}} color={colors.grey}/>
                        </TouchableOpacity>
                        <TouchableOpacity style={{paddingHorizontal: 8}} onPress={()=> {  onPressBookmark()} }>
                            <MaterialCommunityIcons name={bookmarkIcon} size={35} style={{paddingTop:15}} color={colors.primary}/>
                        </TouchableOpacity>
                       
                        <View style={styles.ayahContainer}>
                            <Text style={styles.text}>
                                {ayah.text} 
                                <Text>&#x6dd;</Text>
                                {ayah.sajdah && <Text style={[styles.text, {paddingRight:3}]}>&#x6e9;</Text>}
                            </Text>
                        </View>
                        <View style={styles.ayahNumContainer}>
                            <Text style={styles.ayahNum}>{ayah.verseNum}</Text>
                        </View>
                    </View>
                </View>
            </View>
        )
}

const styles=StyleSheet.create({
    containter:{
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