import React, {useState, useEffect} from 'react';
import { Text, View, ActivityIndicator, StyleSheet, TextInput, TouchableOpacity } from 'react-native';

import * as firebase from 'firebase';

function Signup ({navigation}) {
    const [fullName, setFullName] = useState("");
    const [email, setEmail] = useState("");
    const [pass, setPass] = useState("");
    const [repass, setRepass] = useState("");
    const [error, setError] = useState(null);
    const [welcome, setWelcome] = useState(null);

    const handleSignUp = () => {
        firebase.auth().createUserWithEmailAndPassword(email, pass).then(() => {
            console.log('User account created & signed in!');
            setWelcome('Welcome to mobadra!')
          })
          .catch(error => {
            console.log('error code is', error.code)
            if (error.code === 'auth/email-already-in-use') {
                setError('That email address is already in use!');
            } else if(error.code === 'auth/invalid-email') {
                setError('That email address is invalid!');
            } else {
                setError(error.message);
            }
        })
    }

    return (
        <View style={styles.container}>
            <Text style={{fontSize: 20}}>Regiter to Mobaaaadra</Text>
            <View style={{height: 72, alignItems: 'center', justifyContent: 'center'}}>
                {error && <Text style={{fontSize: 15, color: 'red'}}>{error}</Text>}
            </View>
            <View style={styles.form}>
                <View>
                    <Text style={styles.inputTitle}>Full name:</Text>
                    <TextInput style={styles.textInput} autoCapitalize='none' 
                    onChangeText={fullName => setFullName(fullName) }
                    value={fullName}></TextInput>
                </View>
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
                <View>
                    <Text style={styles.inputTitle}>Confirm Password:</Text>
                    <TextInput style={styles.textInput} secureTextEntry autoCapitalize='none' 
                    onChangeText={ repass => setRepass(repass)}
                    value={repass}></TextInput>
                </View>
            </View>
            <TouchableOpacity style={styles.button} onPress={handleSignUp}>
                <Text style={{fontSize: 20, color: '#FFF'}}>Sign up </Text>
            </TouchableOpacity>
            <View style={{height: 72, alignItems: 'center', justifyContent: 'center'}}>
                {welcome && <Text style={{fontSize: 18, color: 'green'}}>{welcome} {fullName}</Text>}
            </View>
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
  
export default Signup

