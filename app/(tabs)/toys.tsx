import React, { useState } from 'react';
import { Image, StyleSheet, Pressable, View, Text, ImageSourcePropType } from 'react-native';
import { HelloWave } from '@/components/HelloWave';
import ParallaxScrollView from '@/components/ParallaxScrollView';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';

interface ImageWithCaptionProps {
  source: ImageSourcePropType;
  caption: string;
}

const ImageWithCaption: React.FC<ImageWithCaptionProps> = ({ source, caption }) => {
  const [selected, setSelected] = useState(false);

  return (
    <View style={styles.imageContainer}>
      <Pressable onPress={() => setSelected(true)}>
        <Image source={source} style={styles.image} />
      </Pressable>
      {selected && <Text style={styles.caption}>{caption}</Text>}
    </View>
  );
};

export default function HomeScreen() {
  return (
    <ParallaxScrollView
      headerBackgroundColor={{ light: '#A1CEDC', dark: '#1D3D47' }}
      headerImage={
        <Image
          source={require('@/assets/images/catToy.png')}
          style={styles.catLogo}
        />
      }>
      <ThemedView style={styles.titleContainer}>
        <ThemedText type="title">Toys</ThemedText>
        <HelloWave />
      </ThemedView>
      <ThemedView style={styles.titleContainer}>
        <ThemedText type="subtitle">Let's play!</ThemedText>
      </ThemedView>
      <ThemedView style={styles.imageList}>
        <ImageWithCaption source={require('@/assets/images/Toys1.png')} caption="Ezt választottad" />
        <ImageWithCaption source={require('@/assets/images/Toys2.png')} caption="Ezt választottad" />
        <ImageWithCaption source={require('@/assets/images/Toys3.png')} caption="Ezt választottad" />
        <ImageWithCaption source={require('@/assets/images/Toys4.png')} caption="Ezt választottad" />
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
  imageContainer: {
    marginVertical: 10,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.8,
    shadowRadius: 2,
    elevation: 5,
  },
  image: {
    width: 200,
    height: 200,
    borderRadius: 10,
  },
  caption: {
    marginTop: 8,
    fontSize: 16,
    color: 'black',
  },
  imageList: {
    padding: 20,
  },
});
