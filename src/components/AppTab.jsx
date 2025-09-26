// AppTabs.js
import React, { useEffect } from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import Home from '../pages/Home.jsx';
import Mandi from '../pages/Mandi.jsx';
import Advice from '../pages/Advice.jsx';
import Scan from '../pages/Scan.jsx';
import Cart from '../pages/Cart.jsx';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { View } from 'react-native';
import changeNavigationBarColor from 'react-native-navigation-bar-color';
import AiChatBot from './AiChatBot.jsx';
const Tab = createBottomTabNavigator();

export function MandiStack() {
  const Stack = createStackNavigator();
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="MandiStack" component={Mandi} />
      <Stack.Screen name="Cart" component={Cart} />
    </Stack.Navigator>
  );
}
export default function AppTabs() {
  useEffect(() => {
    async function setNavColor() {
      try {
        await changeNavigationBarColor('white', false);
        // false = dark icons, true = light icons
      } catch (e) {
        console.warn('NavigationBarColor error:', e);
      }
    }
    setNavColor();
  }, []);
  return (
    <>
      <Tab.Navigator
        screenOptions={({ route }) => ({
          headerShown: false,
          tabBarHideOnKeyboard: true,
          tabBarIcon: ({ color, size }) => {
            let iconName;

            if (route.name === 'Home') {
              iconName = 'home';
            } else if (route.name === 'Mandi') {
              iconName = 'barley';
            } else if (route.name === 'Advice') {
              iconName = 'lightbulb-on';
            } else if (route.name === 'Scan') {
              iconName = 'barcode-scan';
            }

            return <Icon name={iconName} size={size} color={color} />;
          },
          tabBarActiveTintColor: '#4CAF50',
          tabBarInactiveTintColor: 'gray',
          tabBarStyle: {
            backgroundColor: '#fff', // or '#000' for Instagram dark
            borderTopWidth: 0,
            elevation: 0,
            height: 50,
          },
          tabBarLabelStyle: { fontSize: 12, fontWeight: '600' },
        })}
      >
        <Tab.Screen name="Home" component={Home} />
        <Tab.Screen name="Advice" component={Advice} />
        <Tab.Screen name="Scan" component={Scan} />
        <Tab.Screen name="Mandi" component={MandiStack} />
      </Tab.Navigator>
      <AiChatBot onPress={() => console.log('Chatbot open')} />
    </>
  );
}
