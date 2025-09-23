import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import Input from '../components/Input';

const Register = ({ navigation }) => {
  const [user, setUser] = useState({ name: '', email: '', password: '' });
  const [errors, setErrors] = useState({ name: '', email: '', password: '' });

  const validateEmail = email => {
    const re = /\S+@\S+\.\S+/;
    return re.test(email);
  };

  const handleRegister = () => {
    let newErrors = { name: '', email: '', password: '' };
    let valid = true;

    if (!user.name) {
      newErrors.name = 'Name is required';
      valid = false;
    }

    if (!user.email) {
      newErrors.email = 'Email is required';
      valid = false;
    } else if (!validateEmail(user.email)) {
      newErrors.email = 'Enter a valid email address';
      valid = false;
    }

    if (!user.password) {
      newErrors.password = 'Password is required';
      valid = false;
    } else if (user.password.length < 6) {
      newErrors.password = 'Password must be at least 6 characters';
      valid = false;
    }

    setErrors(newErrors);

    if (!valid) return;

    // ✅ If all fields are valid
    console.log('User Registered:', user);
    setUser({ name: '', email: '', password: '' });
    setErrors({ name: '', email: '', password: '' });
    alert('Registration successful!');
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Create Your Account</Text>

      <View style={styles.form}>
        <Input
          label="Name"
          placeholder="Enter your full name"
          value={user.name}
          onChangeText={text => setUser({ ...user, name: text })}
          error={errors.name}
        />

        <Input
          label="Email"
          placeholder="Enter your email address"
          value={user.email}
          onChangeText={text => setUser({ ...user, email: text })}
          keyboardType="email-address"
          error={errors.email}
        />

        <Input
          label="Password"
          placeholder="Create a strong password"
          value={user.password}
          onChangeText={text => setUser({ ...user, password: text })}
          secureTextEntry
          error={errors.password}
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
