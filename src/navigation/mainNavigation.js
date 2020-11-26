import React from 'react';
import { createStackNavigator } from "@react-navigation/stack";
import HomeScreen from './../screens/Home';
import AzkarScreen from './../screens/azkar';
import { AppHeader } from '../components/header';

const Stack = createStackNavigator();

const screenOptionStyle = {
  headerStyle: {
    backgroundColor: "#9AC4F8",
  },
  headerTintColor: "white",
  headerBackTitle: "Back",
  headerTitleStyle: {
    fontWeight: 'bold',
  },
};

const MainStackNavigator = () => {
    return (
      <Stack.Navigator screenOptions={screenOptionStyle}>
        <Stack.Screen
          name="Home"
          component={HomeScreen}
          options={({route}) => ({
                   header: ()=>{
                    return (
                      <AppHeader title ={'أذكار'}/>
                    );
                   },
         })}/>
        <Stack.Screen name="Azkar" component={AzkarScreen} options={({route}) => ({
                   header: ()=>{
                    return (
                      <AppHeader title ={'أذكار'}/>
                    );
                   },
         })}/>
      </Stack.Navigator>
    );
  };

  export {MainStackNavigator};
