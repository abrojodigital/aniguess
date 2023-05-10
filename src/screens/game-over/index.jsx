import { Header, PressableButton } from '../../components/index';

import { View } from 'react-native';
import { styles } from './styles';

const GameOver = ({ title, onRestart }) => {
  return (
    <View style={styles.container}>
        <Header title={title}/>
        <View style={styles.buttonContainer}>
          <PressableButton title="Restart" onPress={onRestart} />
        </View>
    </View>
  );
};

export default GameOver;
