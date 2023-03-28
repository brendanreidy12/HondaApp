import React, { useState, useEffect } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { Picker } from '@react-native-picker/picker';
import axios from 'axios';
import styles from './styles.js';
import CustomBackground from '../CustomBackground/CustomBackground.js';

export default function ClimateControl() {
  const [temperature, setTemperature] = useState(16);
  const [climateTimeRemaining, setClimateTimeRemaining] = useState(20);
  const [climateOn, setClimateOn] = useState(false);

  useEffect(() => {
    axios.get('http://10.0.2.2:3000/climateStatus')
      .then(response => {
        setClimateOn(response.data.climateOn);
        setTemperature(response.data.temperature || 16);
        setClimateTimeRemaining(response.data.climateTimeRemaining || 20);
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
    <CustomBackground>
      <View>
        {climateOn ? (
          <View>
            <Text accessibilityLabel='climate-status' style={styles.text}>Climate is on</Text>
            <Text accessibilityLabel='temp-status' style={styles.text}>Temperature: {temperature}°C</Text>
            <Text accessibilityLabel='climate-time-left' style={styles.text}>Climate Time Remaining: {climateTimeRemaining} min</Text>
            <TouchableOpacity
              accessibilityLabel='climate-stop'
              style={styles.submitButton}
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
              accessibilityLabel="temp-picker"
              style={styles.picker}
            >
              {Array.from({ length: 14 }, (_, i) => i + 16).map((temp) => (
                <Picker.Item key={temp} label={`${temp}°C`} value={temp} />
              ))}
            </Picker>

            <Text style={styles.text}>Preconditioning Climate Time</Text>
            <View style={styles.buttonContainer}>
              {([10, 20, 30]).map((time) => (
                <TouchableOpacity
                accessibilityLabel='climate-time-set'  
                key={time}
                  style={[
                    styles.button,
                    climateTimeRemaining === time ? styles.activeButton : null,
                  ]}
                  onPress={() => setClimateTimeRemaining(time)}
                >
                  <Text style={styles.buttonText}>{time} min</Text>
                </TouchableOpacity>
              ))}
            </View>
            <View style={styles.submitButtonContainer}>
              <TouchableOpacity
                style={styles.submitButton}
                accessibilityLabel="climate-submit"
                onPress={handleSubmit}
              >
                <Text style={styles.buttonText}>Submit</Text>
              </TouchableOpacity>
            </View>
          </>
        )}
      </View>
    </CustomBackground>
  );
};