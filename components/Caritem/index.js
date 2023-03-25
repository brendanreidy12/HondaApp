// Caritem/index.js

import React from 'react';
import { View, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import { useNavigation } from '@react-navigation/native';
import styles from './styles';
import CenterImage from '../CenterCar';

const CarItem = ({ locked, climateOn }) => {
  const navigation = useNavigation();

  return (
    <View style={styles.carContainer}>
      {/* ... */}
      <View style={styles.buttonContainer}>
        <TouchableOpacity
          style={[
            styles.circularButton,
            // Set the background color to white if climateOn is true, otherwise use the default color
            climateOn ? { backgroundColor: 'white', borderColor: 'black', borderWidth: 1 } : null,
          ]}
          onPress={() => navigation.navigate('ClimateControl')}
        >
          <Icon
            name="snowflake-o"
            size={20}
            // Set the icon color to red if climateControlStatus is true, otherwise use the default color
            color={climateOn ? 'red' : 'black'}
          />
        </TouchableOpacity>
        <TouchableOpacity
          style={[
            styles.circularButton,
            // Set the background color to white if locked is false, otherwise use the default color
            !locked ? { backgroundColor: 'white', borderColor: 'black', borderWidth: 1 } : null,
          ]}
          onPress={() => navigation.navigate('LockScreen')}
        >
          <Icon
            name={locked ? 'lock' : 'unlock'}
            size={20}
            // Set the icon color to red if locked is false, otherwise use the default color
            color={!locked ? 'red' : 'black'}
          />
        </TouchableOpacity>
      </View>
      <CenterImage />
    </View>
  );
};

export default CarItem;