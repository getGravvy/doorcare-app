import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

// Screens
import FontTestScreen from './screens/FontTestScreen';
import SplashScreen from './screens/SplashScreen';
import GarageDoorIntroScreen from './screens/GarageDoorIntroScreen';
import MainMenuScreen from './screens/MainMenuScreen';
import BookServiceScreen from './screens/BookServiceScreen';
import ServiceHistoryScreen from './screens/ServiceHistoryScreen';
import ReferAFriendScreen from './screens/ReferAFriendScreen';
import NotificationsScreen from './screens/NotificationsScreen';
import TalkToTechScreen from './screens/TalkToTechScreen';
import BookingSuccessScreen from './screens/BookingSuccessScreen';
import PlanComparisonScreen from './screens/PlanComparisonScreen';
import AdminLoginScreen from './screens/AdminLoginScreen';
import AdminDashboardScreen from './screens/AdminDashboardScreen';
import AnalyticsScreen from './screens/AnalyticsScreen';
import PricingEditorScreen from './screens/PricingEditorScreen';
import LogoUploaderScreen from './screens/LogoUploaderScreen';

const Stack = createNativeStackNavigator();

export default function AppNavigator() {
  return (
    <Stack.Navigator initialRouteName="FontTestScreen" screenOptions={{ headerShown: false }}>
      <Stack.Screen name="FontTestScreen" component={FontTestScreen} />
      <Stack.Screen name="SplashScreen" component={SplashScreen} />
      <Stack.Screen name="GarageDoorIntroScreen" component={GarageDoorIntroScreen} />
      <Stack.Screen name="MainMenuScreen" component={MainMenuScreen} />
      <Stack.Screen name="BookServiceScreen" component={BookServiceScreen} />
      <Stack.Screen name="ServiceHistoryScreen" component={ServiceHistoryScreen} />
      <Stack.Screen name="ReferAFriendScreen" component={ReferAFriendScreen} />
      <Stack.Screen name="NotificationsScreen" component={NotificationsScreen} />
      <Stack.Screen name="TalkToTechScreen" component={TalkToTechScreen} />
      <Stack.Screen name="BookingSuccessScreen" component={BookingSuccessScreen} />
      <Stack.Screen name="PlanComparisonScreen" component={PlanComparisonScreen} />
      <Stack.Screen name="AdminLoginScreen" component={AdminLoginScreen} />
      <Stack.Screen name="AdminDashboardScreen" component={AdminDashboardScreen} />
      <Stack.Screen name="AnalyticsScreen" component={AnalyticsScreen} />
      <Stack.Screen name="PricingEditorScreen" component={PricingEditorScreen} />
      <Stack.Screen name="LogoUploaderScreen" component={LogoUploaderScreen} />
    </Stack.Navigator>
  );
}

