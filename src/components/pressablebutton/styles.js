import { StyleSheet } from 'react-native';
import { theme } from '../../constants';

export const styles = StyleSheet.create({
  button: {
    width: '40%',
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 12,
    paddingHorizontal: 32,
    borderRadius: 4,
    elevation: 3,
    backgroundColor: theme.colors.grey,
  },
  text: {
    fontFamily: 'Inter-SemiBold',
    fontSize: 18,
    lineHeight: 21,
    letterSpacing: 0.25,
    color: theme.colors.white,
  },
})