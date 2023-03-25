// components/CustomBackground/CustomBackground.js

import React from 'react';
import { ImageBackground, StyleSheet } from 'react-native';

const CustomBackground = ({ children }) => {
  return (
    <ImageBackground
      source={require('../../assets/Images/gradient.jpg')}
      style={styles.background}
    >
      {children}
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  background: {
    flex: 1,
    resizeMode: 'cover',
  },
});

export default CustomBackground;
