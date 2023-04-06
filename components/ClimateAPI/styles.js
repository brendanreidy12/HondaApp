import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  text: {
    fontSize: 18,
    textAlign: 'center',
    marginVertical: 10,
    color: 'white',
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginBottom: 20,
  },
  button: {
    backgroundColor: '#DDDDDD',
    padding: 10,
    marginHorizontal: 10,
  },
  activeButton: {
    backgroundColor: '#007AFF',
  },
  buttonText: {
    fontSize: 18,
  },
  submitButtonContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginBottom: 20,
  },
  submitButton: {
    backgroundColor: '#007AFF',
    padding: 15,
    paddingHorizontal: 40,
  },
  dropDownContainer: {
    marginBottom: 20,
    width: '90%',
  },
  dropDownPicker: {
    backgroundColor: '#ffffff',
    borderColor: 'gray',
    zIndex: 1000,
  },
  modalDropdownButton: {
    width: 150,
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 3,
    justifyContent: 'center',
  },
  pickerContainer: {
    height: 100,
    width: '100%',
    paddingHorizontal: 20,
  },
  pickerContentContainer: {
    justifyContent: 'center',
    flexGrow: 1,
  },
  pickerItem: {
    justifyContent: 'center',
    alignItems: 'center',
    width: 80,
    height: 80,
    borderRadius: 40,
    marginHorizontal: 10,
    backgroundColor: '#ECECEC',
  },
  pickerItemText: {
    fontSize: 16,
    color: '#A1A1A1',
  },
  activePickerItem: {
    backgroundColor: '#5A5A5A',
  },
  activePickerItemText: {
    color: '#FFF',
    fontSize: 20,
    fontWeight: 'bold',
  },  
});