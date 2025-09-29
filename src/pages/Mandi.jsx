import React, { useState, useEffect } from 'react';
import {
  View,
  StyleSheet,
  TouchableOpacity,
  Text,
  ScrollView,
  TextInput,
  ActivityIndicator,
} from 'react-native';
import ProductGrid from '../components/ProductGrid';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { useNavigation } from '@react-navigation/native';
import { useSelector } from 'react-redux';

const Mandi = () => {
  
  const navigation = useNavigation();
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [selectedCategory, setSelectedCategory] = useState('All Products');
  const [text, setText] = useState('');
  const [isFocused, setIsFocused] = useState(false);
  const totalItems = useSelector(state => state.cart.cart.length);

  // Fetch products directly from API
  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await fetch(
          'https://api.data.gov.in/resource/9ef84268-d588-465a-a308-a864a43d0070?api-key=579b464db66ec23bdd0000019e5e4d3b205b4f635d68cb6c8c5f84c2&format=json&limit=20',
        );
        const data = await response.json();
        const transformed = data.records.map((item, index) => ({
          id: index.toString(),
          name: item.commodity || 'Unknown',
          price: item.modal_price || item.Min_Price || '0',
          category: item.commodity || 'All Products',
          market: item.market,
          image: 'https://via.placeholder.com/150',
        }));
        setProducts(transformed);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching products:', error);
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);

  // Categories dynamically
  const categories = [
    'All Products',
    ...new Set(products.map(p => p.category)),
  ];

  // Filter products
  const filteredProducts = products.filter(item => {
    const matchesCategory =
      selectedCategory === 'All Products' || item.category === selectedCategory;
    const matchesSearch = item.name.toLowerCase().includes(text.toLowerCase());
    return matchesCategory && matchesSearch;
  });

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
        <TouchableOpacity
          style={styles.searchIcon}
          onPress={() => navigation.navigate('Cart')}
        >
          <Icon name="cart" size={25} color="#4CAF50" />
          <View style={styles.badge}>
            <Text style={styles.badgeText}>{totalItems}</Text>
          </View>
        </TouchableOpacity>
      </View>

      {/* Category Tabs */}
      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        style={styles.tabs}
      >
        {categories.map((cat, idx) => (
          <TouchableOpacity
            key={cat + idx}
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
      {loading ? (
        <ActivityIndicator size="large" style={{ flex: 1 }} />
      ) : (
        <ProductGrid products={filteredProducts} />
      )}
    </View>
  );
};

export default Mandi;

const styles = StyleSheet.create({
  container: { flex: 1 },
  topBar: { flexDirection: 'row', alignItems: 'center', margin: 10, gap: 10 },
  searchBar: {
    flex: 1,
    height: 45,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 8,
    paddingHorizontal: 12,
  },
  focused: { borderColor: '#4CAF50' },
  searchIcon: { position: 'relative' },
  tabs: { flexDirection: 'row', height:40,paddingHorizontal: 10, marginBottom: 5 },
  tab: {
    height: 30,
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 10,
    borderRadius: 10,
    backgroundColor: '#eee',
    marginRight: 10,
    
  },
  badge: {
    position: 'absolute',
    top: -5,
    right: -5,
    backgroundColor: '#4CAF50',
    borderRadius: 30,
    width: 18,
    height: 18,
    justifyContent: 'center',
    alignItems: 'center',
  },
  badgeText: { color: '#fff', fontSize: 10, fontWeight: 'bold' },
  activeTab: { backgroundColor: '#4CAF50' },
  tabText: { fontSize: 14, fontWeight: '500' },
  activeTabText: { color: '#fff' },
});
