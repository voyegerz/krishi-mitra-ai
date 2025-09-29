import React from 'react';
import { FlatList, StyleSheet, View } from 'react-native';
import ProductCard from './ProductCard';

const ProductGrid = ({ products }) => {
  return (
    <FlatList
      data={products}
      keyExtractor={(item, index) => item.id} // unique key
      numColumns={2}
      renderItem={({ item }) => (
        <ProductCard
          name={item.name}
          price={item.price}
          image={item.image}
          market={item.market}
        />
      )}
      contentContainerStyle={styles.grid}
    />
  );
};

export default ProductGrid;

const styles = StyleSheet.create({
  grid: {
    paddingHorizontal: 10,
    paddingBottom: 10,
  },
});
