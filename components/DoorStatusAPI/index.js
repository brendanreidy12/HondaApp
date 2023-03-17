import React, { useState, useEffect } from 'react';
import { Button, Text, View, Pressable } from 'react-native';
import axios from 'axios';
import styles from './styles.js';

//Use localhost instead of 10.0.2.2 for iOS
// Base URL not yet set up, change values manually instead
const baseURL = 'http://localhost:3000'

export const LockScreen = () => {
    const [locked, setLocked] = useState(null);
  
    useEffect(() => {
      axios.get('10.0.2.2/lockstatus')
        .then(response => {
          setLocked(response.data.locked);
        })
        .catch(error => {
          console.log(error);
        });
    }, );
  
    const handleLockPress = () => {
      axios.post('$10.0.2.2/lock')
        .then(response => {
          setLocked(response.data.locked);
        })
        .catch(error => {
          console.log(error);
        });
    };
  
    const handleUnlockPress = () => {
      axios.post('10.0.2.2/unlock')
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
          <Text>Loading...</Text>
        </View>
      );
    }
  
    return (
      <View style={styles.buttoncontainer}>
        <Text style={styles.text}>The car is {locked ? 'locked' : 'unlocked'}</Text>
        <Button
        style={styles.button}
        title={locked ? 'Unlock' : 'Lock'}
        onPress={locked ? handleUnlockPress : handleLockPress} />
      </View>
    );
};

