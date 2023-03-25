// Caritem/index.js

import React from 'react';
import { ImageBackground, Text, View, Pressable } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome'; // Add this line
import styles from './styles';
import CenterImage from '../CenterCar';

const CarItem = ({ navigation }) => {
  return (
    <View style={styles.carContainer}>
      {/* ... */}
      <View style={styles.buttonContainer}>
        <Pressable
          style={styles.circularButton}
          onPress={() => navigation.navigate('ClimateControl')}
        >
          <Icon name="snowflake-o" size={30} color="white" />
        </Pressable>
        <Pressable
          style={styles.circularButton}
          onPress={() => navigation.navigate('LockScreen')}
        >
          <Icon name="lock" size={30} color="white" />
        </Pressable>
      </View>
      <CenterImage />
    </View>
  );
};

export default CarItem;
