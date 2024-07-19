import { Tabs } from 'expo-router';
import React from 'react';

import { TabBarIcon } from '@/components/navigation/TabBarIcon';
import { Colors } from '@/constants/Colors';
import { useColorScheme } from '@/hooks/useColorScheme';
import { MaterialIcons } from '@expo/vector-icons';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { Entypo } from '@expo/vector-icons';

export default function TabLayout() {
  const colorScheme = useColorScheme();

  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: Colors[colorScheme ?? 'light'].tint,
        headerShown: false,
      }}>
      <Tabs.Screen
        name="home"
        options={{
          title: 'Home',
          tabBarIcon: ({ color, focused }) => (
            <TabBarIcon name={focused ? 'home' : 'home-outline'} color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="meal"
        options={{
          title: 'meal',
          tabBarIcon: ({ color, focused }) => (
            <MaterialCommunityIcons name={focused ? 'food-outline' : 'food-outline'} size={24} color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="calculator"
        options={{
          title: 'calculator',
          tabBarIcon: ({ color, focused }) => (
            <MaterialCommunityIcons name={focused ? 'calculator-variant': 'calculator-variant-outline'} size={24} color={color} />
          ),
        }}
      />
    
      <Tabs.Screen
        name="toys"
        options={{
          title: 'Toy',
          tabBarIcon: ({ color, focused }) => (
            <MaterialCommunityIcons name={focused ? 'toy-brick-outline' : 'toy-brick-outline'} size={24} color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="user"
        options={{
          title: 'User',
          tabBarIcon: ({ color, focused }) => (
            <TabBarIcon name={focused ? 'person' : 'person-outline'} color={color} />
          ),
        }}
      />
    </Tabs>
  );
}
