import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    carContainer: {
        width: '100%',
        height: '100%',
      },
      titles: {
        marginTop: '15%',
        width: '100%',
        allignItems: 'center',
      },
      title: {
        fontSize: 40,
        fontWeight: '600',
        color: 'white',
      },
      subtitle: {
        fontSize: 16,
        color: 'white',
        marginLeft: 10,
      },
      plate: {
        fontSize: 16,
        color: 'grey',
      },
      divider: {
        borderBottomColor: 'white',
        borderBottomWidth: StyleSheet.hairlineWidth,
      },
      topContainer: {
        flexDirection: 'row',
        width: '100%',
        marginTop: 80,
        marginLeft: 10,
      },
      refreshButton: {
        backgroundColor: 'grey',
        borderRadius: 50,
        width: 30,
        height: 30,
        alignItems: 'center',
        justifyContent: 'center',
      },
      functionButtonContainer: {
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        width: '100%',
        marginVertical: 100,
      },
      circularButton: {
        backgroundColor: 'grey',
        borderRadius: 50,
        width: 100,
        height: 100,
        alignItems: 'center',
        justifyContent: 'center',
      },
      buttonText: {
        color: 'white',
        fontSize: 16,
      },
});

export default styles;