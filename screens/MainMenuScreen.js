import React from 'react';
import { View, StyleSheet, ImageBackground, TouchableOpacity } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import AppText from '../components/AppText';
import { COLORS } from '../constants/theme';

export default function MainMenuScreen({ navigation }) {
  return (
    <ImageBackground
      source={require('../assets/images/garage_interior_bg.png')}
      style={styles.background}
      resizeMode="cover"
    >
      <View style={styles.overlay}>
        <AppText weight="bold" style={styles.title}>Welcome to DoorCare</AppText>

        <GradientButton label="Book a Service" onPress={() => navigation.navigate('BookServiceScreen')} />
        <GradientButton label="Service History" onPress={() => navigation.navigate('ServiceHistoryScreen')} />
        <GradientButton label="Refer a Friend" onPress={() => navigation.navigate('ReferAFriendScreen')} />
        <GradientButton label="Compare Plans" onPress={() => navigation.navigate('PlanComparisonScreen')} />
      </View>
    </ImageBackground>
  );
}

const GradientButton = ({ label, onPress }) => (
  <TouchableOpacity style={styles.buttonWrapper} onPress={onPress}>
    <LinearGradient
      colors={[COLORS.primary, COLORS.primaryLight]}
      start={[0, 0]}
      end={[1, 1]}
      style={styles.button}
    >
      <AppText weight="semiBold" style={styles.buttonText}>{label}</AppText>
    </LinearGradient>
  </TouchableOpacity>
);

const styles = StyleSheet.create({
  background: {
    flex: 1,
  },
  overlay: {
    flex: 1,
    backgroundColor: COLORS.backgroundDark,
    paddingHorizontal: 24,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize: 28,
    marginBottom: 40,
  },
  buttonWrapper: {
    width: '100%',
    marginBottom: 16,
    borderRadius: 16,
    overflow: 'hidden',
  },
  button: {
    paddingVertical: 16,
    alignItems: 'center',
    borderRadius: 16,
  },
  buttonText: {
    fontSize: 18,
  },
});
