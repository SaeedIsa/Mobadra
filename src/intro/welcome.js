import React, {useEffect, useState} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';


import * as firebase from 'firebase';
import firebaseConfig from '../firebase/firebase_config';


const logo_timeout = 5000  // milliseconds

function WelcomeScreen({navigation}) {
    // If firebase app is not instaniated yet, initialize with config
    if (!firebase.apps.length) {
        firebase.initializeApp(firebaseConfig);
    }

    // Check if already passed the app introduction or not. Hence, navigate accordingly
    const [passedIntro, setPassedIntro] = useState(false);
    const loadData = async () => {
      const introDone = await AsyncStorage.getItem('@APPConfig:PassedIntro');
      if (introDone) {
        setPassedIntro(introDone);
      }
    }
  
    useEffect(() => {
      loadData();
    }, [passedIntro]);
    
    // Navigate after loading Mobadra logo (animation expected)
    setTimeout(() => {
        if (passedIntro) {
            console.log('navigating to login'); // TODO: remove log
            navigation.navigate('Login');
        } else {
            console.log('navigating to App introduction'); // TODO: remove log
            navigation.navigate('AppIntroduction');
        }
    }, logo_timeout);
    
    return (
        <View style={{flex:1, 
                      backgroundColor: '#fff',
                      alignItems: 'center',
                      justifyContent: 'center'}}>
            <Text style={{fontSize: 20, color: '#339c4d'}}>
                This is welcome screen
            </Text>
            <Text style={{fontSize: 20, color: '#339c4d'}}>
                waiting 5 seconds before Moving
            </Text>
        </View>
    );
}
  
export default WelcomeScreen
