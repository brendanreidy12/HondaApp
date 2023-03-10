import React from 'react';
import {View, Text, ImageBackground} from 'react-native';
import styles from './styles';

const CarItem = (props) => {
    return (
        <View style={styles.carContainer}>
        
        <ImageBackground source={require('../../assets/Images/gradient.jpg')}
        style={styles.image}
      />

        <View style={styles.titles}>
          <Text style={styles.title}>Honda e</Text>
          <Text style={styles.subtitle}>Starting at £38,000</Text>
        </View>

      </View>
    );
};

export default CarItem;