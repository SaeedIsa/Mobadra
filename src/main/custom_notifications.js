import { StatusBar } from 'expo-status-bar';

import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import * as firebase from 'firebase';

// Optionally import the services that you want to use
import "firebase/auth";
// const Hexagon = () => {
//   return (
//     <View style={styles.hexagon}>
//         <View style={styles.hexagonInner} />
//         <View style={styles.hexagonBefore} />
//         <View style={styles.hexagonAfter} />
//         <Text style={{fontSize: 20, color: 'black'}}>
//           try1
//         </Text>
//       </View>
//   );}
const signout = () => {
  firebase.auth().signOut();
}
function CustomNotifications() {
  return (
    <View style={styles.container}>
      <Text style={styles.welcome_txt}>this is notifications screen</Text>
      <Text style={styles.secondary_welcome_txt}>notifications list</Text>
      <Button title={'Sign out'} onPress={signout}></Button>
      {/* <Hexagon>
        <Text style={{fontSize: 20, color: 'black'}}>
          try1
        </Text>
      </Hexagon> */}
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
    },
    hexagon: {
      width: 100,
      height: 55
    },
    hexagonInner: {
      width: 100,
      height: 55,
      backgroundColor: 'red'
    },
    hexagonAfter: {
      position: 'absolute',
      bottom: -25,
      left: 0,
      width: 0,
      height: 0,
      borderStyle: 'solid',
      borderLeftWidth: 50,
      borderLeftColor: 'transparent',
      borderRightWidth: 50,
      borderRightColor: 'transparent',
      borderTopWidth: 25,
      borderTopColor: 'red'
    },
    hexagonBefore: {
      position: 'absolute',
      top: -25,
      left: 0,
      width: 0,
      height: 0,
      borderStyle: 'solid',
      borderLeftWidth: 50,
      borderLeftColor: 'transparent',
      borderRightWidth: 50,
      borderRightColor: 'transparent',
      borderBottomWidth: 25,
      borderBottomColor: 'red'
  
    }
  });
  
export default CustomNotifications
