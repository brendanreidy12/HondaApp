import React, { useState, useEffect } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { Picker } from '@react-native-picker/picker';
import axios from 'axios';
import styles from './styles.js';

export const ClimateControl = () => {
  const [temperature, setTemperature] = useState(null);
  const [climateTimeRemaining, setClimateTimeRemaining] = useState(null);
  const [climateOn, setClimateOn] = useState(false);

  useEffect(() => {
    axios.get('http://10.0.2.2:3000/climateStatus')
      .then(response => {
        setClimateOn(response.data.climateOn);
        setTemperature(response.data.temperature);
        setClimateTimeRemaining(response.data.climateTimeRemaining);
      })
      .catch(error => {
        console.log(error);
      });
  }, []);

  const handleSubmit = () => {
    if (temperature !== null) {
      axios.post('http://10.0.2.2:3000/setTemperature', { temperature })
        .catch(error => {
          console.log(error);
        });
    }

    if (climateTimeRemaining !== null) {
      axios.post('http://10.0.2.2:3000/setClimateTime', { climateTimeRemaining })
        .catch(error => {
          console.log(error);
        });
    }

    axios.post('http://10.0.2.2:3000/climatestart', { temperature, climateTimeRemaining })
      .then(() => {
        setClimateOn(true);
      })
      .catch(error => {
        console.log(error);
      });
  };
  const handleClimateStop = () => {
    axios.post('http://10.0.2.2:3000/climatestop')
      .then(() => {
        setClimateOn(false);
      })
      .catch(error => {
        console.log(error);
      });
  };

  return (
    <View>
      {climateOn ? (
        <View>
          <Text style={styles.text}>Climate is on</Text>
          <Text style={styles.text}>Temperature: {temperature}°C</Text>
          <Text style={styles.text}>Climate Time Remaining: {climateTimeRemaining} min</Text>
          <TouchableOpacity
            style={styles.stopButton}
            onPress={handleClimateStop}
          >
            <Text style={styles.buttonText}>Stop Climate</Text>
          </TouchableOpacity>
        </View>
      ) : (
        <>
          <Text style={styles.text}>Temperature</Text>
          <Picker
            selectedValue={temperature}
            onValueChange={setTemperature}
            style={styles.picker}
          >
            {Array.from({ length: 14 }, (_, i) => i + 16).map((temp) => (
              <Picker.Item key={temp} label={`${temp}°C`} value={temp} />
            ))}
          </Picker>

          <Text style={styles.text}>Climate Time Remaining</Text>
          <View style={styles.buttonContainer}>
            {([10, 20, 30]).map((time) => (
              <TouchableOpacity
                key={time}
                style={styles.button}
                onPress={() => setClimateTimeRemaining(time)}
              >
                <Text style={styles.buttonText}>{time} min</Text>
              </TouchableOpacity>
            ))}
          </View>
          <TouchableOpacity
            style={styles.submitButton}
            onPress={handleSubmit}
          >
            <Text style={styles.buttonText}>Submit</Text>
          </TouchableOpacity>
        </>
      )}
    </View>
  );
};