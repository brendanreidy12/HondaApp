import React from 'react';
import {View, Text, ImageBackground, Divider, Flex, Button} from 'react-native';
import styles from './styles';
import StyledButton from "../LockUnlock";
import CenterImage from "../CenterCar";

const CarItem = (props) => {
    return (
        <View style={styles.carContainer}>
        
        <ImageBackground source={require('../../assets/Images/gradient.jpg')}
        style={styles.image}
      />

        <View style={styles.titles}>
          <Text style={styles.plate}>RE20 WTL</Text>
          <Text style={styles.title}>Honda e</Text>
          <View style={styles.refreshButton}>
            <Button title="Refresh" />
            <Text style={styles.subtitle}>Updated 45s ago</Text>
          </View>
        </View>

        <StyledButton />

        <CenterImage />

      </View>
    );
};

export default CarItem;