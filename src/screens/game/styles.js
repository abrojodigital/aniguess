import { Dimensions, StyleSheet } from 'react-native';

import { theme } from '../../constants';

const { height } = Dimensions.get('window');

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: theme.colors.white,
    paddingVertical: 20,
  },
  content: {
    height: height * 0.4,
    alignItems: 'center',
    justifyContent: 'center',
    marginHorizontal: 20,
  },
  title: {
    fontSize: 20,
    color: theme.colors.text,
    textAlign: 'center',
    paddingVertical: 30,
    fontFamily: 'Inter-SemiBold',
  },
  label: {
    fontSize: 14,
    color: theme.colors.text,
    paddingVertical: 5,
    textAlign: 'center',
  },
  input: {
    borderBottomColor: theme.colors.primary,
    borderBottomWidth: 10,
    minWidth: 70,
    fontSize: 20,
    textAlign: 'center',
    paddingVertical: 10,
  },
  buttonContainer: {
    flexDirection: 'row',
    width: '100%',
    justifyContent: 'space-around',
    marginTop: 10,
    marginBottom:10,
  },
});
