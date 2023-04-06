import React, { useState, useEffect } from 'react';
import { View, TouchableOpacity, Text } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import axios from 'axios';
import { useNavigation } from '@react-navigation/native';
import styles from './styles';
import CenterImage from '../CenterCar';

const CarItem = ({ locked, climateOn, fetchLockStatus, fetchClimateStatus }) => {
  const navigation = useNavigation();
  
  const [range, setRange] = useState(null);

  useEffect(() => {
    fetchRange();
  }, []);

  const fetchRange = () => {
    axios.get('http://10.0.2.2:3000/range')
      .then(response => {
        setRange(response.data.range);
      })
      .catch(error => {
        console.log(error);
      });
  };

  const getRangeColor = () => {
    if (range >= 0 && range <= 20) return 'red';
    if (range >= 21 && range <= 35) return 'orange';
    return 'white';
  };

  return (
    <View style={styles.carContainer}>
      <View style={styles.topContainer}>
        <TouchableOpacity
          style={[
            styles.refreshButton
          ]}
          onPress={() => {
            fetchLockStatus();
            fetchClimateStatus();
            fetchRange(); // Add this line
          }}
          accessible={true}
          accessibilityLabel="refresh-button"
          accessibilityRole="button"
        >
          <Icon
            name="rotate-right"
            size={20}
          />
        </TouchableOpacity>
        <View style={styles.rangeContainer}>
          <Text style={[styles.rangeText, { color: getRangeColor() }]}>
            Range: {range} miles
          </Text>
        </View>
      </View>
      <View style={styles.functionButtonContainer}>
        <TouchableOpacity
          style={[
            styles.circularButton,
            climateOn ? { backgroundColor: 'white', borderColor: 'black', borderWidth: 1 } : null,
          ]}
          onPress={() => navigation.navigate('ClimateControl')}
          accessible={true}
          accessibilityLabel="climate-icon-button"
          accessibilityRole="button"
        >
          <Icon
            name="snowflake-o"
            size={60}
            color={climateOn ? 'red' : 'black'}
          />
        </TouchableOpacity>
        <TouchableOpacity
          style={[
            styles.circularButton,
            !locked ? { backgroundColor: 'white', borderColor: 'black', borderWidth: 1 } : null,
          ]}
          onPress={() => navigation.navigate('LockScreen')}
          accessible={true}
          accessibilityLabel="lock-icon-button"
          accessibilityRole="button"
        >
          <Icon
            name={locked ? 'lock' : 'unlock'}
            size={60}
            color={!locked ? 'red' : 'black'}
          />
        </TouchableOpacity>
      </View>
      <CenterImage />
    </View>
  );
};

export default CarItem;
