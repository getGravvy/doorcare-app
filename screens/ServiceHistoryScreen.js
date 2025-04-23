import React from 'react';
import { View, Text, StyleSheet, FlatList } from 'react-native';

const mockData = [
  { id: '1', date: '2024-11-12', service: 'Spring Replacement' },
  { id: '2', date: '2024-05-05', service: 'Tune-Up & Inspection' },
  { id: '3', date: '2023-10-22', service: 'Roller & Cable Adjustment' },
];

export default function ServiceHistoryScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Service History</Text>

      <FlatList
        data={mockData}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View style={styles.historyItem}>
            <Text style={styles.date}>{item.date}</Text>
            <Text style={styles.service}>{item.service}</Text>
          </View>
        )}
      />
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
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  historyItem: {
    padding: 16,
    backgroundColor: '#fff',
    marginBottom: 12,
    borderRadius: 10,
    elevation: 2,
  },
  date: {
    fontSize: 16,
    color: '#666',
  },
  service: {
    fontSize: 18,
    fontWeight: '500',
    color: '#333',
  },
});
