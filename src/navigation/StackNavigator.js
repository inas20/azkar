import React from 'react';
import { createStackNavigator } from "@react-navigation/stack";

import HomeScreen from '../screens/Home';
import AzkarScreen from '../screens/AzkarScreen';
import QuraanChaptersScreen from '../screens/QuraanChaptersScreen';
import QuranDisplayScreen from '../screens/ChapterVersesScreen';
import { colors } from '../constants/colors';
import TafsersScreen from '../screens/TafsersScreen';
import QuranPdfScreen from '../screens/QuranPdfScreen';
import ShareScreen from '../screens/ShareScreen';

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

        <Stack.Screen 
          name="Share" 
          component={AzkarScreen} 
          options={({ route }) => ({ title: "صدقة جارية"  })}
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
         <Stack.Screen 
          name="QuranPdf" 
          component={QuranPdfScreen} 
          options={({ route }) => ({ title:   "القران الكريم"   })}
         />

        <Stack.Screen 
          name="Tafsers" 
          component={TafsersScreen} 
          options={({ route }) => ({ title:  route.params.title ? route.params.title: "التفسير"   })}
         />
      </Stack.Navigator>
    );
  }

  const ShareStackNavigator =()=>{
    return (
      <Stack.Navigator screenOptions={screenOptionStyle}>
      
        <Stack.Screen 
          name="Share" 
          component={ShareScreen} 
          options={({ route }) => ({ title: "صدقة جارية"  })}
         />
        <Stack.Screen
          name="Home"
          component={HomeScreen}
          options={{ title: ' المسلم' }}
        />
  
      </Stack.Navigator>
    );
  }

  export {MainStackNavigator, QuraanStackNavigator, ShareStackNavigator};
