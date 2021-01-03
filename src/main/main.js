import React, {useEffect} from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';

// Navigation components, tab and icons
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

// Tab screens
import Home from './home'
import CustomNotifications from './custom_notifications'
import Favorites from './favorites'

const Tab = createMaterialBottomTabNavigator();

// Creating tabs main screen
function Main() {
  useEffect(() =>{
    AsyncStorage.setItem('@APPConfig:Opened', JSON.stringify(true));
  }, [])

  return (
    <Tab.Navigator 
      initialRouteName="Home"
      activeColor="#f0edf6"
      shifting={true}
      inactiveColor="#3e2465"
      barStyle={{
          backgroundColor: 'transparent',
          position: 'absolute',
          height: 45,
          marginBottom: 5,
      }}
      >
      <Tab.Screen name="News" component={Home}
        options={{  
          tabBarLabel: 'News',
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="home" color={color} size={26} />
          ),
        }}
      />
      <Tab.Screen
        name="Notifications"
        component={CustomNotifications}
        options={{
          tabBarLabel: 'Inbox',
          tabBarBadge: 3,
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="inbox-arrow-down" color={color} size={26} />
          ),
        }}
      />
      <Tab.Screen name="Fav" component={Favorites}
        options={{
          tabBarLabel: 'Favorites',
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="heart" color={color} size={26} />
          ),
        }} 
      />
    </Tab.Navigator>
  );
}
    
  export default Main
  