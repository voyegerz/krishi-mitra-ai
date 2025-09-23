import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import Input from '../components/Input';

const Login = ({ onLogin }) => {
  const navigation = useNavigation();
  const [loginInfo, setLoginInfo] = useState({ mobile: '', password: '' });
  const [errors, setErrors] = useState({ mobile: '', password: '' });

  const handleLogin = () => {
    const { mobile, password } = loginInfo;
    let newErrors = { mobile: '', password: '' };
    let hasError = false;

    if (!mobile) {
      newErrors.mobile = 'Enter the phone number';
      hasError = true;
    }
    if (!password) {
      newErrors.password = 'Enter the password';
      hasError = true;
    }

    setErrors(newErrors);

    if (hasError) return;

    // ✅ Here we simulate login success
    console.log('Logging in with:', loginInfo);
    setLoginInfo({ mobile: '', password: '' });

    // call parent App's login
    onLogin();
  };

  return (
    <View style={styles.container}>
      <Text style={styles.logoText}>🌱 krishiMitraAI</Text>
      <Text style={styles.subtitle}>Log in to krishiMitraAI</Text>

      <View style={styles.form}>
        <Input
          label="Mobile Number"
          placeholder="Enter your mobile number"
          value={loginInfo.mobile}
          onChangeText={mobile => setLoginInfo({ ...loginInfo, mobile })}
          keyboardType="phone-pad"
          error={errors.mobile}
        />

        <Input
          label="Password"
          placeholder="Enter your password"
          value={loginInfo.password}
          onChangeText={password => setLoginInfo({ ...loginInfo, password })}
          secureTextEntry
          error={errors.password}
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

// ...styles (same as your code)

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
