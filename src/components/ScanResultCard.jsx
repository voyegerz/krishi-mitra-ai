import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';

const ScanResultCard = () => {
  return (
    <View style={styles.card}>
      {/* Title */}
      <Text style={styles.title}>Recent Scan Result Example</Text>

      {/* Image */}
      <Image
        source={{
          uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS8BOv9J1OArPGRsxwu8XG0u1QDfecHc3Xxog&s', // dummy image
        }}
        style={styles.image}
        resizeMode="cover"
      />

      {/* Description */}
      <Text style={styles.description}>
        This potato plant shows early blight symptoms identified as 'Alternaria
        solani'.
      </Text>
    </View>
  );
};

export default ScanResultCard;

const styles = StyleSheet.create({
  card: {
    backgroundColor: '#fff',
    borderRadius: 5,
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
    margin: 10,
  },
  title: {
    fontSize: 16,
    fontWeight: '700',
    marginBottom: 8,
    color: '#222',
  },
  image: {
    width: '100%',
    height: 160,
    borderRadius: 5,
    marginBottom: 8,
  },
  description: {
    fontSize: 13,
    color: '#555',
  },
});
