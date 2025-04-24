import React, { useState } from 'react';
import { View, Image, StyleSheet, TouchableOpacity, Animated, Dimensions } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import AppText from '../components/AppText';
import { COLORS } from '../constants/theme';

const { height } = Dimensions.get('window');

export default function GarageDoorIntroScreen() {
  const navigation = useNavigation();
  const [doorSlideAnim] = useState(new Animated.Value(0));
  const [doorOpened, setDoorOpened] = useState(false);

  const handleOpenGarage = () => {
    Animated.timing(doorSlideAnim, {
      toValue: -height,
      duration: 1200,
      useNativeDriver: true,
    }).start(() => {
      setDoorOpened(true);
      navigation.replace('MainMenuScreen');
    });
  };

  return (
    <View style={styles.container}>
      <Animated.View style={[styles.door, { transform: [{ translateY: doorSlideAnim }] }]}>
        <Image
          source={require('../assets/images/garage_door_panel.png')}
          style={styles.doorImage}
          resizeMode="cover"
        />
      </Animated.View>

      {!doorOpened && (
        <View style={styles.overlay}>
          <AppText weight="bold" style={styles.welcomeText}>Welcome to DoorCare</AppText>
          <TouchableOpacity style={styles.button} onPress={handleOpenGarage}>
            <AppText weight="semiBold" style={styles.buttonText}>Open Garage</AppText>
          </TouchableOpacity>
          <TouchableOpacity style={styles.adminLink} onPress={() => navigation.navigate('AdminLoginScreen')}>
            <AppText weight="semiBold" style={styles.adminText}>Admin Login</AppText>
          </TouchableOpacity>
        </View>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000',
  },
  door: {
    ...StyleSheet.absoluteFillObject,
    zIndex: 1,
  },
  doorImage: {
    width: '100%',
    height: '100%',
  },
  overlay: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    justifyContent: 'center',
    alignItems: 'center',
    zIndex: 2,
    paddingHorizontal: 24,
  },
  welcomeText: {
    color: COLORS.text,
    fontSize: 24,
    marginBottom: 24,
    textAlign: 'center',
  },
  button: {
    backgroundColor: COLORS.primary,
    paddingVertical: 14,
    paddingHorizontal: 28,
    borderRadius: 20,
    marginBottom: 16,
  },
  buttonText: {
    fontSize: 18,
    color: COLORS.text,
    textAlign: 'center',
  },
  adminLink: {
    marginTop: 12,
  },
  adminText: {
    fontSize: 14,
    color: '#cccccc',
    textAlign: 'center',
  },
});
