import React, { useState } from 'react';
import {
  View,
  Image,
  TouchableOpacity,
  StyleSheet,
  Animated,
  Dimensions,
  Text,
} from 'react-native';

const { height } = Dimensions.get('window');

export default function GarageDoorIntroScreen({ navigation }) {
  const [doorSlideAnim] = useState(new Animated.Value(0));

  const handleOpenGarage = () => {
    Animated.timing(doorSlideAnim, {
      toValue: -height,
      duration: 1200,
      useNativeDriver: true,
    }).start(() => {
      navigation.replace('MainMenuScreen');
    });
  };

  return (
    <View style={styles.container}>
      <Animated.View style={[styles.doorContainer, { transform: [{ translateY: doorSlideAnim }] }]}>
        <Image
          source={require('../assets/images/garage_door_panel.png')}
          style={styles.doorImage}
          resizeMode="cover"
        />
        <TouchableOpacity style={styles.button} onPress={handleOpenGarage}>
          <Text style={styles.buttonText}>Open Garage</Text>
        </TouchableOpacity>
      </Animated.View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#333',
  },
  doorContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'flex-end',
  },
  doorImage: {
    position: 'absolute',
    width: '100%',
    height: '100%',
  },
  button: {
    marginBottom: 80,
    backgroundColor: '#007AFF',
    paddingVertical: 14,
    paddingHorizontal: 30,
    borderRadius: 10,
    elevation: 4,
  },
  buttonText: {
    color: '#fff',
    fontSize: 20,
    fontWeight: 'bold',
  },
});
