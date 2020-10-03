import { StatusBar } from 'expo-status-bar';

import React from 'react';
import { StyleSheet, Text, View } from 'react-native';


function Notifications() {
  return (
    <View style={styles.container}>
      <Text style={styles.welcome_txt}>this is notifications screen</Text>
      <Text style={styles.secondary_welcome_txt}>notifications list</Text>
      <StatusBar style="auto" />
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
  
export default Notifications
