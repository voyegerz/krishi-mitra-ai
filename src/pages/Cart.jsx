// pages/Cart.js
import React, { useEffect } from 'react';
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
import { Appbar } from 'react-native-paper';
import { useNavigation, useIsFocused } from '@react-navigation/native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

export default function Cart() {
  const dispatch = useDispatch();
  const cartItems = useSelector(state => state.cart.cart);
  const navigation = useNavigation();
  const isFocused = useIsFocused();

  // 🔴 Hide bottom tabs when Cart is open
  useEffect(() => {
    if (isFocused) {
      navigation.getParent()?.setOptions({ tabBarStyle: { display: 'none' } });
    } else {
      navigation.getParent()?.setOptions({
        tabBarStyle: {
          borderTopLeftRadius: 15,
          borderTopRightRadius: 15,
          height: 60,
          paddingBottom: 5,
        },
      });
    }
  }, [isFocused, navigation]);

  const total = cartItems.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0,
  );

  return (
    <View style={styles.container}>
      <Appbar.Header style={styles.header}>
        <Appbar.BackAction onPress={() => navigation.goBack()} />
        <Text style={styles.headerName}>Cart</Text>
      </Appbar.Header>

      {cartItems.length === 0 ? (
        <View style={styles.emptyCart}>
          <Icon name="cart-remove" size={100} color="#F44336" />
          <Text style={styles.empty}>Your cart is empty</Text>
        </View>
      ) : (
        <FlatList
          data={cartItems}
          keyExtractor={(_, index) => index.toString()}
          renderItem={({ item }) => (
            <CartItem
              item={item}
              onIncrease={() => dispatch(addToCart(item))}
              onDecrease={() => dispatch(removeFromCart(item))}
              onRemove={() => dispatch(removeFromCart(item))}
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
  header: {
    fontSize: 20,
    fontWeight: '700',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  headerName: {
    fontSize: 20,
    fontWeight: '700',
    padding: 10,
    alignItems: 'center',

    gap: 5,
  },
  emptyCart: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
    borderRadius: 10,
  },
  empty: { textAlign: 'center', marginTop: 10, fontSize: 18 },
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
