import React from 'react';
import { View, Text, StyleSheet, ImageBackground, TouchableOpacity } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';

export default function MainMenuScreen({ navigation }) {
  return (
    <ImageBackground
      source={require('../assets/images/garage_interior_bg.png')}
      style={styles.background}
      resizeMode="cover"
    >
      <View style={styles.overlay}>
        <Text style={styles.title}>Welcome to DoorCare</Text>

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
      colors={['#007AFF', '#00C6FF']}
      start={[0, 0]}
      end={[1, 1]}
      style={styles.button}
    >
      <Text style={styles.buttonText}>{label}</Text>
    </LinearGradient>
  </TouchableOpacity>
);

const styles = StyleSheet.create({
  background: {
    flex: 1,
  },
  overlay: {
    flex: 1,
    backgroundColor: 'rgba(0,0,0,0.6)',
    paddingHorizontal: 24,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    color: '#fff',
    fontSize: 28,
    fontFamily: 'Inter_700Bold',
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
    color: '#fff',
    fontSize: 18,
    fontFamily: 'Inter_600SemiBold',
  },
});
