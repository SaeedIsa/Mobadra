import { StatusBar } from 'expo-status-bar';
import React, {A, useEffect, useState} from 'react';
import { StyleSheet, Text, View, AsyncStorage } from 'react-native';


import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import GetStarted from './src/authentication/get_started/get_started';
import Main from './src/main/main'

// const fonts = {
//   "SFProText-Bold": require("./assets/fonts/SF-Pro-Text-Bold.otf"),
//   "SFProText-Semibold": require("./assets/fonts/SF-Pro-Text-Semibold.otf"),
//   "SFProText-Regular": require("./assets/fonts/SF-Pro-Text-Regular.otf"),
// };

// Creating Welcome screen 
function WelcomeScreen({navigation}) {
  
  const [opened, setOpened] = useState(false);
  const loadData = async () => {
    const openedApp = await AsyncStorage.getItem('@APPConfig:Opened');
    if (openedApp) {
      const openedAppParsed = JSON.parse(openedApp);
      setOpened(openedApp);
    }
  }

  useEffect(() => {
    loadData();
  }, [opened]);

  

  setTimeout(() => {
    // Moving to HomeScreen after timeout - this meant to be loading welcome page
    if (opened) {
      navigation.navigate('Main');
    } else {
      console.log('never opened');
    }
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
      <Stack.Screen name="Main" component={Main}/>
    </Stack.Navigator>
  )
};

export default function App() {
  return (
    <NavigationContainer>
      <AppNavigator/>
    </NavigationContainer>
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
