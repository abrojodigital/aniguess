import { ActivityIndicator, View } from 'react-native'

import {StartGame} from './screens';
import { styles } from './styles'
import { theme } from './constants/theme';
import { useFonts } from 'expo-font';

const App = () => {
  const [loaded] = useFonts({
    'Inter-Regular': require('../assets/fonts/Inter-Regular.ttf'),
    'Inter-Bold': require('../assets/fonts/Inter-Bold.ttf'),
    'Inter-SemiBold': require('../assets/fonts/Inter-SemiBold.ttf'),
    'Inter-Black': require('../assets/fonts/Inter-Black.ttf'),
    'Inter-ExtraBold': require('../assets/fonts/Inter-ExtraBold.ttf'),
    'Inter-ExtraLight': require('../assets/fonts/Inter-ExtraLight.ttf'),
    'Inter-Light': require('../assets/fonts/Inter-Light.ttf'),
    'Inter-Medium': require('../assets/fonts/Inter-Medium.ttf'),
    'Inter-Thin': require('../assets/fonts/Inter-Thin.ttf'),
  })

  if (!loaded) {
    return (
      <View style={styles.loaderContainer}>
        <ActivityIndicator size="large" color={theme.colors.primary} />
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <StartGame />
    </View>
  );
}

export default App;