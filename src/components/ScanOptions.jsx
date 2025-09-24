import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

const OptionCard = ({ icon, title, subtitle, active, onPress }) => {
  return (
    <TouchableOpacity
      style={[styles.card, active && styles.activeCard]}
      onPress={onPress}
    >
      <View style={styles.row}>
        <Icon
          name={icon}
          size={30}
          color={active ? '#388E3C' : '#333'}
          style={styles.icon}
        />
        <View style={styles.textContainer}>
          <Text style={styles.title}>{title}</Text>
          <Text style={styles.subtitle}>{subtitle}</Text>
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default function ScanOptions() {
  const [activeOption, setActiveOption] = useState(null);

  return (
    <View style={styles.container}>
      <OptionCard
        icon="camera-outline"
        title="Scan with Camera"
        subtitle="Capture real-time images of your plants for immediate analysis"
        active={activeOption === 'camera'}
        onPress={() => setActiveOption('camera')}
      />
      <OptionCard
        icon="tray-arrow-up"
        title="Upload Image"
        subtitle="Select an existing photo from your gallery or files for detection"
        active={activeOption === 'upload'}
        onPress={() => setActiveOption('upload')}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
    margin: 10,
  },
  card: {
    // backgroundColor: '#fff',
    borderRadius: 5,
    padding: 12,
    margin: 10,
  },
  activeCard: {
    backgroundColor: '#E8F5E9', // light green
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  icon: {
    padding: 10,
    marginRight: 12,
  },
  textContainer: {
    flexShrink: 1,
  },
  title: {
    fontSize: 16,
    fontWeight: '700',
    marginBottom: 2,
  },
  subtitle: {
    fontSize: 12,
    color: '#555',
  },
});
