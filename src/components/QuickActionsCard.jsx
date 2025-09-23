import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { Icon } from 'react-native-paper';

const QuickAction = ({ icon, label, onPress }) => (
  <TouchableOpacity style={styles.action} onPress={onPress}>
    <View style={styles.iconContainer}>
      <Icon source={icon} size={28} color="green" />
    </View>
    <Text style={styles.label}>{label}</Text>
  </TouchableOpacity>
);

const QuickActionsCard = ({ actions }) => {
  return (
    <View style={styles.card}>
      {/* Header */}
      <View style={styles.header}>
        <Icon source="flash" size={20} color="green" />
        <Text style={styles.title}>Quick Actions</Text>
      </View>

      {/* Actions */}
      <View style={styles.row}>
        {actions &&
          actions.map((action, index) => (
            <QuickAction
              key={index}
              icon={action.icon}
              label={action.label}
              onPress={action.onPress}
            />
          ))}
      </View>
    </View>
  );
};

export default QuickActionsCard;

const styles = StyleSheet.create({
  card: {
    height: 200,
    backgroundColor: '#fff',
    borderRadius: 5,
    padding: 15,
    marginBottom: 25,
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
  row: {
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
  action: {
    alignItems: 'center',
    padding: 10,
    width: '40%',
    borderWidth: 1,
    borderColor: '#e0e0e0',
    borderRadius: 5,
  },
  iconContainer: {
    marginBottom: 6,
  },
  label: {
    fontSize: 14,
    fontWeight: '500',
  },
});
