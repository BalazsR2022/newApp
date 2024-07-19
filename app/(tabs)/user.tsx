import React, { useState } from 'react';
import { Image, StyleSheet, View, TextInput, ScrollView, Text, Pressable } from 'react-native';

export default function HomeScreen() {
  const [catEmail, setCatEmail] = useState<string>('');
  const [catName, setCatName] = useState<string>('');
  const [message, setMessage] = useState<string>('');

  function setName(text: string): void {
    setCatName(text);
  }

  function handleLogin() {
    setMessage('Sikeres belépés');
  }

  function handleRegistration() {
    setMessage('Sikeres regisztráció');
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
            placeholder="Enter your email"
            value={catEmail}
            onChangeText={setCatEmail}
          />
          {message ? (
            <Text style={styles.messageText}>{message}</Text>
          ) : (
            <>
              <Pressable 
                style={({ pressed }) => [styles.button, pressed && styles.buttonPressed]}
                onPress={handleLogin}
              >
                <Text style={styles.buttonText}>Login</Text>
              </Pressable>
              <Pressable 
                style={({ pressed }) => [styles.button, pressed && styles.buttonPressed]}
                onPress={handleRegistration}
              >
                <Text style={styles.buttonText}>Registration</Text>
              </Pressable>
            </>
          )}
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
    textAlign: 'center',
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
  messageText: {
    marginTop: 16,
    fontSize: 16,
    color: '#5F9EA0',
  },
});
