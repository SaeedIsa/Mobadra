import React, {useState, useEffect} from 'react';
import { Text, View, ActivityIndicator, StyleSheet } from 'react-native';

import Signin from './signin';
import Main from '../../main/main';
import * as firebase from 'firebase';

// Optionally import the services that you want to use
import "firebase/auth";
import "firebase/database";
import "firebase/firestore";


function Login({navigation}) {
  // Set an initializing state whilst Firebase connects
  const [initializing, setInitializing] = useState(true);
  const [user, setUser] = useState();

  console.log('Debug1');

  // Handle user state changes
  function onAuthStateChanged(user) {
    if (user) {
      navigation.navigate('Main');
    } else {
      navigation.navigate('Signin');
    }
  }

  useEffect(() => {
    const subscriber = firebase.auth().onAuthStateChanged(onAuthStateChanged);
    return subscriber; // unsubscribe on unmount
  }, []);

  return (
    <View style={styles.container}>
      <Text style={styles.welcome_txt}>Loading...</Text>
      <ActivityIndicator size='large'></ActivityIndicator>
    </View>
  );
}
  
const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },
    welcome_txt: {
      fontWeight:"bold",
      fontSize:50,
      color:"#339c4d",
      textAlign: 'center',
      marginBottom:40
    },
    secondary_welcome_txt: {
      fontWeight:"bold",
      fontSize:40,
      color:"#339c4d",
      textAlign: 'center',
    }
  });
    
  export default Login