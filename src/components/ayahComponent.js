import React,{useState} from 'react';
import {Text, TouchableOpacity, View, StyleSheet} from 'react-native';
import MaterialIcons  from 'react-native-vector-icons/MaterialIcons';

import { colors } from '../constants/colors';
import { FontType } from '../constants/fonts';

export const AyahComponent =(props)=>{
    const ayah = props.ayah;
    const [expanded, setExpanded] = useState(false);
    const [tafsir,setTafsir] = useState("");
    const handlePress = () => {
        if(!expanded){
            let tafser = ""
             props.getTafsir().then(res=>{
                setTafsir(res)
             })
            setTafsir(tafser)
        }
        setExpanded(!expanded);
    };

    return(
    //     <List.Accordion
    //         style={{borderWidth: 1, borderColor:colors.separator, flexWrap:"wrap"}}
    //         title= {ayah.text}
    //         titleStyle={styles.text}
    //         left= {props => <View style={styles.ayahNumContainer}>
    //                             <Text style={styles.ayahNum}>{ayah.verseNum}</Text>
    //                         </View>}
    //         expanded= {expanded}
    //         onPress= {handlePress}>
    //         <List.Item
    //             style={{alignItems:"center", justifyContent:"center", height:"auto", flexWrap:"wrap"}} 
    //             title= "تفسير الميسر"  
    //             titleStyle={{textAlign:"center", fontSize:18, fontWeight:"bold"}}
    //             description={tafsir} 
    //             descriptionNumberOfLines={100}
    //             descriptionStyle={{textAlign:'justify', marginHorizontal:3, fontSize:15, lineHeight:30}}
    //         />
    //   </List.Accordion>
        <TouchableOpacity style={styles.container} onPress= {handlePress}>
            <View style={styles.cardStyle}>
                <View style={styles.cardContainer}>
                    <MaterialIcons name="keyboard-arrow-left" size={45} style={{paddingTop:15}} color={colors.lightBlue}/>
                    <View style={styles.ayahContainer}>
                        <Text style={styles.text}>{ayah.text}</Text>
                    </View>
                    <View style={styles.ayahNumContainer}>
                        <Text style={styles.ayahNum}>{ayah.verseNum}</Text>
                    </View>
                </View>
                {expanded && <View style={{borderColor:colors.grey, borderWidth:1,height: 'auto', }}>
                    <Text style={styles.tafserTitle}>تفسير العربي القرطبي</Text>
                    <Text style={{fontSize:15, lineHeight:25, paddingRight:10}}>{tafsir}</Text>
                </View>}
            </View>
        </TouchableOpacity>
    )
}

const styles=StyleSheet.create({
    containter:{
       
        //margin:5
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
        // flexDirection: 'column',
        // justifyContent: 'center',
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
        fontFamily: FontType.semiBold,
    },
    tafserTitle:{
        fontSize:20, 
        lineHeight:25, 
        textAlign:"center", 
        //fontWeight:"bold",
        fontFamily: FontType.bold,
        marginVertical:15, 
        color:colors.primary
    }
})