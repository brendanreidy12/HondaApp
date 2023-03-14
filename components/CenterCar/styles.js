import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    container: {
        width: '100%',
        height: '100%',
        flex: 1,
      },
      image: {
        backgroundColor: 'white',
        height: 150,
        width: 150,
        justifyContent: 'center',
        allignItems: 'center',
        borderRadius: 75,
        marginHorizontal: 130,
        marginVertical: -100,
      },
      text: {
        fontSize: 12,
        fontWeight: '500',
        color: 'white',
        textTransform: 'uppercase',
      },
});

export default styles;