import React from 'react';
import {StyleSheet, Dimensions, View, TouchableOpacity } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { colors } from '../constants/colors';

import Pdf from 'react-native-pdf';



export default class QuranPdfScreen extends React.Component {
    constructor(props){
        super(props)
    }

    componentDidMount(){
        this.props.navigation.setOptions({
          headerRight: () => (
            <TouchableOpacity style={{padding: 15}} onPress={()=> this.props.navigation.navigate("Quraan")}> 
              <Ionicons name="list" size={30} color={colors.white} />
            </TouchableOpacity>
          ),
        })
    }    

    render() {
        const source = require("../assets/quraan.pdf")
        //const source = {uri:'bundle-assets://test.pdf'};
 
        //const source = {uri:'file:///sdcard/test.pdf'};
        //const source = {uri:"data:application/pdf;base64,JVBERi0xLjcKJc..."};
 
        return (
            <View style={styles.container}>
                <Pdf
                    source={source}
                    onLoadComplete={(numberOfPages,filePath)=>{
                        console.log(`number of pages: ${numberOfPages}`);
                    }}
                    onPageChanged={(page,numberOfPages)=>{
                        console.log(`current page: ${page}`);
                    }}
                    onError={(error)=>{
                        console.log(error);
                    }}
                    onPressLink={(uri)=>{
                        console.log(`Link pressed: ${uri}`)
                    }}
                    style={styles.pdf}/>  
            </View>
           
        )
  }
}
 
const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'flex-start',
        alignItems: 'center',
        marginTop: 25,
    },
    pdf: {
        flex:1,
        width:Dimensions.get('window').width,
        height:Dimensions.get('window').height,
    }
});