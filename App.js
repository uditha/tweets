import React from 'react';
import 'react-native-gesture-handler';
import Ionicons from '@expo/vector-icons/Ionicons';

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import HomeScreen from './screens/HomeScreen';
import ProfileScreen from './screens/ProfileScreen';
import TweetScreen from './screens/TweetScreen';
import NewTweet from './screens/NewTweet';
import SettingsScreen from './screens/SettingsScreen';
import SearchScreen from './screens/SearchScreen';
import NotificationScreen from './screens/NotificationScreen';


const Stack = createStackNavigator();
const Drawer = createDrawerNavigator();
const Tab = createBottomTabNavigator();

const HomeStackNavigator = () => {
  return (
    <Stack.Navigator 
    screenOptions={{ headerShown: true, headerBackTitleVisible: false,}}
    >
        <Stack.Screen name="Tab" component={TabNavigator} options={{ headerShown: false }} />
        <Stack.Screen name="Profile" component={ProfileScreen} />
        <Stack.Screen name="Tweets" component={TweetScreen} />
        <Stack.Screen name="New Tweet" component={NewTweet} />
      </Stack.Navigator>
  )
}

const TabNavigator = () => {
  return (
    <Tab.Navigator 
      screenOptions={{ 
        tabBarShowLabel: false,
        headerShown: false,
       }}
    >
      <Tab.Screen 
        name="Home1" 
        component={HomeScreen}
        options={{ 
          tabBarIcon: ({color, size}) => (
            <Ionicons name="home" size={size} color={color} />
          ),
         }}
       />
      <Tab.Screen 
        name="Search" 
        component={SearchScreen} 
        options={{ 
          tabBarIcon: ({color, size}) => (
            <Ionicons name="search-outline" size={size} color={color} />
          ),
         }}

      />
      <Tab.Screen 
        name="Notification" 
        component={NotificationScreen}
        options={{ 
          tabBarIcon: ({color, size}) => (
            <Ionicons name="notifications-outline" size={size} color={color} />
          ),
         }}
       />
    </Tab.Navigator>
  )
}

export default function App() {
  return (
    <NavigationContainer>
      <Drawer.Navigator 
      initialRouteName="Home"
      screenOptions={{ 
        headerShown: false,
       }}
      >
        <Drawer.Screen name="Home" component={HomeStackNavigator} />
        <Drawer.Screen name="Settings" component={SettingsScreen} />
      </Drawer.Navigator>
    </NavigationContainer>
  );
}

