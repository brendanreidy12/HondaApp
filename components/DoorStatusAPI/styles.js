import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    text: {
        fontSize: 16,
        fontWeight: '500',
        color: 'white',
        textTransform: 'uppercase',
      },
    buttonContainer: {
        width: '100%',
        padding: 0,
        flex: 0,
        justifyContent: 'center',
        allignItems: 'center',
      },
      button: {
        backgroundColor: 'grey',
        height: 300,
        width: 300,
        justifyContent: 'center',
        borderRadius: 150,
        marginVertical: 200,
        marginHorizontal: 35,
      },
      buttonText: {
        fontSize: 40,
        fontWeight: '500',
        color: 'white',
        textTransform: 'uppercase'
      },
      statusContainer: {
        width: '100%',
        padding: 0,
        flex: 0,
      },
});

export default styles;