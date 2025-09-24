import React, { useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { TextInput } from 'react-native-paper';

const Input = ({
  label,
  placeholder,
  value,
  onChangeText,
  error,
  secureTextEntry = false,
  keyboardType = 'default',
}) => {
  const [showPassword, setShowPassword] = useState(false);
  return (
    <View style={styles.container}>
      <TextInput
        label={label}
        value={value}
        mode="outlined"
        onChangeText={onChangeText}
        outlineColor="#ddd"
        activeOutlineColor="#4CAF50"
        secureTextEntry={!showPassword}
        keyboardType={keyboardType}
        autoCapitalize="none"
        right={
          secureTextEntry ? (
            <TextInput.Icon
              icon={showPassword ? 'eye-off' : 'eye'}
              onPress={() => setShowPassword(!showPassword)}
              color="#4CAF50" // 👈 green icon
            />
          ) : null
        }
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

  error: {
    color: 'red',
    marginTop: 3,
    fontSize: 12,
  },
});
