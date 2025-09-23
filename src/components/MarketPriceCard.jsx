import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Icon } from 'react-native-paper';

const MarketItem = ({ crop, price, change }) => {
  const isUp = change > 0;
  return (
    <View style={styles.itemRow}>
      {/* Crop Name + Price */}
      <View style={styles.cropInfo}>
        <Text style={styles.cropName}>{crop}</Text>
        <Text style={styles.price}>₹ {price}/quintal</Text>
      </View>

      {/* Change with Icon */}
      <View style={styles.changeInfo}>
        <Icon
          source={isUp ? 'trending-up' : 'trending-down'}
          size={18}
          color={isUp ? 'green' : 'red'}
        />
        <Text style={[styles.changeText, { color: isUp ? 'green' : 'red' }]}>
          {isUp ? `+${change}%` : `${change}%`}
        </Text>
      </View>
    </View>
  );
};

const MarketPriceCard = ({ data }) => {
  return (
    <View style={styles.card}>
      {/* Header */}
      <View style={styles.header}>
        <Icon source="chart-line" size={20} color="#FF9800" />
        <Text style={styles.title}>Market Price Trends</Text>
      </View>

      {/* Items Grid */}
      <View style={styles.grid}>
        {data.map((item, index) => (
          <View key={index} style={styles.gridItem}>
            <MarketItem {...item} />
          </View>
        ))}
      </View>
    </View>
  );
};

export default MarketPriceCard;

const styles = StyleSheet.create({
  card: {
    backgroundColor: '#fff',
    borderRadius: 5,
    padding: 15,
    marginBottom: 15,
    elevation: 2,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 12,
  },
  title: {
    fontWeight: '700',
    fontSize: 16,
    marginLeft: 6,
  },
  grid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
  },
  gridItem: {
    width: '45%', // 2-column layout
    marginVertical: 6,
  },
  itemRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  cropInfo: {},
  cropName: { fontWeight: '600', fontSize: 14 },
  price: { color: '#444', fontSize: 12, marginTop: 2 },
  changeInfo: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  changeText: {
    marginLeft: 4,
    fontWeight: '600',
    fontSize: 12,
  },
});
