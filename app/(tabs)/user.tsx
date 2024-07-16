import { Image, StyleSheet, Platform, View, TextInput} from 'react-native';
import { HelloWave } from '@/components/HelloWave';
import ParallaxScrollView from '@/components/ParallaxScrollView';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';
import { Pressable } from 'react-native';
import { useState } from 'react';

export default function HomeScreen() {
  const [catAge, setCatAge,] = useState<string>('');
  const [catName, setCatName] = useState<string>('');
  function setName(text: string): void {
    throw new Error('Function not implemented.');
  }

  return (
    <ParallaxScrollView
      headerBackgroundColor={{ light: '#A1CEDC', dark: '#1D3D47' }}
      headerImage={
        <Image
          source={require('@/assets/images/catUser.png')}
          style={styles.catLogo}
        />
      }>
       <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          placeholder="Enter yor name"
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
       
      </View>
   </ParallaxScrollView>
  
  );
}


const styles = StyleSheet.create({
  titleContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
  },
  stepContainer: {
    gap: 8,
    marginBottom: 8,
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
    backgroundColor: '#007BFF',
    borderRadius: 5,
    padding: 10,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.8,
    shadowRadius: 2,
    elevation: 5,
  },
  buttonPressed: {
    backgroundColor: '#0056b3',
  },
  buttonText: {
    color: 'white',
    fontSize: 16,
  },
});
