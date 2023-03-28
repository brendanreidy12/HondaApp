import React, { useState, useEffect } from 'react';
import { Button, Text, View, Pressable, TouchableOpacity } from 'react-native';
import axios from 'axios';
import styles from './styles.js';
import CustomBackground from '../CustomBackground/CustomBackground.js';

//Use localhost instead of 10.0.2.2 for iOS
// Base URL not yet set up, change values manually instead
const baseURL = 'http://localhost:3000'

export default function LockScreen() {
    const [locked, setLocked] = useState(null);
  
    useEffect(() => {
      axios.get('http://10.0.2.2:3000/lockstatus')
        .then(response => {
          setLocked(response.data.locked);
        })
        .catch(error => {
          console.log(error);
        });
    }, );
  
    const handleLockPress = () => {
      axios.post('http://10.0.2.2:3000/lock')
        .then(response => {
          setLocked(response.data.locked);
        })
        .catch(error => {
          console.log(error);
        });
    };
  
    const handleUnlockPress = () => {
      axios.post('http://10.0.2.2:3000/unlock')
        .then(response => {
          setLocked(response.data.locked);
        })
        .catch(error => {
          console.log(error);
        });
    };
  
    if (locked === null) {
      return (
        <View>
          <Text accessibilityLabel='loading-status' styles={styles.text}>Loading...</Text>
        </View>
      );
    }
  
    return (
      <CustomBackground>
        <View style={styles.statusContainer}>
          <Text accessibilityLabel="lock-unlock-status" style={styles.text}>
            The car is {locked ? 'locked' : 'unlocked'}
          </Text>
        </View>
        <View style={styles.buttonContainer}>
          <TouchableOpacity
            accessibilityLabel="lock-unlock-button"
            style={styles.button}
            onPress={locked ? handleUnlockPress : handleLockPress}
          >
            <Text 
              accessibilityLabel='lock-unlock-button-status'
              style={styles.buttonText}>{locked ? 'Unlock' : 'Lock'}
            </Text>
          </TouchableOpacity>
        </View>
      </CustomBackground>
    );
};

