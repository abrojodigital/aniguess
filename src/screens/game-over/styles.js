import { Dimensions, StyleSheet } from 'react-native';

import { theme } from '../../constants';

const { height, width } = Dimensions.get('window');

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: theme.colors.white,
    alignContent: 'center',
  },
  containerKeyboardAvoidingView: {
    flex: 1,
  },
  title: {
    fontSize: 16,
    color: theme.colors.text,
    textAlign: 'center',
    paddingVertical: 20,
    fontFamily: 'Inter-SemiBold',
  },
  inputContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    marginHorizontal: 20,
    height: height * 0.25,
  },
  inputContainerLandscape: {
    justifyContent: 'center',
    alignItems: 'center',
    marginHorizontal: 20,
    height: height * 0.4,
  },
  
  buttonContainer: {
    flexDirection: 'row',
    width: '100%',
    justifyContent: 'center',
    marginTop: 10,
  },
});
