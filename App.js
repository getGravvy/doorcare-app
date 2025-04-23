import React from 'react';
import { Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import AppNavigator from './AppNavigator';
import {
  useFonts,
  Inter_400Regular,
  Inter_600SemiBold,
  Inter_700Bold,
} from '@expo-google-fonts/inter';
import AppLoading from 'expo-app-loading';

export default function App() {
  const [fontsLoaded] = useFonts({
    Inter_400Regular,
    Inter_600SemiBold,
    Inter_700Bold,
  });

  if (!fontsLoaded) return <AppLoading />;

  // 🔥 GLOBAL FONT STYLE APPLIED HERE
  Text.defaultProps = Text.defaultProps || {};
  Text.defaultProps.style = { fontFamily: 'Inter_400Regular' };

  return (
    <NavigationContainer>
      <AppNavigator />
    </NavigationContainer>
  );
}
