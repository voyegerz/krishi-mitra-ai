import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { Icon } from 'react-native-paper';

const CropOverviewCard = () => {
  return (
    <View style={styles.card}>
      {/* Header Row */}
      <View style={styles.headerRow}>
        <View style={styles.headerLeft}>
          <Icon source="sprout" size={20} color="#4CAF50" />
          <Text style={styles.title}>My Crop Overview</Text>
        </View>
        <View style={styles.statusBadge}>
          <Text style={styles.statusText}>Healthy</Text>
        </View>
      </View>

      {/* Crop Info */}
      <View style={styles.cropInfo}>
        <Text style={styles.cropName}>Wheat Field A</Text>
        <Text style={styles.subText}>Flowering Stage - Day 45</Text>
      </View>

      {/* Progress Bar */}
      <View style={styles.progressContainer}>
        <Icon source="progress-check" size={16} color="#4CAF50" />
        <View style={styles.progressBar}>
          <View style={[styles.progress, { width: '30%' }]} />
        </View>
      </View>

      {/* Footer Button */}
      <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonText}>View Details</Text>
      </TouchableOpacity>
    </View>
  );
};

export default CropOverviewCard;

const styles = StyleSheet.create({
  card: {
    backgroundColor: '#F6FFF6',
    borderRadius: 5,
    padding: 15,
    marginBottom: 15,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
  },
  headerRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  headerLeft: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  title: {
    fontWeight: '700',
    fontSize: 16,
    marginLeft: 6,
  },
  statusBadge: {
    backgroundColor: '#111',
    paddingHorizontal: 10,
    paddingVertical: 4,
    borderRadius: 12,
  },
  statusText: {
    color: '#fff',
    fontWeight: '600',
    fontSize: 12,
  },
  cropInfo: {
    marginTop: 10,
  },
  cropName: {
    fontSize: 16,
    fontWeight: '600',
  },
  subText: {
    color: '#555',
    marginTop: 2,
  },
  progressContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 12,
  },
  progressBar: {
    flex: 1,
    height: 6,
    backgroundColor: '#ddd',
    borderRadius: 4,
    marginLeft: 8,
  },
  progress: {
    height: 6,
    backgroundColor: '#4CAF50',
    borderRadius: 4,
  },
  button: {
    alignSelf: 'flex-end',
    paddingHorizontal: 14,
    paddingVertical: 8,
    borderWidth: 1,
    borderRadius: 8,
    borderColor: '#222',
  },
  buttonText: {
    fontWeight: '500',
    color: '#000',
  },
});
