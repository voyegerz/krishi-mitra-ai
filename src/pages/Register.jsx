import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import Input from '../components/Input';

const Register = ({ navigation }) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  // const [user, setuser] = useState({ name: '', email: '', password: '' });

  const handleRegister = () => {
    if (!name || !email || !password) {
      alert('Please fill all fields');
      return;
    }
    console.log('Name:', name);
    console.log('Email:', email);
    console.log('Password:', password);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Create Your Account</Text>

      <View style={styles.form}>
        <Input
          label="Name"
          placeholder="Enter your full name"
          value={name}
          onChangeText={setName}
        />

        <Input
          label="Email"
          placeholder="Enter your email address"
          value={email}
          onChangeText={setEmail}
          keyboardType="email-address"
        />

        <Input
          label="Password"
          placeholder="Create a strong password"
          value={password}
          onChangeText={setPassword}
        />

        <TouchableOpacity style={styles.button} onPress={handleRegister}>
          <Text style={styles.buttonText}>Register Account</Text>
        </TouchableOpacity>

        <Text style={styles.footerText}>
          Already have an account?{' '}
          <Text
            style={styles.loginText}
            onPress={() => navigation.navigate('Login')}
          >
            Login
          </Text>
        </Text>
      </View>
    </View>
  );
};

export default Register;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: '90%',
    alignSelf: 'center',
    backgroundColor: '#fff',
    justifyContent: 'center',
    padding: 20,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 30,
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
  loginText: {
    color: '#007BFF',
    fontWeight: '600',
  },
});
