import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, ScrollView } from 'react-native';

export default function AdminDashboardScreen({ navigation }) {
  return (
    <ScrollView style={styles.container}>
      <Text style={styles.title}>Admin Dashboard</Text>

      <TouchableOpacity
        style={styles.card}
        onPress={() => navigation.navigate('AnalyticsScreen')}
      >
        <Text style={styles.cardTitle}>📊 View Analytics</Text>
        <Text style={styles.cardSubtitle}>See usage trends, bookings & referrals</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.card}
        onPress={() => navigation.navigate('PricingEditorScreen')}
      >
        <Text style={styles.cardTitle}>💰 Edit Service Plans</Text>
        <Text style={styles.cardSubtitle}>Customize prices and perks</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.card}
        onPress={() => navigation.navigate('LogoUploaderScreen')}
      >
        <Text style={styles.cardTitle}>📁 Upload Company Logo</Text>
        <Text style={styles.cardSubtitle}>Brand each profile page</Text>
      </TouchableOpacity>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 24,
    backgroundColor: '#F6F8FB',
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    marginBottom: 24,
    textAlign: 'center',
    color: '#333',
  },
  card: {
    backgroundColor: '#fff',
    padding: 20,
    borderRadius: 14,
    marginBottom: 20,
    elevation: 3,
  },
  cardTitle: {
    fontSize: 18,
    fontWeight: '600',
    marginBottom: 6,
    color: '#007AFF',
  },
  cardSubtitle: {
    fontSize: 14,
    color: '#666',
  },
});
