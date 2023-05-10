import { Dimensions, StyleSheet } from 'react-native';

import { theme } from './constants/theme';

const { height, width } = Dimensions.get('window');

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: theme.colors.white,
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
  confirmedContainer: {
    height: height * 0.25,
    justifyContent: 'center',
    alignItems: 'center',
    marginVertical: 40,
    marginHorizontal: 20,
  },
  confirmedContainerLandscape: {
    height: height * 0.4,
    justifyContent: 'center',
    alignItems: 'center',
    marginVertical: 40,
    marginHorizontal: 20,
  },
  confirmedTitle: {
    fontSize: 16,
  },
});
