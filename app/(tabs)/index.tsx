import { Image, StyleSheet, Platform } from 'react-native';
import { HelloWave } from '@/components/HelloWave';
import ParallaxScrollView from '@/components/ParallaxScrollView';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';
import { Button } from '@rneui/base';
import { Stack } from 'expo-router';



export default function HomeScreen() {
  return (
    <ParallaxScrollView
      headerBackgroundColor={{ light: '#A1CEDC', dark: '#1D3D47' }}
      headerImage={
        <Image
          source={require('@/assets/images/Cat.png')}
          style={styles.catLogo}
        />
      }>
      <ThemedView style={styles.titleContainer}>
        <ThemedText type="title">Welcome on the CatApp !</ThemedText>
        <HelloWave />
      </ThemedView>
      <ThemedView style={styles.titleContainer}>
        <ThemedText type="title">My cat</ThemedText>
       
      </ThemedView>
      <ThemedView style={styles.titleContainer}>
        <ThemedText type="title">Your cat!</ThemedText>
       
      </ThemedView>
      <ThemedView style={styles.titleContainer}>
        <ThemedText type="title">Her/his cat!</ThemedText>
       
      </ThemedView>
      <ThemedView style={styles.stepContainer}>
        <ThemedText type="subtitle">Cats like fishes</ThemedText>
        <ThemedText>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. 
          Ipsam voluptates vel perferendis minus itaque! Iusto perspiciatis
           necessitatibus illum recusandae inventore qui reiciendis. 
          Press{' '}
          <ThemedText type="defaultSemiBold">
            {Platform.select({ ios: 'cmd + d', android: 'cmd + m' })}
          </ThemedText>{' '}
          to open developer tools.
        </ThemedText>
      
      </ThemedView>
      <ThemedView style={styles.stepContainer}>
        <ThemedText type="subtitle">Cats like birds</ThemedText>
        <ThemedText>
         Lorem ipsum dolor sit amet consectetur, adipisicing elit.
          Mollitia labore soluta natus similique ratione, nisi impedit 
          sit id dolorum! Est doloremque placeat alias assumenda aspernatur earum labore nam tenetur optio?
        </ThemedText>
      </ThemedView>
      <ThemedView style={styles.stepContainer}>
        <ThemedText type="subtitle">Cats like sleeping</ThemedText>
        <ThemedText>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quibusdam eaque distinctio laudantium 
          impedit tempore cumque cupiditate necessitatibus quasi. Saepe mollitia doloremque, quis asperiores 
          reprehenderit deleniti dolore laboriosam architecto fugit veritatis.
          When you're ready, run{' '}
        </ThemedText>
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
