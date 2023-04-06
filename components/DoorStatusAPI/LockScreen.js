import React, { useState, useEffect } from 'react';
import { Button, Text, View, Pressable, TouchableOpacity, Platform } from 'react-native';
import axios from 'axios';
import styles from './styles.js';
import CustomBackground from '../CustomBackground/CustomBackground.js';

// Use "10.0.2.2" for Android and "localhost" for iOS devices
const baseURL = Platform.OS === 'android' ? 'http://10.0.2.2:3000' : 'http://localhost:3000';

export default function LockScreen() {
    const [locked, setLocked] = useState(null);
  
    useEffect(() => {
      axios.get(`${baseURL}/lockstatus`)
        .then(response => {
          setLocked(response.data.locked);
        })
        .catch(error => {
          console.log(error);
        });
    }, );
  
    const handleLockPress = () => {
      axios.post(`${baseURL}/lock`)
        .then(response => {
          setLocked(response.data.locked);
        })
        .catch(error => {
          console.log(error);
        });
    };
  
    const handleUnlockPress = () => {
      axios.post(`${baseURL}/unlock`)
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
          <Text accessibilityLabel='loading-status' style={styles.text}>Loading...</Text>
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

