import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function AnalyticsScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>📊 Analytics</Text>

      <View style={styles.card}>
        <Text style={styles.metricLabel}>Total Bookings</Text>
        <Text style={styles.metricValue}>124</Text>
      </View>

      <View style={styles.card}>
        <Text style={styles.metricLabel}>Referrals Used</Text>
        <Text style={styles.metricValue}>58</Text>
      </View>

      <View style={styles.card}>
        <Text style={styles.metricLabel}>Active Users</Text>
        <Text style={styles.metricValue}>342</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 24,
    backgroundColor: '#f9f9f9',
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'center',
    color: '#007AFF',
  },
  card: {
    backgroundColor: '#fff',
    padding: 24,
    borderRadius: 14,
    elevation: 3,
    marginBottom: 16,
    alignItems: 'center',
  },
  metricLabel: {
    fontSize: 16,
    color: '#666',
  },
  metricValue: {
    fontSize: 32,
    fontWeight: 'bold',
    color: '#333',
  },
});
