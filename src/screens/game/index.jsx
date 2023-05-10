import { Text, TextInput, View } from 'react-native';
import { useEffect, useState } from 'react';

import { GameOver } from '../';
import { PressableButton } from '../../components'
import { styles } from './styles';

const animals = [
  { name: 'León', clues: ['Es un felino', 'Tiene melena', 'Es un depredador'] },
  { name: 'Elefante', clues: ['Es un animal muy grande', 'Tiene una trompa', 'Es herbívoro'] },
  { name: 'Jirafa', clues: ['Tiene un cuello largo', 'Es un herbívoro', 'Vive en África'] },
  { name: 'Pingüino', clues: ['No puede volar', 'Vive en el Polo Sur', 'Tiene plumas'] },
  { name: 'Tigre', clues: ['Es un felino', 'Tiene rayas', 'Es un depredador'] },
]

const Game = () => {
  const [currentAnimal, setCurrentAnimal] = useState(null);
  const [clueIndex, setClueIndex] = useState(0);
  const [attempts, setAttempts] = useState(3);
  const [guess, setGuess] = useState('');
  const [msjGameOver, setMsgGameOver] = useState('')

  const startGame = () => {
    // Elige un animal al azar de la lista
    const randomIndex = Math.floor(Math.random() * animals.length)
    setCurrentAnimal(animals[randomIndex])
    setClueIndex(0)
    setAttempts(3)
    setGuess('')
  }

  useEffect(() => {
    startGame()
  }, [])


  const nextClue = () => {
    // Pasar a la siguiente pista del animal actual
    if (clueIndex < currentAnimal.clues.length - 1) {
      setClueIndex(clueIndex + 1);
    } else {
      // Si ya no hay más pistas, el jugador ha perdido un intento
      setAttempts(attempts - 1);
      setClueIndex(0);
    }
  };

  const handleGuess = () => {
    // Comprobar si la suposición del jugador es correcta
    if (guess === currentAnimal.name) {
      setMsgGameOver('¡Correcto! Adivinaste.')
      setCurrentAnimal(null);
    } else {
      // Si la suposición es incorrecta, el jugador ha perdido un intento
      setAttempts(attempts - 1);
      setGuess('');
      if (attempts === 1) {
        setMsgGameOver('Lo siento. No Adivinaste.');
        setCurrentAnimal(null);
      }
    }
  };

  return (
    <View style={styles.container}>
      {currentAnimal ? (
        <>
          <Text style={styles.title}>{currentAnimal.clues[clueIndex]}</Text>
          <TextInput
            style={styles.input}
            placeholder="Adivinar"
            value={guess}
            onChangeText={(text) => setGuess(text)}
          />
          <View style={styles.buttonContainer}>
            <PressableButton title="Pista" onPress={nextClue} />
            <PressableButton title="Adivinar" onPress={handleGuess} />
          </View>
          <Text style={styles.label}>Intentos restantes: {attempts}</Text>
        </>
      ) : (
        <GameOver title={msjGameOver} onRestart={startGame} />
      )}
    </View>
  );
};

export default Game;
