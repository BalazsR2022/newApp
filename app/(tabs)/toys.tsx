import React, { useState } from 'react';
import { Image, StyleSheet, Pressable, View, Text, ScrollView, ImageSourcePropType } from 'react-native';
import { HelloWave } from '@/components/HelloWave';
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
    <View style={styles.container}>
      <ScrollView style={styles.scrollView}>
        <View style={styles.header}>
          <Image
            source={require('@/assets/images/catPlay.png')}
            style={styles.catLogo}
          />
          <ThemedView style={styles.titleContainer}>
            <ThemedText type="title">Játssz és nyerj!</ThemedText>
          </ThemedView>
        </View>
        <View style={styles.imageList}>
          <View style={styles.stepContainer}>
            <ImageWithCaption source={require('@/assets/images/Toys1.png')} caption="Ezt választottad, most sajnos nem nyertél, holnap megpróbálhatod újra!" />
          </View>
          <View style={styles.stepContainer}>
            <ImageWithCaption source={require('@/assets/images/Toys2.png')} caption="Ezt választottad, most sajnos nem nyertél, holnap megpróbálhatod újra!" />
          </View>
          <View style={styles.stepContainer}>
            <ImageWithCaption source={require('@/assets/images/Toys3.png')} caption="Gratulálunk, nyertél! Nyereményed átvételéről emailen értesítünk!" />
          </View>
          <View style={styles.stepContainer}>
            <ImageWithCaption source={require('@/assets/images/Toys4.png')} caption="Ezt választottad, most sajnos nem nyertél, holnap megpróbálhatod újra!" />
          </View>
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#5F9EA0', // Háttérszín beállítása az egész képernyőre
  },
  scrollView: {
    flex: 1,
    backgroundColor: '#5F9EA0', // Háttérszín beállítása az egész képernyőre
  },
  header: {
    alignItems: 'center',
    paddingTop: 20,
  },
  titleContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginVertical: 10,
    backgroundColor: '#5F9EA0',
  },
  stepContainer: {
    alignItems: 'center',
    marginBottom: 20,
    backgroundColor: '#5F9EA0',
  },
  catLogo: {
    height: 178,
    width: 290,
    position: 'relative',
    borderRadius: 10,
  },
  imageContainer: {
    alignItems: 'center',
    paddingTop: 10, // Padding a kép fölött
    paddingHorizontal: 10, // Padding a bal és jobb oldalon
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.8,
    shadowRadius: 2,
    elevation: 5,
    backgroundColor: '#FAEBD7',
    borderRadius: 10,
  },
  image: {
    width: 200,
    height: 200,
    borderRadius: 10,
  },
  caption: {
    marginVertical: 8, // Margó a felirat körül
    fontSize: 16,
    color: '#096397',
    textAlign: 'center',
  },
  imageList: {
    padding: 20,
  },
});
