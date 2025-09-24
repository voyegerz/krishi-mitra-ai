// pages/Cart.js
import React from 'react';
import {
  View,
  Text,
  FlatList,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';
import { useSelector, useDispatch } from 'react-redux';
import { addToCart, removeFromCart, emptyCart } from '../redux/cartSlice';
import CartItem from '../components/CartItem';

export default function Cart() {
  const dispatch = useDispatch();
  const cartItems = useSelector(state => state.cart.cart);

  const total = cartItems.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0,
  );

  return (
    <View style={styles.container}>
      <Text style={styles.header}>🛒 My Cart</Text>

      {cartItems.length === 0 ? (
        <Text style={styles.empty}>Your cart is empty</Text>
      ) : (
        <FlatList
          data={cartItems}
          keyExtractor={(_, index) => index.toString()}
          renderItem={({ item }) => (
            <CartItem
              item={item}
              onIncrease={() => dispatch(addToCart(item))}
              onDecrease={() => dispatch(removeFromCart(item))}
              onRemove={() => dispatch(removeFromCart(item))} // same reducer handles both
            />
          )}
        />
      )}

      {/* Footer */}
      <View style={styles.footer}>
        <Text style={styles.total}>Total: ₹ {total}</Text>
        <TouchableOpacity
          style={styles.checkoutBtn}
          onPress={() => dispatch(emptyCart())}
        >
          <Text style={styles.checkoutText}>Checkout</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#F9FAFB', padding: 15 },
  header: { fontSize: 20, fontWeight: '700', marginBottom: 15 },
  empty: { textAlign: 'center', marginTop: 50, fontSize: 16, color: 'gray' },
  footer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 15,
    borderTopWidth: 1,
    borderTopColor: '#ddd',
    backgroundColor: '#fff',
  },
  total: { fontSize: 16, fontWeight: '700' },
  checkoutBtn: {
    backgroundColor: '#4CAF50',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 8,
  },
  checkoutText: { color: '#fff', fontWeight: '600', fontSize: 16 },
});
