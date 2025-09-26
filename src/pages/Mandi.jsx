import React, { useState } from 'react';
import {
  View,
  StyleSheet,
  TouchableOpacity,
  Text,
  ScrollView,
  TextInput,
} from 'react-native';
import ProductGrid from '../components/ProductGrid';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { useNavigation } from '@react-navigation/native';
import { useSelector } from 'react-redux';
const ShopScreen = () => {
  const [selectedCategory, setSelectedCategory] = useState('All Products');
  const categories = ['All Products', 'Seeds', 'Fertilizers', 'Farm Tools'];
  const [text, setText] = useState('');
  const navigation = useNavigation();
  const [isFocused, setIsFocused] = useState(false);
  const products = [
    {
      id: '1',
      name: 'High-Yield Wheat Seeds (5kg)',
      price: 450,
      image:
        'https://m.media-amazon.com/images/I/51eTdHJIrZL._UF1000,1000_QL80_.jpg',
    },
    {
      id: '2',
      name: 'Organic Fertiliser (25kg)',
      price: 800,
      image:
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQaIrKCmE1c5uoGOJ8A19NVoJH7-qgZRSzoJg&s',
    },
    {
      id: '3',
      name: 'Pesticide Spray Pump (Manual)',
      price: 1200,
      image:
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTDud3PjYHTtTy3G-mGBNlDmu7tA4IYGPdUCQ&s',
    },
    {
      id: '4',
      name: 'Drip Irrigation Kit (Small Farm)',
      price: 2500,
      image:
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQSPer-qGK_NjNnq4EQHkP0GVZkbrfpkirG3Q&s',
    },
    {
      id: '5',
      name: 'Hybrid Tomato Saplings (Pack of 10)',
      price: 150,
      image:
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTUk1Qt_qtQR9I4xEpUcanfk5IS5gD8NgZHpw&s',
    },
    {
      id: '6',
      name: 'Garden Hand Tools Set',
      price: 600,
      image:
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcREDQtgyEO0TVK9IILD6GED81RMBOxZAFlrog&s',
    },
  ];
  const totalItems = useSelector(state => state.cart.cart.length);
  return (
    <View style={styles.container}>
      {/* Search Bar */}
      <View style={styles.topBar}>
        <TextInput
          placeholder="Search products..."
          placeholderTextColor="#999"
          value={text}
          onChangeText={setText}
          style={[styles.searchBar, isFocused && styles.focused]}
          onFocus={() => setIsFocused(true)}
          onBlur={() => setIsFocused(false)}
        />
        <View style={{ position: 'relative' }}>
          <TouchableOpacity
            style={styles.searchIcon}
            onPress={() => navigation.navigate('Cart')}
          >
            <Icon name="cart" size={25} color="#4CAF50" style={styles.icon} />
            <View style={styles.badge}>
              <Text style={styles.badgeText}>{totalItems}</Text>
            </View>
          </TouchableOpacity>
        </View>
      </View>
      {/* Category Tabs */}
      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        style={styles.tabs}
        contentContainerStyle={{
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        {categories.map(cat => (
          <TouchableOpacity
            key={cat}
            style={[styles.tab, selectedCategory === cat && styles.activeTab]}
            onPress={() => setSelectedCategory(cat)}
          >
            <Text
              style={[
                styles.tabText,
                selectedCategory === cat && styles.activeTabText,
              ]}
            >
              {cat}
            </Text>
          </TouchableOpacity>
        ))}
      </ScrollView>

      {/* Product Grid */}
      <ProductGrid products={products} />
    </View>
  );
};

export default ShopScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // backgroundColor: '#F9FAFB',
  },

  topBar: {
    flexDirection: 'row',
    gap: 10,
    marginHorizontal: 5,
    alignItems: 'center',
  },
  searchBar: {
    width: '80%',
    height: 45,
    margin: 10,
    borderWidth: 1,
    borderColor: '#ccc',
    color: '#444',
    borderRadius: 8,
    paddingHorizontal: 12,
    // backgroundColor: '#fff',
  },
  searchIcon: {
    // marginRight: 10,
  },
  icon: {
    padding: 5,
  },
  badge: {
    position: 'absolute',
    right: -5,
    top: -5,
    backgroundColor: '#4CAF50', // golden brown like your tabs
    borderRadius: 30,
    width: 18,
    height: 18,
    justifyContent: 'center',
    alignItems: 'center',
  },
  badgeText: {
    color: 'white',
    fontSize: 10,
    fontWeight: 'bold',
  },
  focused: {
    borderColor: '#4CAF50', // green when focused
  },
  tabs: {
    height: 50,
    flexDirection: 'row',
    paddingHorizontal: 10,
    marginBottom: 0,
    marginHorizontal: 5,
  },
  tab: {
    height: 30,
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 10,
    borderRadius: 10,
    backgroundColor: '#eee',
    marginRight: 10,
  },
  activeTab: {
    backgroundColor: '#4CAF50', // golden brown
  },
  tabText: {
    // backgroundColor:"blue",
    fontSize: 14,
    fontWeight: '500',
  },
  activeTabText: {
    color: '#fff',
  },
});
