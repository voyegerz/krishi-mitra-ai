import React from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native';
import { addToCart } from '../redux/cartSlice.js';
import { useDispatch, useSelector } from 'react-redux';

const ProductCard = ({ name, price, image, market }) => {
  const dispatch = useDispatch();
  return (
    <View style={styles.card}>
      <Image source={{ uri: image }} style={styles.image} />
      <Text style={styles.name} numberOfLines={2}>
        {name}
      </Text>
      <Text style={styles.price}>₹ {price}</Text>
      <Text style={styles.price}>{market}</Text>
      <TouchableOpacity
        style={styles.addButton}
        onPress={() => {
          dispatch(addToCart({ name, price, image }));
          console.log('Added to cart:', name);
        }}
      >
        <Text style={styles.addText}>+</Text>
      </TouchableOpacity>
    </View>
  );
};

export default ProductCard;

const styles = StyleSheet.create({
  card: {
    flex:1,
    alignSelf: 'flex-start',
    backgroundColor: '#e6efe2ff',
    borderRadius: 5,
    padding: 10,
    margin: 10,
    elevation: 3,
    position: 'relative',
  },
  image: {
    width: '100%',
    height: 100,
    borderRadius: 8,
    resizeMode: 'cover',
    marginBottom: 8,
  },
  name: {
    fontSize: 14,
    fontWeight: '500',
    marginBottom: 5,
  },
  price: {
    fontSize: 14,
    fontWeight: '700',
    color: 'green',
  },
  addButton: {
    position: 'absolute',
    bottom: 10,
    right: 10,
    backgroundColor: '#4CAF50',
    borderRadius: 15,
    width: 30,
    height: 30,
    alignItems: 'center',
    justifyContent: 'center',
  },
  addText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: '700',
  },
});
