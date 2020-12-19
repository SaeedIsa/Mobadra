import React from 'react';

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

// Importing screens components
import WelcomeScreen from '../intro/welcome';
import AppIntroduction from '../intro/app_introduction';
import Main from '../main/main';
import Login from '../authentication/login/login';
import Signin from '../authentication/login/signin';
import Signup from '../authentication/login/signup';
import ForgotPassword from '../authentication/login/forgot_password';


const Stack = new createStackNavigator();


// Building all app navigator screen stack
const AppStack = () => {
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


// Building APP navigator
export default AppNavigator = () => (
  <NavigationContainer>
    <AppStack />
  </NavigationContainer>
);