import { StatusBar } from 'expo-status-bar';
import React, {useEffect, useState} from 'react';
import { StyleSheet, Text, View, AsyncStorage } from 'react-native';


import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import AppIntroduction from './src/authentication/introduction/app_introduction';
import Main from './src/main/main';
import Login from './src/authentication/login/login';
import Signin from './src/authentication/login/signin';
import Signup from './src/authentication/login/signup';
import ForgotPassword from './src/authentication/login/forgot_password';

// const fonts = {
//   "SFProText-Bold": require("./assets/fonts/SF-Pro-Text-Bold.otf"),
//   "SFProText-Semibold": require("./assets/fonts/SF-Pro-Text-Semibold.otf"),
//   "SFProText-Regular": require("./assets/fonts/SF-Pro-Text-Regular.otf"),
// };

import * as firebase from 'firebase';
import firebaseConfig from './src/firebase/firebase'

// Creating Welcome screen 
function WelcomeScreen({navigation}) {
  if (!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig);
  }
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
      console.log('navigating to login');
      navigation.navigate('AppIntroduction');
    } else {
      console.log('navigating to App introduction');
      navigation.navigate('AppIntroduction');
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
      <Stack.Screen name="AppIntroduction" component={AppIntroduction}/>
      <Stack.Screen name="Main" component={Main}/>
      <Stack.Screen name="Login" component={Login}/>
      <Stack.Screen name="Signin" component={Signin}/>
      <Stack.Screen name="Signup" component={Signup}/>
      <Stack.Screen name="ForgotPassword" component={ForgotPassword}/>
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
