import { View, Text, StyleSheet } from 'react-native';
import CustomBackground from '../CustomBackground/CustomBackground';
import styles from './styles';
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import CarItem from '../Caritem/index.js';

const DashboardScreen = () => (
  <CustomBackground>
    <View style={styles.container}>
      <Text style={styles.text}>Range: 46 miles</Text>
      <Text style={styles.text}>Battery Percentage: 35%</Text>
    </View>
  </CustomBackground>
);

export default DashboardScreen;
