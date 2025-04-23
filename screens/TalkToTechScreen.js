import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Alert } from 'react-native';

export default function TalkToTechScreen() {
  const handleChat = () => {
    Alert.alert('Starting Chat', 'A tech will be with you shortly.');
  };

  const handleVideo = () => {
    Alert.alert('Starting Video Call', 'Launching video support...');
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Talk to a Tech</Text>
      <Text style={styles.subtitle}>
        Get help fast. Choose chat or a live video session with one of our pros.
      </Text>

      <TouchableOpacity style={styles.button} onPress={handleChat}>
        <Text style={styles.buttonText}>Start Chat</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.buttonOutline} onPress={handleVideo}>
        <Text style={styles.buttonOutlineText}>Start Video Call</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 24,
    justifyContent: 'center',
    backgroundColor: '#fff',
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    marginBottom: 14,
    textAlign: 'center',
  },
  subtitle: {
    fontSize: 16,
    marginBottom: 30,
    textAlign: 'center',
    color: '#666',
  },
  button: {
    backgroundColor: '#007AFF',
    paddingVertical: 16,
    borderRadius: 14,
    alignItems: 'center',
    marginBottom: 16,
  },
  buttonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
  buttonOutline: {
    borderColor: '#007AFF',
    borderWidth: 2,
    paddingVertical: 16,
    borderRadius: 14,
    alignItems: 'center',
  },
  buttonOutlineText: {
    color: '#007AFF',
    fontSize: 18,
    fontWeight: 'bold',
  },
});
