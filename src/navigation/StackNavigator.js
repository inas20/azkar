import React from 'react';
import { createStackNavigator } from "@react-navigation/stack";

import HomeScreen from '../screens/Home';
import AzkarScreen from '../screens/AzkarScreen';
import QuraanChaptersScreen from '../screens/QuraanChaptersScreen';
import QuranDisplayScreen from '../screens/ChapterVersesScreen';
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
    fontSize:22
  }
};

const MainStackNavigator = () => {
    return (
      <Stack.Navigator screenOptions={screenOptionStyle}>
        <Stack.Screen
          name="Home"
          component={HomeScreen}
          options={{ title: 'أذكار المسلم' }}
        />
        <Stack.Screen 
          name="Azkar" 
          component={AzkarScreen} 
          options={({ route }) => ({ title: "أذكار " +  route.params.title })}
         />
  
      </Stack.Navigator>
    );
  };


  const QuraanStackNavigator = () => {
    return (
      <Stack.Navigator screenOptions={screenOptionStyle}>
        <Stack.Screen name="Quraan" component={QuraanChaptersScreen}  
          options={{ title: "القران الكريم" }}  />
        <Stack.Screen 
          name="Ayat" 
          component={QuranDisplayScreen} 
          options={({ route }) => ({ title:  route.params.title ? route.params.title: "القران الكريم"   })}
         />
      </Stack.Navigator>
    );
  }

  export {MainStackNavigator, QuraanStackNavigator};
