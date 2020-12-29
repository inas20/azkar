import * as React from 'react';
import {Text, View, TouchableOpacity, ToastAndroid, Dimensions, StyleSheet, Linking, Alert} from 'react-native';
import Feather  from 'react-native-vector-icons/Feather';
import { ShareCard } from '../components/shareCard';
import Clipboard from '@react-native-community/clipboard';

import { colors } from '../constants/colors';

const{height, width}= Dimensions.get('window')


export default class ShareScreen extends React.Component {
  constructor(props) {
    super(props)
  }


  componentDidMount(){
    this.props.navigation.setOptions({
      headerLeft: () => (
            <TouchableOpacity style={{paddingLeft: 12}} onPress={()=> this.props.navigation.goBack()}> 
              <Feather name="arrow-left" size={24}  color={colors.white}/>
            </TouchableOpacity>
      ),
    })
  }

  //copy link of the app to clipboard
  copyToClipboard = () => {
    Clipboard.setString('تطبيق المسلم');
    this.showToast()
  };


  showToast = () => {
    ToastAndroid.show("تم نسخ الرابط", ToastAndroid.SHORT);
  };

  // share link on post on facebook
  shareOnFacebook = async()=>{

    // let facebookParameters = [];
    // if (facebookShareURL)
    //   facebookParameters.push('u=' + encodeURI(facebookShareURL));
    //   facebookParameters.push('quote=' + encodeURI("تطبيق مسلم"));
    // const url =
    //   'facebook://sharer/sharer.php?' +
    //   facebookParameters.join('&');

    const url = "https://m.facebook.com/home.php?soft=composer" + "تطبيق المسلم"
    const supported = await Linking.canOpenURL(url);

    if (supported) {
      // Opening the link with some app, if the URL scheme is "http" the web link should be opened
      // by some browser in the mobile
      Linking.openURL(url)
      .then((data) => {
        this.copyToClipboard();
        //ToastAndroid.show("مشاركة الرابط على الفيسبوك", ToastAndroid.SHORT);
      })
    } else {
      Alert.alert(` Don't know how to open this URL: ${url}`);
    }
  }


  // share link on whatsapp
  shareOnWhatsapp = async()=>{
    const url = "whatsapp://send?text=" + "تطبيق المسلم"
    const supported = await Linking.canOpenURL(url);

    //check if whatsapp is installed
    if (supported) {
      // Opening the link with some app, if the URL scheme is "http" the web link should be opened
      // by some browser in the mobile
      Linking.openURL(url)
      .then((data) => {
        alert('Whatsapp Opened');
      })
    } else {
      Alert.alert(`Don't know how to open this URL: ${url}`);
    }
  }

  render() {
    return (
      <View style={{flex: 1, marginHorizontal: 10}}>
        <View style={styles.header}>
          <Text style={styles.text}>اجعل مشاركتك لهذا التطبيق صدقة جارية لك </Text>
        </View>
        <ShareCard appName= {"فيسبوك"} icon= "facebook-square" color= {colors.primary} onShare={()=> this.shareOnFacebook()}/>
        <ShareCard appName= {"واتساب"} icon= "whatsapp" color= {"#25D366"} onShare={()=> this.shareOnWhatsapp()}/>
        <ShareCard appName= {"نسخ رابط التطبيق"} icon= "copy" onShare={()=> this.copyToClipboard()}/>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  header:{
    marginTop: 10,
    height: height/3 ,
    backgroundColor: colors.lightBlue, 
    justifyContent:'space-between', 
    alignItems:'center'
  },
  text:{
    fontSize:50,
    color:'#FFF',
    paddingVertical:25,
    marginHorizontal:10
  }
})