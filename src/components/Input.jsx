import React from 'react';
import { TextInput, StyleSheet, Text, View } from 'react-native';

const Input = ({
  label,
  placeholder,
  value,
  onChangeText,
  error,
  secureTextEntry = false,
  keyboardType = 'default',
}) => {
  return (
    <View style={styles.container}>
      <Text style={styles.label}>{label}</Text>
      <TextInput
        style={styles.input}
        placeholder={placeholder}
        value={
          secureTextEntry
            ? '*'.repeat(value.length) // 👈 mask with asterisks
            : value
        }
        onChangeText={onChangeText}
        secureTextEntry={false} // 👈 disable default dots
        keyboardType={keyboardType}
        autoCapitalize="none"
      />
      {error ? <Text style={styles.error}>{error}</Text> : null}
    </View>
  );
};

export default Input;

const styles = StyleSheet.create({
  container: {
    marginBottom: 15,
  },
  label: {
    fontSize: 14,
    marginBottom: 5,
    fontWeight: '600',
  },
  input: {
    height: 45,
    borderWidth: 1,
    borderColor: '#ddd',
    borderRadius: 8,
    paddingHorizontal: 10,
    backgroundColor: '#fff',
  },
  error: {
    color: 'red',
    marginTop: 3,
    fontSize: 12,
  },
});
