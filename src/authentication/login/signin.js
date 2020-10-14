import React, {useState, useEffect} from 'react';
import { Text, View, ActivityIndicator, StyleSheet, TextInput, TouchableOpacity } from 'react-native';

import * as firebase from 'firebase';

function Signin ({navigation}) {
    const [email, setEmail] = useState("");
    const [pass, setPass] = useState("");
    const [error, setError] = useState(null);

    const handleLogin = () => {
        firebase.auth().signInWithEmailAndPassword(email, pass).catch(error => {
            console.log('error code is', error.code)
            if (error.code === 'auth/user-not-found') {
                setError('Email not found, sign up man!');
            } else if(error.code === 'auth/invalid-email') {
                setError('That email address is invalid!');
            } else {
                setError(error.message);
            }
        })
    }

    const handleSignup = () => {
        navigation.navigate('Signup')
    }

    return (
        <View style={styles.container}>
            <Text style={{fontSize: 20}}>Welcome back!!!!!</Text>
            <View style={{height: 72, alignItems: 'center', justifyContent: 'center'}}>
                {error && <Text style={{fontSize: 15, color: 'red'}}>{error}</Text>}
            </View>
            <View style={styles.form}>
                <View>
                    <Text style={styles.inputTitle}>Email:</Text>
                    <TextInput style={styles.textInput} autoCapitalize='none' 
                    onChangeText={email => setEmail(email) }
                    value={email}></TextInput>
                </View>
                <View>
                    <Text style={styles.inputTitle}>Password:</Text>
                    <TextInput style={styles.textInput} secureTextEntry autoCapitalize='none' 
                    onChangeText={ pass => setPass(pass)}
                    value={pass}></TextInput>
                </View>
            </View>
            <TouchableOpacity style={styles.button} onPress={handleLogin}>
                <Text style={{fontSize: 20, color: '#FFF'}}>Sign in </Text>
            </TouchableOpacity>

            <TouchableOpacity style={{alignSelf: 'center', marginTop: 12}} onPress={handleSignup}>
                <Text style={{fontSize: 15, color: '#414959'}}>Not in Mobadra?! <Text style={{fontSize: 15, color:'blue'}}>Sign up</Text></Text>
            </TouchableOpacity>
        </View>
    );

}

const styles = StyleSheet.create({
    form: {
        marginBottom: 20,
        marginHorizontal: 20,
    },
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },
    inputTitle: {
        marginTop: 20,
        color: '#8A8F9E',
        fontSize: 20,
        width: 250,
        textTransform: 'uppercase'
    },
    textInput: {
        borderBottomColor: '#8A8F9E',
        borderBottomWidth: StyleSheet.hairlineWidth,
        height: 50,
        color: '#161F3D',
        fontSize: 20
    },
    button: {
        marginHorizontal: 20,
        backgroundColor: '#E9446A',
        borderRadius: 4,
        height: 40,
        alignItems: 'center',
        justifyContent: 'center',
        width: 120
    }
  });
  
export default Signin

