import { Image, StyleSheet, TextInput, Text, View, Pressable } from 'react-native';
import ParallaxScrollView from '@/components/ParallaxScrollView';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';
import React, { useState } from 'react';

export default function HomeScreen() {
  const [catAge, setCatAge] = useState<string>('');
  const [humanAge, setHumanAge] = useState<number | null>(null);

  const calculateHumanAge = () => {
    const age = parseFloat(catAge);
    if (!isNaN(age)) {
      setHumanAge(age * 4.8);
    } else {
      setHumanAge(null);
    }
  };

  return (
    <View style={styles.container}>
      <ParallaxScrollView
        headerImage={<Image
          source={require('@/assets/images/catCalculate.png')}
          style={styles.catLogo} />} headerBackgroundColor={{
            dark: '',
            light: ''
          }}>
        <ThemedView style={styles.titleContainer}>
          <ThemedText type="title">Calculate</ThemedText>
        </ThemedView>

        <View style={styles.inputContainer}>
          <TextInput
            style={styles.input}
            placeholder="Enter cat age"
            keyboardType="numeric"
            value={catAge}
            onChangeText={setCatAge}
          />
          <Pressable
            style={({ pressed }) => [
              styles.button,
              pressed ? styles.buttonPressed : null
            ]}
            onPress={calculateHumanAge}
          >
            <Text style={styles.buttonText}>Calculate</Text>
          </Pressable>
          {humanAge !== null && (
            <Text style={styles.result}>Human Age: {humanAge.toFixed(2)}</Text>
          )}
        </View>
      </ParallaxScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#5F9EA0', // Háttérszín beállítása a container stílusban
  },
  titleContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    gap: 8,
    textAlign: 'center',
    marginVertical: 16,
    padding: 5,
    backgroundColor: '#FAEBD7', // Cím konténer háttérszíne
    borderRadius: 5,
  },
  catLogo: {
    height: 178,
    width: 290,
    bottom: 0,
    left: 0,
    position: 'static',
  },
  inputContainer: {
    padding: 16,
    alignItems: 'center',
    backgroundColor: '#FAEBD7', // Input konténer háttérszíne
    borderRadius: 10,
  },
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 12,
    paddingHorizontal: 8,
    width: '80%',
  },
  button: {
    backgroundColor: '#5F9EA0',
    borderRadius: 5,
    padding: 10,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.8,
    shadowRadius: 2,
    elevation: 5,
    width: '80%',
    marginBottom: 12,
  },
  buttonPressed: {
    backgroundColor: '#0056b3',
  },
  buttonText: {
    color: 'white',
    fontSize: 16,
  },
  result: {
    marginTop: 16,
    fontSize: 18,
    fontWeight: 'bold',
  },
});
