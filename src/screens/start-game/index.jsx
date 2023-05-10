import { Header, PressableButton } from '../../components'

import { Game } from '../';
import { View } from 'react-native'
import { styles } from './styles'
import { useState } from 'react'

const StartGame = () => {
  
  const [gameScreenOpen, setGameScreenOpen] = useState(false);

  const handleGameScreenOpen = () => {
    setGameScreenOpen(true);
  }

  if (gameScreenOpen) {
    return (
        <Game />
    );
  }

  return (
    <View style={styles.container}>
      <Header title={'Adivina el animal'} />
      <View style={styles.buttonContainer}>
      <PressableButton
        title="Jugar"
        onPress={handleGameScreenOpen}
      />
      </View>
    </View>
  );
}

export default StartGame;