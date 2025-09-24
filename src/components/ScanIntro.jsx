import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';
import ScanImg from '../assets/ScanIntro.jpg';
const CropHealthCard = () => {
  return (
    <View style={styles.card}>
      <View style={styles.imageContainer}>
        <Image source={ScanImg} style={styles.img} />
      </View>
      <View style={styles.textContainer}>
        <Text style={styles.title}>Crop Health Analysis</Text>
        <Text style={styles.subtitle}>
          Scan your crops or upload images for instant disease detection and
          expert advice. Early detection saves your yield.
        </Text>
      </View>
    </View>
  );
};

export default CropHealthCard;

const styles = StyleSheet.create({
  card: {
    borderRadius: 5,
    padding: 15,
    margin: 15,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
  },
  imageContainer: {
    alignItems: 'center',
    marginBottom: 15,
  },
  img: {
    width: '100%',
    height: 150,
    borderRadius: 5,
  },
  textContainer: {
    alignItems: 'center',
  },
  title: {
    fontSize: 25,
    fontWeight: '700',
    marginBottom: 6,
    textAlign: 'center',
  },
  subtitle: {
    fontSize: 14,
    color: '#555',
    textAlign: 'center',
    lineHeight: 23,
  },
});
