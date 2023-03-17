import React, { useState, useEffect } from 'react';
import { Button, Text, View } from 'react-native';
import axios from 'axios';
import styles from './styles';


export const LockScreen = () => {
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
          <Text>Loading...</Text>
        </View>
      );
    }
  
    return (
      <View>
        <Text>The car is {locked ? 'locked' : 'unlocked'}</Text>
        <Button
        style={styles.button}
        title={locked ? 'Unlock' : 'Lock'}
        onPress={locked ? handleUnlockPress : handleLockPress} />
      </View>
    );
};

