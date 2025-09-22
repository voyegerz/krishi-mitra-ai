import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import Input from '../components/Input';

const Login = () => {
  const navigation = useNavigation();
  const [mobile, setMobile] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    console.log('Mobile:', mobile);
    console.log('Password:', password);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.logoText}>🌱 krishiMitraAI</Text>
      <Text style={styles.subtitle}>Log in to krishiMitraAI</Text>

      <View style={styles.form}>
        <Input
          label="Mobile Number"
          placeholder="Enter your mobile number"
          value={mobile}
          onChangeText={setMobile}
          keyboardType="phone-pad"
        />

        <Input
          label="Password"
          placeholder="Enter your password"
          value={password}
          onChangeText={setPassword}
          
        />

        <TouchableOpacity style={styles.button} onPress={handleLogin}>
          <Text style={styles.buttonText}>Login</Text>
        </TouchableOpacity>

        <Text style={styles.footerText}>
          Don’t have an account?{' '}
          <Text
            style={styles.registerText}
            onPress={() => navigation.navigate('Register')}
          >
            Register
          </Text>
        </Text>
      </View>
    </View>
  );
};

export default Login;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: '90%',
    alignSelf: 'center',
    backgroundColor: '#fff',
    justifyContent: 'center',
    padding: 20,
  },
  logoText: {
    fontSize: 25,
    fontWeight: 'bold',
    textAlign: 'center',
    color: '#4CAF50',
    marginBottom: 5,
  },
  subtitle: {
    fontSize: 20,
    textAlign: 'center',
    marginBottom: 25,
    fontWeight: '500',
  },
  form: {
    backgroundColor: '#fff',
    borderRadius: 10,
    padding: 20,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowRadius: 5,
    elevation: 2,
  },
  button: {
    backgroundColor: '#4CAF50',
    paddingVertical: 12,
    borderRadius: 8,
    alignItems: 'center',
    marginBottom: 15,
  },
  buttonText: {
    color: '#fff',
    fontWeight: '600',
    fontSize: 16,
  },
  footerText: {
    textAlign: 'center',
    fontSize: 14,
    color: '#555',
  },
  registerText: {
    color: '#4CAF50',
    fontWeight: '600',
  },
});
