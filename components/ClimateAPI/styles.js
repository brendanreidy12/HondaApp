import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    buttonContainer: {
        width: '100%',
        padding: 20,
        flexDirection: 'row',
        allignItems: 'center',
        justifyContent: 'center'
      },
      button: {
        backgroundColor: 'grey',
        height: 60,
        width: 100,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 20,
      },
      buttonText: {
        color: 'white',
      },
      submitButton: {
        backgroundColor: 'grey',
        height: 60,
        width: 100,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 20,
      },
      submitButtonContainer: {
        width: '100%',
        padding: 20,
        flexDirection: 'row',
        allignItems: 'center',
        justifyContent: 'center'
      },
      text: {
        fontSize: 18,
        fontWeight: '500',
        color: 'white',
        textTransform: 'uppercase',
        justifyContent: 'center',
        alignItems: 'center',
      },
      picker: {
        fontSize: 20,
        fontWeight: '500',
        color: 'white',
        textTransform: 'uppercase',
        justifyContent: 'center',
        alignItems: 'center',
      },
      activeButton: {
        backgroundColor: 'black',
        color: 'black',
      }
});

export default styles;