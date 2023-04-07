import React, { useState } from 'react';
import { Button, Text, View } from 'react-native';
import axios from 'axios';
import styles from './styles';

const baseURL = 'http://localhost:3000';

export function refresh({ locked, onPress }) {
  const handlePress = () => {
    axios.post(`${baseURL}/lock`)
      .then(response => onPress(response.data.locked))
      .catch(error => console.log(error));
  };

  return (
    <Button title={locked ? 'Unlock' : 'Lock'} onPress={handlePress} />
  );
}

export function LockStatus({ locked }) {
  return (
    <Text style={styles.text}>Car is {locked ? 'locked' : 'unlocked'}</Text>
  );
}
