import React, { useState } from 'react';
import { Image, StyleSheet, View, TextInput, ScrollView, Text, Pressable } from 'react-native';

export default function HomeScreen() {
  const [catAge, setCatAge] = useState<string>('');
  const [catName, setCatName] = useState<string>('');

  function setName(text: string): void {
    setCatName(text);
  }

  return (
    <View style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollViewContainer}>
        <View style={styles.catLogoContainer}>
          <Image
            source={require('@/assets/images/catUser.png')}
            style={styles.catLogo}
          />
        </View>
        <View style={styles.inputContainer}>
          <TextInput
            style={styles.input}
            placeholder="Enter your name"
            value={catName}
            onChangeText={setName}
          />
          <TextInput
            style={styles.input}
            placeholder="Enter cat age"
            keyboardType="numeric"
            value={catAge}
            onChangeText={setCatAge}
          />
          <Pressable style={({ pressed }) => [styles.button, pressed && styles.buttonPressed]}>
            <Text style={styles.buttonText}>Login</Text>
          </Pressable>
          <Pressable style={({ pressed }) => [styles.button, pressed && styles.buttonPressed]}>
            <Text style={styles.buttonText}>Registration</Text>
          </Pressable>
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5DEB3',
  },
  scrollViewContainer: {
    flexGrow: 1,
    backgroundColor: '#F5DEB3',
    alignItems: 'center',
  },
  catLogoContainer: {
    marginTop: 16,
    marginBottom: 16,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.8,
    shadowRadius: 2,
    elevation: 5,
    backgroundColor: '#FFF',
    borderRadius: 8,
  },
  catLogo: {
    height: 178,
    width: 290,
    borderRadius: 8,
  },
  inputContainer: {
   
    width: 290,
    borderRadius: 8,
    padding: 16,
    margin: 50,
    alignItems: 'center',
    backgroundColor: '#FAEBD7',
  },
  
  input: {
    height: 40,
    borderRadius: 8,
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
    marginBottom: 12, // Közöttük legyen egy kis hely
  },
  buttonPressed: {
    backgroundColor: '#0056b3',
  },
  buttonText: {
    color: 'white',
    fontSize: 16,
  },
});
