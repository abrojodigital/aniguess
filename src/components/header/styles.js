import { StyleSheet } from 'react-native';
import { theme } from '../../constants';

export const styles = StyleSheet.create({
  container: {
    height: '33%',
    backgroundColor: theme.colors.primary,
    marginTop: '25%',
    marginBottom: '10%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize: 32,
    color: theme.colors.white,
    fontFamily: 'Inter-Bold',
  },
  image: {
    width: '80%',
    height: 200,
    marginBottom: 20,
  },
});
