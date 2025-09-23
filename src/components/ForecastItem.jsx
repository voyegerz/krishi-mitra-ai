import { Text, View, StyleSheet } from 'react-native';
import React, { Component } from 'react';
import { Icon } from 'react-native-paper';
const ForecastItem = ({ day, icon, temp }) => {
  return (
    <View style={styles.forecastItem}>
      <Text style={styles.forecastText}>{day}</Text>
      <Icon source={icon} size={20} color="#f39c12" />
      <Text style={styles.forecastText}>{temp}</Text>
    </View>
  );
};
export default ForecastItem;

const styles = StyleSheet.create({
  forecastItem: {
    height: 70,
    alignItems: 'center',
    justifyContent: 'space-evenly',
    padding: 5,
  },
  forecastText: { fontSize: 12, color: '#333' },
});
