import { Image, StyleSheet, Text, View } from 'react-native';  
import { ThemedText } from '@/components/ThemedText';  
import { ThemedView } from '@/components/ThemedView';  
import React from 'react';  

export default function HomeScreen() {  
  return (  
    <View style={styles.container}>  
      <View style={styles.headerContainer}>
        <Image  
          source={require('@/assets/images/catHome.png')}  
          style={styles.catLogo} 
        />
      </View>
      <ThemedView style={styles.titleContainer}>  
        <ThemedText type="title" style={styles.titleText}>CatApp</ThemedText>  
      </ThemedView>  
      <ThemedView style={styles.textContainer}>  
        <ThemedText style={styles.centeredText}>Csodálatos kaland vár rátok együtt!</ThemedText>
        <ThemedText style={styles.centeredText}>Számolj, nyerj, rendelj valami finomat kedvencednek!</ThemedText>
        <ThemedText style={styles.centeredText}>Regisztrálj, hogy ne maradjatok le semmiről!</ThemedText>
        <ThemedText style={styles.centeredText}>Vágjatok bele bátran!</ThemedText>  
      </ThemedView>  
    </View>  
  );  
}  

const styles = StyleSheet.create({  
  container: {  
    flex: 1,  
    backgroundColor: '#FAEBD7',  
    alignItems: 'center',
    paddingTop: 20,
    paddingHorizontal: 20,
  },  
  textContainer: {  
    flex: 1,  
    backgroundColor: '#5F9EA0',  
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 25,
    borderRadius: 8,
  },  
  titleContainer: {  
    flexDirection: 'row',  
    justifyContent: 'center',  
    alignItems: 'center',  
    marginVertical: 16,  
    paddingTop: 20,  
    backgroundColor: '#5F9EA0',   
    borderRadius: 5,  
    padding:8,
  },
  titleText: {
    fontSize: 40,
  },   
  catLogo: {  
    height: 178,
    width: 290,
    borderRadius: 8,
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
  centeredText: {
    textAlign: 'center',
    fontSize: 25,
    margin: 5,
  },
});
