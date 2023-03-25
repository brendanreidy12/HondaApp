import React, { useState, useEffect } from 'react';
import axios from 'axios';
import CarItem from '../Caritem/index.js';
import CustomBackground from '../CustomBackground/CustomBackground.js';

const HomeScreen = ({ navigation }) => {
  const [locked, setLocked] = useState(true);
  const [climateOn, setClimateOn] = useState(false);

  useEffect(() => {
    axios.get('http://10.0.2.2:3000/lockstatus')
      .then(response => {
        setLocked(response.data.locked);
      })
      .catch(error => {
        console.log(error);
      });

    axios.get('http://10.0.2.2:3000/climatestatus')
      .then(response => {
        setClimateOn(response.data.climateOn);
      })
      .catch(error => {
        console.log(error);
      });
  }, []);

  return (
  <CustomBackground>
    <CarItem navigation={navigation} locked={locked} climateOn={climateOn} />
  </CustomBackground>
)};

export default HomeScreen;
