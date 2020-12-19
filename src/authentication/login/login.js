import React, {useState, useEffect} from 'react';
import { Text, View, ActivityIndicator} from 'react-native';

import * as firebase from 'firebase';
import "firebase/auth";


function Login({navigation}) {
  // Handle user state changes, whether he is already logged in or not.
  function onAuthStateChanged(user) {
    if (user) {
      navigation.navigate('Main');
    } else {
      // navigation.navigate('Signin');
      navigation.navigate('Main');
    }
  }

  useEffect(() => {
    const subscriber = firebase.auth().onAuthStateChanged(onAuthStateChanged);
    return subscriber; // unsubscribe on unmount
  }, []);

  return (
    <View style={{flex: 1,
                  backgroundColor: '#fff',
                  alignItems: 'center',
                  justifyContent: 'center',
                }}>
        <Text style={{fontWeight:"bold",
                      fontSize:50,
                      color:"#339c4d",
                      textAlign: 'center',
                      marginBottom:40}}>
          Loading...
        </Text>
        <ActivityIndicator size='large'/>
    </View>
  );
}
 
export default Login
