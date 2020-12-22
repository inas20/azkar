import * as React from 'react';
import {Text, View, Dimensions, StyleSheet, Platform, PermissionsAndroid} from 'react-native';
import Geolocation from '@react-native-community/geolocation';
import { connect } from 'react-redux';

import { getPrayersTime } from '../redux/actions/prayers';
import { colors } from '../constants/colors';
import { toArabic } from '../constants/arabicMapping';

const{height, width}= Dimensions.get('window')

const config ={
  skipPermissionRequests: false,
  authorizationLevel:  'whenInUse' 
}

Geolocation.setRNConfiguration(config);


class PrayersScreen extends React.Component {
  constructor(props) {
    super(props)
    this.state={
      longititude : '',
      latitude : '',
      timeStamp :'',
      initialPosition: 'unknown',
      lastPosition: 'unknown',
      locationStatus: ''
    }
    this.watchID = null
  }

  getCoodinates = () =>{

    this.watchID = Geolocation.watchPosition(position => {
      this.setState({lastPosition: position},()=>{
        this.props.onGetPrayersTime(this.state.lastPosition.coords?.latitude, this.state.lastPosition.coords?.longitude, this.state.lastPosition.timeStamp)
      });
    });
  } 

  componentDidMount(){
    //this.getCoodinates()
    this.requestLocationPermission()
  }

  componentWillUnmount() {
    this.watchID != null && Geolocation.clearWatch(this.watchID);
  }



   requestLocationPermission = async () => {
    if (Platform.OS === 'ios') {
      this.getOneTimeLocation();
      this.subscribeLocationLocation();
    } else {
      try {
        const granted = await PermissionsAndroid.request(
          PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION,
          {
            title: 'Location Access Required',
            message: 'This App needs to Access your location',
          },
        );
        if (granted === PermissionsAndroid.RESULTS.GRANTED) {
          //To Check, If Permission is granted
          this.getOneTimeLocation();
          this.subscribeLocationLocation();
        } else {
          this.setState({ locationStatus: 'Permission Denied'});
        }
      } catch (err) {
        console.warn(err);
      }
    }
  };



 getOneTimeLocation = () => {
  this.setState({ locationStatus: 'Getting Location ...'});
  Geolocation.getCurrentPosition(
    //Will give you the current location
    (position) => {
      this.setState({ locationStatus: 'You are Here'});

      //getting the Longitude from the location json
      const currentLongitude = 
        JSON.stringify(position.coords.longitude);

      //getting the Latitude from the location json
      const currentLatitude = 
        JSON.stringify(position.coords.latitude);

      //Setting Longitude state
      this.setState({longititude:currentLongitude })
      //setCurrentLongitude(currentLongitude);
      
      //Setting Longitude state
      this.setState({latitude:currentLatitude })
      //setCurrentLatitude(currentLatitude);

      // get prayer times
      this.props.onGetPrayersTime(position.coords.latitude, position.coords.longitude, position.timeStamp)

    },
    (error) => {
      this.setState({ locationStatus: error.message});
      //setLocationStatus(error.message);
    },
    {
      enableHighAccuracy: false,
      timeout: 30000,
      maximumAge: 1000
    },
  );
};

subscribeLocationLocation = () => {
  this.watchID = Geolocation.watchPosition(
    (position) => {
      //Will give you the location on location change
      
      this.setState({ locationStatus: 'You are Here'});
      console.log(position);

      //getting the Longitude from the location json        
      const currentLongitude =
        JSON.stringify(position.coords.longitude);

      //getting the Latitude from the location json
      const currentLatitude = 
        JSON.stringify(position.coords.latitude);

      //Setting Longitude state
      this.setState({longititude:currentLongitude })

      //Setting Latitude state
      this.setState({latitude:currentLatitude })
    },
    (error) => {
      setLocationStatus(error.message);
    },
    {
      enableHighAccuracy: false,
      maximumAge: 1000
    },
  );
};
  

  render() {
    let zone =this.props.timeZone?.toString();
    return (
      <View style = {styles.container}>
        <View style = {styles.prayersContainer}>
          {this.props.hijri && this.props.hijri.weekday && 
            <Text style = {styles.date}>{this.props.hijri.weekday?.ar} {this.props.hijri.month?.ar}  {this.props.hijri.year} </Text>}
            <Text style = {{color: colors.white}}> مواعيد الصلاة في {zone.includes("Cairo")? toArabic["Cairo"] : "مصر"} </Text>
            {Object.keys(this.props.timings).map((prayer, i)=>{
              if(prayer != "Sunset"){
                return(
                  <Text 
                    key = {i} 
                    style = {styles.prayTime}>
                      {toArabic[prayer]}  :  {this.props.timings[prayer]}
                  </Text>
                )
              }
            })}
        </View>
      </View>
    );
  }
}

const styles= StyleSheet.create({
  container:{
    flex: 1,
    justifyContent: 'center', 
    alignItems: 'center' ,  
    backgroundColor: colors.lightBlue
  },
  prayersContainer:{
    height:height*0.9, 
    width: width*0.9, 
    position:'absolute', 
    justifyContent:'center', 
    alignItems:'center', 
    backgroundColor: colors.primary, 
    padding:15
  },
  date:{
    color: colors.white, 
    paddingVertical: 15, 
    fontSize: 22
  },
  prayTime: {
    textAlign:'justify' ,
    color: colors.white, 
    fontSize: 18, 
    margin: 15
  }
})


const mapStateToProps = (state) => {
    return{
      timings: state.prayers.timings, 
      timeZone: state.prayers.timeZone,
      hijri :state.prayers.hijri
    }
  };
  
const mapDispatchToProps = dispatch => {
    return {
      onGetPrayersTime :(lat, long, timeStamp) => dispatch(getPrayersTime(lat,long, timeStamp))
    };
  };
  
export default connect(mapStateToProps, mapDispatchToProps)(PrayersScreen);