import React from 'react';
import { View, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import { useNavigation } from '@react-navigation/native';
import styles from './styles';
import CenterImage from '../CenterCar';

const CarItem = ({ locked, climateOn, fetchLockStatus, fetchClimateStatus }) => {
  const navigation = useNavigation();

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
      </View>
      <View style={styles.functionButtonContainer}>
        <TouchableOpacity
          style={[
            styles.circularButton,
            climateOn ? { backgroundColor: 'white', borderColor: 'black', borderWidth: 1 } : null,
          ]}
          onPress={() => navigation.navigate('ClimateControl')}
          accessible={true}
          accessibilityLabel="climate-button"
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
          accessibilityLabel="lock-button"
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
