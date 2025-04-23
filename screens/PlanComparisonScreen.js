import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, ScrollView } from 'react-native';

export default function PlanComparisonScreen() {
  return (
    <ScrollView style={styles.container}>
      <Text style={styles.title}>Compare Plans</Text>

      <View style={styles.row}>
        <Text style={styles.header}>Feature</Text>
        <Text style={styles.header}>Basic</Text>
        <Text style={styles.header}>Plus</Text>
        <Text style={styles.header}>Premium</Text>
      </View>

      <View style={styles.row}>
        <Text style={styles.feature}>2 Free Tune-Ups / Yr</Text>
        <Text style={styles.check}>✔️</Text>
        <Text style={styles.check}>✔️</Text>
        <Text style={styles.check}>✔️</Text>
      </View>

      <View style={styles.row}>
        <Text style={styles.feature}>Refer-a-Friend Bonus</Text>
        <Text style={styles.check}>✔️</Text>
        <Text style={styles.check}>✔️</Text>
        <Text style={styles.check}>✔️</Text>
      </View>

      <View style={styles.row}>
        <Text style={styles.feature}>Talk to a Tech</Text>
        <Text style={styles.check}>$9.95</Text>
        <Text style={styles.check}>$4.95</Text>
        <Text style={styles.check}>FREE</Text>
      </View>

      <View style={styles.row}>
        <Text style={styles.feature}>Priority Scheduling</Text>
        <Text style={styles.check}>—</Text>
        <Text style={styles.check}>✔️</Text>
        <Text style={styles.check}>✔️</Text>
      </View>

      <View style={styles.row}>
        <Text style={styles.feature}>Parts Discount</Text>
        <Text style={styles.check}>—</Text>
        <Text style={styles.check}>5%</Text>
        <Text style={styles.check}>10%</Text>
      </View>

      <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonText}>Upgrade My Plan</Text>
      </TouchableOpacity>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingHorizontal: 16,
    paddingTop: 24,
  },
  title: {
    fontSize: 26,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 24,
  },
  row: {
    flexDirection: 'row',
    borderBottomWidth: 1,
    borderColor: '#eee',
    paddingVertical: 12,
    alignItems: 'center',
  },
  header: {
    flex: 1,
    fontWeight: 'bold',
    color: '#333',
    fontSize: 14,
    textAlign: 'center',
  },
  feature: {
    flex: 1,
    color: '#555',
    fontSize: 14,
  },
  check: {
    flex: 1,
    textAlign: 'center',
    fontSize: 14,
    color: '#007AFF',
  },
  button: {
    marginTop: 30,
    marginBottom: 40,
    backgroundColor: '#007AFF',
    paddingVertical: 16,
    borderRadius: 12,
    alignItems: 'center',
  },
  buttonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
});
