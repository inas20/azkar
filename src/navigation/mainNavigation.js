import React from 'react';
import { createStackNavigator } from "@react-navigation/stack";
import HomeScreen from './../screens/Home';
import AzkarScreen from './../screens/azkarScreen';
import { AppHeader } from '../components/header';
import { colors } from '../constants/colors';

const Stack = createStackNavigator();

const screenOptionStyle = {
  headerStyle: {
    backgroundColor: colors.primary,
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
