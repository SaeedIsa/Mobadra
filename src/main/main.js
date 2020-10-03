import React from 'react';
import {View, Text} from 'react-native';

// Navigation components, tab and icons
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

// Tab screens
import Home from './home'
import Notifications from './notifications'
import Favorites from './favorites'

const Tab = createMaterialBottomTabNavigator();

// Creating tabs main screen
class Main extends React.Component {
    render() {
      return (
        <Tab.Navigator 
          initialRouteName="Home"
          activeColor="#f0edf6"
          shifting={true}
          inactiveColor="#3e2465"
          barStyle={{backgroundColor: '#339c4d', opacity: 70, borderColor: '#989898', borderWidth:2}}
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
            component={Notifications}
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
  }
    
  export default Main
  