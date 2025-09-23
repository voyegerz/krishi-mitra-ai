// AppTabs.js
import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Home from '../pages/Home.jsx';
import Mandi from '../pages/Mandi.jsx';
import Advice from '../pages/Advice.jsx';
import Scan from '../pages/Scan.jsx';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

const Tab = createBottomTabNavigator();

export default function AppTabs() {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        headerShown: false,
        tabBarIcon: ({ color, size }) => {
          let iconName;

          if (route.name === 'Home') {
            iconName = 'home';
          } else if (route.name === 'Mandi') {
            iconName = 'cart';
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
          borderTopLeftRadius: 15,
          borderTopRightRadius: 15,
          height: 60,
          paddingBottom: 5,
        },
        tabBarLabelStyle: { fontSize: 12, fontWeight: '600' },
      })}
    >
      <Tab.Screen name="Home" component={Home} />
      <Tab.Screen name="Advice" component={Advice} />
      <Tab.Screen name="Scan" component={Scan} />
      <Tab.Screen name="Mandi" component={Mandi} />
    </Tab.Navigator>
  );
}
