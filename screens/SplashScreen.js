import React, { useEffect } from 'react';
import { View, Image, StyleSheet, ActivityIndicator } from 'react-native';
import AppText from '../components/AppText';
import { COLORS } from '../constants/theme';

export default function SplashScreen({ navigation }) {
  useEffect(() => {
    const timeout = setTimeout(() => {
      navigation.replace('GarageDoorIntroScreen');
    }, 2000);

    return () => clearTimeout(timeout);
  }, []);

  return (
    <View style={styles.container}>
      <Image
        source={require('../assets/images/doorcare_3d_logo.png')}
        style={styles.logo}
        resizeMode="contain"
      />
      <AppText weight="semiBold" style={styles.loadingText}>Loading your garage experience...</AppText>
      <ActivityIndicator size="large" color={COLORS.primary} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f4f4f4',
    alignItems: 'center',
    justifyContent: 'center',
  },
  logo: {
    width: 250,
    height: 250,
    marginBottom: 20,
  },
  loadingText: {
    marginBottom: 16,
    fontSize: 16,
    color: '#444',
  },
});
