import * as React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Icon } from 'react-native-paper';
import ForecastItem from './ForecastItem.jsx';
const WeatherCard = () => {
  return (
    
    <View style={styles.card}>
      {/* Header */}
      <View style={styles.headerRow}>
        <View style={styles.headerLeft}>
          <Icon source="weather-sunny" size={22} color="#4CAF50" />
          <Text style={styles.title}>Weather Forecast</Text>
        </View>
        <Text style={styles.location}>Paharpur, Bihar</Text>
      </View>

      {/* Current Weather */}
      <View style={styles.currentRow}>
        <View>
          <Text style={styles.temp}>28°C</Text>
          <Text>Sunny</Text>
        </View>
        <View style={styles.details}>
          <View style={styles.detailRow}>
            <Icon source="water-percent" size={16} color="#f39c12" />
            <Text style={styles.detailText}>Humidity: 65%</Text>
          </View>
          <View style={styles.detailRow}>
            <Icon source="weather-windy" size={16} color="#f39c12" />
            <Text style={styles.detailText}>Wind: 10 km/h</Text>
          </View>
        </View>
      </View>

      {/* Forecast Row */}
      <View style={styles.forecastRow}>
        <ForecastItem day={'Tomorrow'} icon={'weather-cloudy'} temp={'28°C'} />
        <ForecastItem day={'Friday'} icon={'weather-sunny'} temp={'30°C'} />
        <ForecastItem day={'Saturday'} icon={'weather-rainy'} temp={'26°C'} />
        <ForecastItem day={'Sunday'} icon={'weather-rainy'} temp={'25°C'} />
      </View>
    </View>
  );
};

export default WeatherCard;

const styles = StyleSheet.create({
  card: {
    backgroundColor: '#fff',
    borderRadius: 5,
    padding: 15,
    marginBottom: 15,
    elevation: 2,
  },
  headerRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 5,
    alignItems: 'center',
  },
  headerLeft: { flexDirection: 'row', alignItems: 'center' },
  title: { fontWeight: '700', marginLeft: 6, fontSize: 18 },
  location: { color: '#555', fontSize: 13 },
  currentRow: { flexDirection: 'row', justifyContent: 'space-between' },
  temp: { fontSize: 38, fontWeight: '900' },
  details: { justifyContent: 'center' },
  detailRow: { flexDirection: 'row', alignItems: 'center', marginTop: 3 },
  detailText: { marginLeft: 4, color: '#444' },
  forecastRow: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginTop: 15,
  },
});
