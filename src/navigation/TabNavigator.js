import React from 'react';

import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

import { MainStackNavigator, QuraanStackNavigator } from "./StackNavigator";
import SettingsScreen from '../screens/Settings';
import ShareScreen from '../screens/ShareScreen';

const Tab = createBottomTabNavigator();

const BottomTabNavigator = () => {
  return (
    <Tab.Navigator
    initialRouteName ="Home"
    screenOptions={({ route }) => ({
      tabBarIcon: ({ focused, color, size }) => {
        let iconName;
  
        if (route.name === 'Home') {
          iconName = focused
            ? 'home'
            : 'home-outline';
        } else if (route.name === 'Settings') {
          iconName = 'heart'
        }else if (route.name === 'Quraan') {
          iconName = 'book-open-variant';
        }else if (route.name === 'Share') {
          iconName = 'hand-heart';
        }
  
        // You can return any component that you like here!
        return <MaterialCommunityIcons name={iconName} size={size} color={color} />;
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
       <Tab.Screen name="Share" component={ShareScreen} />
      <Tab.Screen name="Settings" component={SettingsScreen} />
      <Tab.Screen name="Quraan" component={QuraanStackNavigator} />
      <Tab.Screen name="Home" component={MainStackNavigator} />
      
    </Tab.Navigator>
  );
};

export default BottomTabNavigator;