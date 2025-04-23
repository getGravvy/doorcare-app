import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';

export default function BookingSuccessScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <Image
        source={require('../assets/images/success_checkmark.png')}
        style={styles.image}
        resizeMode="contain"
      />
      <Text style={styles.title}>Booking Confirmed!</Text>
      <Text style={styles.subtitle}>Thanks for trusting DoorCare — we’ll see you soon.</Text>

      <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('MainMenuScreen')}>
        <Text style={styles.buttonText}>Back to Home</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 24,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f4f4f4',
  },
  image: {
    width: 120,
    height: 120,
    marginBottom: 24,
  },
  title: {
    fontSize: 26,
    fontWeight: 'bold',
    marginBottom: 10,
    color: '#333',
  },
  subtitle: {
    fontSize: 16,
    color: '#666',
    textAlign: 'center',
    marginBottom: 30,
  },
  button: {
    backgroundColor: '#007AFF',
    paddingVertical: 14,
    paddingHorizontal: 30,
    borderRadius: 12,
  },
  buttonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: '600',
  },
});
