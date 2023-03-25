// HomeScreen.js

import React from 'react';
import CarItem from '../Caritem/index.js';
import CustomBackground from '../CustomBackground/CustomBackground'; // Add this line

const HomeScreen = ({ navigation }) => {
  return (
    <CustomBackground>
      <CarItem navigation={navigation} />
    </CustomBackground>
  );
};

export default HomeScreen;
