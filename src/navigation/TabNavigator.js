import React,{useState, useEffect} from 'react';

import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';

import { MainStackNavigator, QuraanStackNavigator, ShareStackNavigator } from "./StackNavigator";
import PrayersScreen from '../screens/PrayersScreen';

const Tab = createBottomTabNavigator();


const BottomTabNavigator = () => {

    return (
      <Tab.Navigator
      initialRouteName ="Home"
      screenOptions={({ route }) => ({
        tabBarLabel:() => {return null},
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;
    
          if (route.name === 'Home') {
            iconName =  'home'
          } else if (route.name === 'Share') {
            iconName = 'praying-hands'
          }else if (route.name === 'Quraan') {
            iconName = 'book-open';
          }else if (route.name === 'Prayer Times') {
            iconName = 'pray';
          }
    
          // You can return any component that you like here!
          return <FontAwesome5 name={iconName} size={size} color={color} />;
        },
        headerStyle: {
          backgroundColor: "#9AC4F8",
        },
        headerTintColor: "white",
        headerBackTitle: "Back",
      })}
      tabBarOptions={{
        activeTintColor: 'tomato',
        inactiveTintColor: 'gray',
      }}
      
      > 
        <Tab.Screen name = "Share" component={ShareStackNavigator}  options={{
          title: 'Share',
          headerStyle: {
            backgroundColor: '#f4511e',
          },
          headerTintColor: '#fff',
          headerTitleStyle: {
            fontWeight: 'bold',
          },
        }}/>
        <Tab.Screen name = "Prayer Times" component={PrayersScreen} />
        <Tab.Screen name = "Quraan" component={QuraanStackNavigator} />
        <Tab.Screen name = "Home" component={MainStackNavigator} />
        
      </Tab.Navigator>
    );

};

export default BottomTabNavigator;