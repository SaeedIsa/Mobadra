import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import GetStarted from './src/authentication/get_started/get_started';
import LoadAssets from './src/components/load_assets';

const fonts = {
  "SFProText-Bold": require("./assets/fonts/SF-Pro-Text-Bold.otf"),
  "SFProText-Semibold": require("./assets/fonts/SF-Pro-Text-Semibold.otf"),
  "SFProText-Regular": require("./assets/fonts/SF-Pro-Text-Regular.otf"),
};

const AuthernticationStack = new createStackNavigator();

const AuthenticationNavigator = () => {
  return (
    <AuthernticationStack.Navigator headerMode="none">
      <AuthernticationStack.Screen name="welcoming" component={GetStarted}/>
    </AuthernticationStack.Navigator>
  )
};

export default function App() {
  return (
    <LoadAssets {...{fonts}}>
      <AuthenticationNavigator/>
    </LoadAssets>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
