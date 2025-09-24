import React from 'react';
import { FlatList, StyleSheet } from 'react-native';
import ProductCard from './ProductCard';

const ProductGrid = ({ products }) => {
  return (
    <FlatList
      data={products}
      keyExtractor={item => item.id}
      numColumns={2}
      renderItem={({ item }) => (
        <ProductCard name={item.name} price={item.price} image={item.image} />
      )}
      contentContainerStyle={styles.grid}
    />
  );
};

export default ProductGrid;

const styles = StyleSheet.create({
  grid: {
    paddingHorizontal: 10,
  },
});
