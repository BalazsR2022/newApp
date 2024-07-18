import { Image, StyleSheet, View, ImageSourcePropType } from 'react-native';
import { ThemedText } from '@/components/ThemedText';
import React, { useState } from 'react';
import { Pressable } from 'react-native';

interface ImageWithCaptionProps {
  source: ImageSourcePropType;
  caption: string;
}

const ImageWithCaption: React.FC<ImageWithCaptionProps> = ({ source, caption }) => {
  const [showCaption, setShowCaption] = useState(false);

  const handlePress = () => {
    setShowCaption(!showCaption);
  };

  return (
    <View style={styles.imageContainer}>
      <Pressable onPress={handlePress}>
        <Image source={source} style={styles.image} />
      </Pressable>
      {showCaption && <ThemedText style={styles.caption}>{caption}</ThemedText>}
    </View>
  );
};

export default function HomeScreen() {
  return (
    <View style={styles.container}>
      <View style={styles.headerContainer}>
        <Image
          source={require('@/assets/images/catMeal.png')}
          style={styles.catLogo}
        />
      </View>
      <View style={styles.imageList}>
        <View style={styles.stepContainer}>
          <ImageWithCaption source={require('@/assets/images/catMilk.png')} caption="Sikeres vásárlás" />
        </View>
        <View style={styles.stepContainer}>
          <ImageWithCaption source={require('@/assets/images/catFood.png')} caption="Sikeres vásárlás!"/>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#5F9EA0', // Background color for the entire screen
  },
  headerContainer: {
    marginTop: 5,
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
  stepContainer: {
    marginBottom: 5,
  },
  imageContainer: {
    alignItems: 'center',
    padding: 5,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.8,
    shadowRadius: 2,
    elevation: 5,
    backgroundColor: '#FAEBD7',
    borderRadius: 10,
    width: 200, // Ensure the container has a fixed width
  },
  image: {
    width: 180,
    height: 178,
    borderRadius: 10,
  },
  caption: {
    marginVertical: 4, // Reduce the vertical margin for the caption
    fontSize: 14, // Adjust the font size if needed
    color: '#096397',
    textAlign: 'center',
  },
  imageList: {
    padding: 10,
    width: '100%',
    alignItems: 'center',
  },
});
