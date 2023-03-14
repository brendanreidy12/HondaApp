import React from 'react';
import {View, Text, Pressable} from 'react-native';
import styles from './styles';

const StyledButton = (props) => {
    return (
        <View style={styles.container}>
            <Pressable
                style={styles.button}
                onPress={() => {
                    console.warn('Lock')
                }}
            >
                <Text style={styles.text}>  Press to Lock</Text>
            </Pressable>
        </View>
    );
};

export default StyledButton;
