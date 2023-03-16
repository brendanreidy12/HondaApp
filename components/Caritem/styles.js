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
      image: {
        width: '100%',
        height: '100%',
        resizeMode: 'cover',
        position: 'absolute',
      },
      divider: {
        borderBottomColor: 'white',
        borderBottomWidth: StyleSheet.hairlineWidth,
      },
      refreshButton: {
        flexDirection: 'row',
        alignItems: 'center',
        width: '20%',
      }
});

export default styles;