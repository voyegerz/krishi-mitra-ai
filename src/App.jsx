import React, { useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Register from './pages/Register';
import Login from './pages/Login';
import AppTab from './components/AppTab.jsx'; // 👈 Tab Navigation

const Stack = createNativeStackNavigator();

export default function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        {isLoggedIn ? (
          // ✅ Show Tab Navigation after login
          <Stack.Screen name="AppTab">
            {props => (
              <AppTab {...props} onLogout={() => setIsLoggedIn(false)} />
            )}
          </Stack.Screen>
        ) : (
          <>
            <Stack.Screen name="Login">
              {props => (
                <Login {...props} onLogin={() => setIsLoggedIn(true)} />
              )}
            </Stack.Screen>
            <Stack.Screen name="Register" component={Register} />
          </>
        )}
      </Stack.Navigator>
    </NavigationContainer>
  );
}
