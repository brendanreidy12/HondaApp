import React, { useState, useEffect } from 'react';
import axios from 'axios';
import CarItem from '../Caritem/index.js';
import CustomBackground from '../CustomBackground/CustomBackground.js';
import DashboardScreen from '../DashboardScreen/DashboardScreen.js';

const HomeScreen = ({ navigation }) => {
  const [locked, setLocked] = useState(true);
  const [climateOn, setClimateOn] = useState(false);
  const [range, setRange] = useState(null);

  const fetchLockStatus = () => {
    axios.get('http://10.0.2.2:3000/lockstatus')
      .then(response => {
        setLocked(response.data.locked);
      })
      .catch(error => {
        console.log(error);
      });
  };

  const fetchClimateStatus = () => {
    axios.get('http://10.0.2.2:3000/climatestatus')
      .then(response => {
        setClimateOn(response.data.climateOn);
      })
      .catch(error => {
        console.log(error);
      });
  };

  const fetchRange = () => {
    axios.get('http://10.0.2.2:3000/range')
      .then(response => {
        setRange(response.data.range);
      })
      .catch(error => {
        console.log(error);
      });
  };

  useEffect(() => {
    fetchLockStatus();
    fetchClimateStatus();
    fetchRange();
  }, []);

  return (
    <CustomBackground>
      <CarItem
        navigation={navigation}
        locked={locked}
        climateOn={climateOn}
        fetchLockStatus={fetchLockStatus}
        fetchClimateStatus={fetchClimateStatus}
      />
      <DashboardScreen range={range} />
    </CustomBackground>
  );
};

export default HomeScreen;
