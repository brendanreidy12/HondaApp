import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    buttoncontainer: {
        width: '100%',
        padding: 10,
        flex: 1,
      },
      button: {
        backgroundColor: 'blue',
        height: 100,
        width: 100,
        justifyContent: 'center',
        borderRadius: 50,
        marginVertical: 200,
        marginHorizontal: 35,
      },
      text: {
        fontSize: 12,
        fontWeight: '500',
        color: 'white',
        textTransform: 'uppercase',
        justifyContent: 'center',
        alignItems: 'center',
      },
      imagebackground: {
        width: '100%',
        height: '100%',
        resizeMode: 'cover',
        position: 'absolute',
      },
});

export default styles;