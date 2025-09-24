// components/CartItem.js
import React from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet } from 'react-native';

export default function CartItem({ item, onIncrease, onDecrease }) {
  return (
    <View style={styles.container}>
      <Image source={{ uri: item.image }} style={styles.image} />

      <View style={styles.details}>
        <Text style={styles.title}>{item.name}</Text>
        <Text style={styles.price}>₹ {item.price}</Text>
      </View>

      <View style={styles.quantityContainer}>
        <TouchableOpacity style={styles.actionBtn} onPress={onDecrease}>
          <Text style={styles.actionText}>-</Text>
        </TouchableOpacity>
        <Text style={styles.quantity}>{item.quantity}</Text>
        <TouchableOpacity style={styles.actionBtn} onPress={onIncrease}>
          <Text style={styles.actionText}>+</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    backgroundColor: '#fff',
    borderRadius: 8,
    padding: 10,
    marginVertical: 8,
    elevation: 2,
    alignItems: 'center',
  },
  image: { width: 60, height: 60, borderRadius: 8, marginRight: 12 },
  details: { flex: 1 },
  title: { fontSize: 14, fontWeight: '600' },
  price: { fontSize: 13, color: '#4CAF50', marginTop: 4 },
  quantityContainer: { flexDirection: 'row', alignItems: 'center' },
  actionBtn: {
    width: 28,
    height: 28,
    borderRadius: 6,
    backgroundColor: '#E0E0E0',
    alignItems: 'center',
    justifyContent: 'center',
  },
  actionText: { fontSize: 18, fontWeight: '700' },
  quantity: { fontSize: 16, marginHorizontal: 8, fontWeight: '600' },
});
