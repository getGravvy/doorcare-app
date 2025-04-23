import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Alert } from 'react-native';

export default function PricingEditorScreen() {
  const [basic, setBasic] = useState('18');
  const [plus, setPlus] = useState('29');
  const [premium, setPremium] = useState('45');

  const handleSave = () => {
    Alert.alert('Pricing Updated', 'New plan pricing saved successfully.');
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Edit Service Plan Pricing</Text>

      <TextInput
        style={styles.input}
        value={basic}
        onChangeText={setBasic}
        keyboardType="numeric"
        placeholder="Basic Plan ($/month)"
      />

      <TextInput
        style={styles.input}
        value={plus}
        onChangeText={setPlus}
        keyboardType="numeric"
        placeholder="Plus Plan ($/month)"
      />

      <TextInput
        style={styles.input}
        value={premium}
        onChangeText={setPremium}
        keyboardType="numeric"
        placeholder="Premium Plan ($/month)"
      />

      <TouchableOpacity style={styles.button} onPress={handleSave}>
        <Text style={styles.buttonText}>Save Changes</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 24,
    backgroundColor: '#fff',
    justifyContent: 'center',
  },
  title: {
    fontSize: 26,
    fontWeight: 'bold',
    marginBottom: 28,
    textAlign: 'center',
    color: '#333',
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 12,
    padding: 14,
    fontSize: 16,
    marginBottom: 16,
  },
  button: {
    backgroundColor: '#007AFF',
    paddingVertical: 16,
    borderRadius: 12,
    alignItems: 'center',
    marginTop: 12,
  },
  buttonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
});
