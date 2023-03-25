import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    container: {
        width: '100%',
        height: '100%',
        flex: 0,
      },
      image: {
        backgroundColor: 'white',
        height: 150,
        width: 150,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 75,
        marginHorizontal: 125,
        marginVertical: 40,
      },
      text: {
        fontSize: 12,
        fontWeight: '500',
        color: 'white',
        textTransform: 'uppercase',
      },
});

export default styles;
