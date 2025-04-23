import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, ImageBackground } from 'react-native';

export default function MainMenuScreen({ navigation }) {
  return (
    <ImageBackground
      source={require('../assets/images/garage_interior_bg.png')}
      style={styles.background}
      resizeMode="cover"
    >
      <View style={styles.overlay}>
        <Text style={styles.title}>Welcome to DoorCare</Text>

        <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('BookServiceScreen')}>
          <Text style={styles.buttonText}>Book a Service</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('ServiceHistoryScreen')}>
          <Text style={styles.buttonText}>Service History</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('ReferAFriendScreen')}>
          <Text style={styles.buttonText}>Refer a Friend</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('PlanComparisonScreen')}>
          <Text style={styles.buttonText}>Compare Plans</Text>
        </TouchableOpacity>
      </View>
    </ImageBackground>
  );
}

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
    fontWeight: 'bold',
    marginBottom: 40,
  },
  button: {
    width: '100%',
    backgroundColor: 'rgba(0, 122, 255, 0.8)',
    paddingVertical: 16,
    paddingHorizontal: 24,
    borderRadius: 16,
    marginBottom: 20,
    alignItems: 'center',
  },
  buttonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: '600',
  },
});
