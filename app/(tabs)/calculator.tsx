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
       <View style={styles.headerContainer}>
        headerImage={<Image  
          source={require('@/assets/images/catCalculate.png')}  
          style={styles.catLogo} />}   
        headerBackgroundColor: '#5F9EA0' ,
        </View>
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
     
    </View>  
  );  
}  

 
  const styles = StyleSheet.create({  
    container: {  
      flex: 1,  
      backgroundColor: '#FAEBD7',  
    },  
    parallaxContainer: {  
      flex: 1,  // Ensuring the ParallaxScrollView fills the container  
      backgroundColor: '#FAEBD7',  
    },  
    titleContainer: {  
      flexDirection: 'row',  
      justifyContent: 'center',  
      alignItems: 'center',  
      gap: 8,  
      textAlign: 'center',  
      marginVertical: 16,  
      padding: 5,  
      backgroundColor: '#FAEBD7',   
      borderRadius: 5,  
    },  
    inputContainer: {  
      padding: 16,  
      alignItems: 'center',  
      backgroundColor: '#FAEBD7',   
      borderRadius: 10,  
      flex: 1, // Ensure this component also fills available space  
    },    
  parallaxStyle: {  
    backgroundColor: '#FAEBD7', // Háttérszín beállítása a ParallaxScrollView stílusához  
  },  
  catLogo: {  
    height: 178,
    width: 290,
    bottom: 0,
    left: 0,
    position: 'static', 
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
  headerContainer: {
    marginTop: 5,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.8,
    shadowRadius: 2,
    elevation: 5,
    backgroundColor: '#FAEBD7',
    borderRadius: 8,
  },
});