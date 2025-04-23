import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Clipboard, Alert } from 'react-native';

export default function ReferAFriendScreen() {
  const [referralCode] = useState('DOORCARE25');

  const handleCopy = () => {
    Clipboard.setString(referralCode);
    Alert.alert('Copied!', 'Your referral code has been copied to the clipboard.');
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Refer a Friend</Text>
      <Text style={styles.description}>
        Share your code below and give your friend $25 off their first service. You’ll get $25 too!
      </Text>

      <TouchableOpacity style={styles.codeBox} onPress={handleCopy}>
        <Text style={styles.code}>{referralCode}</Text>
        <Text style={styles.copyText}>Tap to Copy</Text>
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
    marginBottom: 12,
    color: '#333',
    textAlign: 'center',
  },
  description: {
    fontSize: 16,
    marginBottom: 32,
    color: '#666',
    textAlign: 'center',
  },
  codeBox: {
    backgroundColor: '#007AFF',
    paddingVertical: 20,
    borderRadius: 14,
    alignItems: 'center',
  },
  code: {
    color: '#fff',
    fontSize: 22,
    fontWeight: 'bold',
  },
  copyText: {
    marginTop: 6,
    color: '#fff',
    fontSize: 14,
    opacity: 0.8,
  },
});
