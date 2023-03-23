import React from 'react';
import {View, Text, Image} from 'react-native';
import styles from './styles';

const CenterImage = (props) => {
    return (
        <View style={styles.container}>
            <Image
                accessibilityLabel='vehicle-image'
                style={styles.image}
                source={require('../../assets/Images/hondae.jpg')}
            />
        </View>
    );
};

export default CenterImage;