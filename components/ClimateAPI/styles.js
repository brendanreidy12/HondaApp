import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    buttoncontainer: {
        width: '100%',
        padding: 10,
        flexDirection: 'row',
      },
      button: {
        backgroundColor: 'blue',
        height: 30,
        width: 30,
        alignItems: 'center',
        flexDirection: 'row',
        borderRadius: 30,
      },
      text: {
        fontSize: 12,
        fontWeight: '500',
        color: 'white',
        textTransform: 'uppercase',
        justifyContent: 'center',
        alignItems: 'center',
      },
});

export default styles;