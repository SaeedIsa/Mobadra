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

// Creating Welcome screen 
function WelcomeScreen({navigation}) {
  setTimeout(() => {
    // Moving to HomeScreen after timeout - this meant to be loading welcome page
    navigation.navigate('getStarted');
  }, 5000);  // 5000 millisecond => 3 seconds
    
  return (
    <View style={styles.container}>
      <Text style={styles.welcomeText}>
        This is welcome screen - waiting 5 seconds before moving
      </Text>
      <StatusBar style="auto" />
    </View>
  );
}

const Stack = new createStackNavigator();

const AppNavigator = () => {
  return (
    <Stack.Navigator headerMode="none">
      <Stack.Screen name="Welcome" component={WelcomeScreen}/>
      <Stack.Screen name="getStarted" component={GetStarted}/>
    </Stack.Navigator>
  )
};

export default function App() {
  return (
    <LoadAssets {...{fonts}}>
      <AppNavigator/>
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
  welcomeText: {
    fontSize: 20,
    color: '#339c4d'
  }
});
