import React, { useState } from 'react';
import {View, Text, ImageBackground, Divider, Flex, Button} from 'react-native';
import styles from './styles';
import StyledButton from "../LockUnlock";
import CenterImage from "../CenterCar";
import { LockScreen } from "../DoorStatusAPI";

const CarItem = (props) => {
    return (
        <View style={styles.carContainer}>
        
        <ImageBackground source={require('../../assets/Images/gradient.jpg')}
        style={styles.image}
      />

        <View style={styles.titles}>
          <Text accessibilityLabel='plate' style={styles.plate}>RE20 WTL</Text>
          <Text accessibilityLabel='Model' style={styles.title}>Honda e</Text>
          <View style={styles.refreshButton}>
            <Button accessibilityLabel='refresh' title="Refresh" />
            <Text accessibilityLabel='last-updated' style={styles.subtitle}>Updated 45s ago</Text>
          </View>
        </View>

        <LockScreen />

        <StyledButton />

        <CenterImage />

      </View>
    );
};

export default CarItem;