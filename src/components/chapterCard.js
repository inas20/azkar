import React from 'react';
import {Text, TouchableOpacity, View, StyleSheet, Dimensions} from 'react-native';
import { colors } from '../constants/colors';

const{height, width}= Dimensions.get('window')

export const ChapterCard =(props)=>{
    const chapter= props.chapter
    return(
        <TouchableOpacity onPress={()=>{props.openChapter(chapter?.chapter_number)}} style={styles.container}>
            <View style={{margin: 5, justifyContent:'center', alignItems:'center', flexDirection:'row'}}>
                <Text style={{fontSize:12}}>{chapter.chapter_number}. </Text>
                <View style={{marginLeft:12}}>
                    <Text style={{color : colors.lightBlue}}>{chapter.name_simple} ( {chapter.verses_count}: عدد الايات) </Text>
                    <Text style={{flexWrap:'wrap'}}>{chapter.name_complex} (Verses: {chapter.verses_count})</Text>
                </View>
            </View>
            <View style={{margin: 5,}}>
                <Text style={styles.chapterName}>{chapter.name_arabic}</Text>
            </View>
        </TouchableOpacity>
    )
}

const styles= StyleSheet.create({
    container:{
        flexDirection:'row', 
        justifyContent: 'space-between',
        elevation: 22,
        shadowOpacity: 0.1,
        shadowRadius: 5,
        borderWidth: 1,
        borderColor: colors.lightGrey,
        margin:10,
        width:width-30
    },
    chapterName:{
        fontSize: 30
    }
})