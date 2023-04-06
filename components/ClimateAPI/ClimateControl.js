import React, { useState, useEffect } from 'react';
import { View, Text, TouchableOpacity, Platform } from 'react-native';
import { Picker } from '@react-native-picker/picker';
import axios from 'axios';
import styles from './styles.js';
import CustomBackground from '../CustomBackground/CustomBackground.js';
import PickerAndroid from 'react-native-wheel-picker-android';
import { FlatList } from 'react-native-gesture-handler';


// Use localhost instead of 10.0.2.2 for iOS
const baseURL = Platform.OS === 'android' ? 'http://10.0.2.2:3000' : 'http://localhost:3000';

export default function ClimateControl() {
  const [temperature, setTemperature] = useState(16);
  const [climateTimeRemaining, setClimateTimeRemaining] = useState(20);
  const [climateOn, setClimateOn] = useState(false);

  useEffect(() => {
    axios.get(`${baseURL}/climateStatus`)
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
      axios.post(`${baseURL}/setTemperature`, { temperature })
        .catch(error => {
          console.log(error);
        });
    }

    if (climateTimeRemaining !== null) {
      axios.post(`${baseURL}/setClimateTime`, { climateTimeRemaining })
        .catch(error => {
          console.log(error);
        });
    }

    axios.post(`${baseURL}/climatestart`, { temperature, climateTimeRemaining })
      .then(() => {
        setClimateOn(true);
      })
      .catch(error => {
        console.log(error);
      });
  };
  const handleClimateStop = () => {
    axios.post(`${baseURL}/climatestop`)
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
        <View style={styles.pickerContainer}>
          <FlatList
            horizontal
            data={Array.from({ length: 14 }, (_, i) => i + 16)}
            keyExtractor={(item) => item.toString()}
            renderItem={({ item }) => (
        <TouchableOpacity
          style={[
            styles.pickerItem,
            item === temperature ? styles.activePickerItem : null,
          ]}
          onPress={() => setTemperature(item)}
          accessible={true}
          accessibilityLabel={`temp-${item}`}
        >
        <Text
          style={[
            styles.pickerItemText,
            item === temperature ? styles.activePickerItemText : null,
          ]}
        >
                  {item}°C
                </Text>
              </TouchableOpacity>
            )}
            contentContainerStyle={styles.pickerContentContainer}
            snapToAlignment="center"
            snapToInterval={60}
            decelerationRate="fast"
          />
        </View>

            <Text style={styles.text}>Preconditioning Climate Time</Text>
            <View style={styles.buttonContainer}>
              {([10, 20, 30]).map((time) => (
                <TouchableOpacity
                  key={time}
                  style={[
                    styles.button,
                    climateTimeRemaining === time ? styles.activeButton : null,
                  ]}
                  onPress={() => setClimateTimeRemaining(time)}
                  accessible={true}
                  accessibilityLabel={`Set time to ${time} minutes`}
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

