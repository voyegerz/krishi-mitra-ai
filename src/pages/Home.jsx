import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
} from 'react-native';
import WeatherCard from '../components/WeatherCard';
import CropOverviewCard from '../components/CropOverviewCard';
import MarketPriceCard from '../components/MarketPriceCard';
import QuickActionsCard from '../components/QuickActionsCard';

const Home = () => {
  const aiData = [
    { crop: 'Wheat', price: 2200, change: 1.2 },
    { crop: 'Rice', price: 3500, change: -0.5 },
    { crop: 'Maize', price: 1800, change: 0.8 },
    { crop: 'Cotton', price: 6000, change: 2.1 },
  ];
  const actions = [
    {
      icon: 'lightbulb-on-outline',
      label: 'Ask AI Advice',
      onPress: () => console.log('AI Advice'),
    },
    {
      icon: 'camera-outline',
      label: 'Disease Scan',
      onPress: () => console.log('Scan'),
    },
  ];

  return (
    <ScrollView style={styles.container}>
      <Text style={styles.header}>krishiMitraAI</Text>

      {/* Weather Section */}
      <WeatherCard />

      {/* Crop Overview */}
      <CropOverviewCard />

      {/* Market Price Trends */}
      <MarketPriceCard data={aiData} />

      {/* Quick Actions */}
      <QuickActionsCard actions={actions} />

      {/* Floating Button */}
      {/* <TouchableOpacity style={styles.fab}>
        <Text style={styles.fabText}>⚡</Text>
      </TouchableOpacity> */}
    </ScrollView>
  );
};

export default Home;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F9FAFB',
    padding: 15,
  },
  header: {
    fontSize: 18,
    fontWeight: '700',
    textAlign: 'center',
    marginBottom: 15,
  },
  fab: {
    position: 'absolute',
    bottom: 80,
    right: 20,
    backgroundColor: '#4CAF50',
    width: 55,
    height: 55,
    borderRadius: 30,
    alignItems: 'center',
    justifyContent: 'center',
    elevation: 5,
  },
  fabText: {
    color: '#fff',
    fontSize: 24,
  },
});
