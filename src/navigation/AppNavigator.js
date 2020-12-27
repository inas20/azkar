import 'react-native-gesture-handler';
import  React,{useState, useEffect} from 'react';
import { NavigationContainer } from '@react-navigation/native';
import BottomTabNavigator from './TabNavigator';
import SplashScreen  from '../screens/SplashScreen';

const AppNavigator = () => {
  const [splash, setSplash] = useState(true);
  useEffect(() => {
    setTimeout(() => {
      setSplash(false);
    }, 2500);
  }, []);

  return (
    <NavigationContainer>
      {splash ? <SplashScreen/> : <BottomTabNavigator />}
    </NavigationContainer>
  );
};

export default AppNavigator;