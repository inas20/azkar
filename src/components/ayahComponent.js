import React,{useState} from 'react';
import {Text, TouchableOpacity, View, StyleSheet} from 'react-native';
import { TouchableNativeFeedback } from 'react-native-gesture-handler';
import MaterialIcons  from 'react-native-vector-icons/MaterialIcons';

import { colors } from '../constants/colors';
import { FontType } from '../constants/fonts';

export const AyahComponent =(props)=>{
    const ayah = props.ayah;
    const [expanded, setExpanded] = useState(false);
    const [tafsirs,setTafsirs] = useState([]);
    const handlePress = () => {
        if(!expanded){
             props.getTafsir().then(res=>{
                setTafsirs(res)
             })
            //setTafsirs(tafsirs)
        }
        setExpanded(!expanded);
    };
  
    return(
        <TouchableNativeFeedback style={styles.container} onPress= {handlePress}>
            <View style={styles.cardStyle}>
                <View style={styles.cardContainer}>
                    <MaterialIcons name="keyboard-arrow-left" size={45} style={{paddingTop:15}} color={colors.lightBlue}/>
                    <View style={styles.ayahContainer}>
                        <Text style={styles.text}>
                            {ayah.text} 
                            {ayah.sajdah && <Text style={[styles.text, {paddingRight:3}]}>&#x6e9;</Text>}
                        </Text>
                    </View>
                    <View style={styles.ayahNumContainer}>
                        <Text style={styles.ayahNum}>{ayah.verseNum}</Text>
                    </View>
                </View>
            </View>
            {expanded && 
                <TouchableOpacity 
                    onPress={()=> props.navigation.navigate("Tafsers", {tafsirs: tafsirs, verse: ayah, title: "  تفسير اّية رقم "+ ayah.verseNum })}
                    style={{borderColor:colors.grey, borderWidth:1,height: 'auto', marginHorizontal:6}}>
                    <Text style={styles.tafserTitle}>{tafsirs[0]?.resourceName}</Text>
                    <Text numberOfLines={5} ellipsizeMode= 'tail' style={{fontSize:15, lineHeight:25, paddingHorizontal:10, }}>{tafsirs[0]?.tafsir}</Text>
                </TouchableOpacity>}
        </TouchableNativeFeedback>
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