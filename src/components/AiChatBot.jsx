import { TouchableOpacity, StyleSheet } from 'react-native';
import React from 'react';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
export default function AiChatBot() {
  return (
    <TouchableOpacity style={styles.fab}>
      <Icon name="lightning-bolt" size={24} color="#fff" />
    </TouchableOpacity>
  );
}
const styles = StyleSheet.create({
  fab: {
    position: 'absolute',
    bottom: 70, // 👈 sits above the tab bar
    right: 20, // 👈 aligns right (can adjust)
    backgroundColor: '#4CAF50',
    width: 50,
    height: 50,
    borderRadius: 30,
    justifyContent: 'center',
    alignItems: 'center',
    elevation: 5, // shadow on Android
    shadowColor: '#000', // shadow on iOS
    shadowOpacity: 0.3,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 4,
  },
});
