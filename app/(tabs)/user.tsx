import { Image, StyleSheet, Platform } from 'react-native';
import { HelloWave } from '@/components/HelloWave';
import ParallaxScrollView from '@/components/ParallaxScrollView';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';
import { Pressable } from 'react-native';

export default function HomeScreen() {
  return (
    <ParallaxScrollView
      headerBackgroundColor={{ light: '#A1CEDC', dark: '#1D3D47' }}
      headerImage={
        <Image
          source={require('@/assets/images/catUser.png')}
          style={styles.catLogo}
        />
      }>
      <ThemedView style={styles.titleContainer}>
        <ThemedText type="title">User Page !</ThemedText>
        <HelloWave />
      </ThemedView>
      <ThemedView style={styles.titleContainer}>
        <ThemedText type="subtitle">My Name</ThemedText>
        
      </ThemedView>
      <ThemedView style={styles.titleContainer}>
        <ThemedText type="subtitle">My Age</ThemedText>
       
      </ThemedView>
      <ThemedView style={styles.titleContainer}>
        <ThemedText type="subtitle">My Toy</ThemedText>

      </ThemedView>
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
});
