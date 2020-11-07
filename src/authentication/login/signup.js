import React, {useState, useEffect} from 'react';
import { Text, View, ActivityIndicator, StyleSheet, TextInput, TouchableOpacity, Dimensions } from 'react-native';
const {width, height} = Dimensions.get('window');

import * as firebase from 'firebase';

function Signup ({navigation}) {
    const [fullName, setFullName] = useState("");
    const [email, setEmail] = useState("");
    const [pass, setPass] = useState("");
    const [repass, setRepass] = useState("");
    const [error, setError] = useState(null);
    const [welcome, setWelcome] = useState(null);

    const handleSignUp = () => {
        if (pass != repass) {
            setError('Passwords cofirmation failed!');
            return
        }
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
            <View style={styles.signup}>
                <Text style={[styles.logo, {fontSize: 30, color: 'white', fontWeight: 'bold'}]}>
                    Welcome to registeration part
                </Text>
                <View style={styles.errorView}>
                    {error && <Text style={styles.errorMessage}>{error}</Text>}
                </View>
                <View style={styles.signupForm}>
                    <View>
                        <TextInput style={styles.textInput} autoCapitalize='none' 
                            onChangeText={fullName => setFullName(fullName) }
                            value={fullName}
                            placeholder={'Full name'}
                            placeholderTextColor='#e4eaf7'>
                        </TextInput>
                    </View>
                    <View>
                        <TextInput style={styles.textInput} autoCapitalize='none' 
                            onChangeText={email => setEmail(email) }
                            value={email}
                            placeholder={'Email address'}
                            placeholderTextColor='#e4eaf7'>
                        </TextInput>
                    </View>
                    <View>
                        <TextInput style={[styles.textInput]} secureTextEntry autoCapitalize='none' 
                            onChangeText={ pass => setPass(pass)}
                            value={pass}
                            placeholder={'Password'}
                            placeholderTextColor='#e4eaf7'>
                        </TextInput>
                    </View>
                    <View>
                        <TextInput style={[styles.textInput]} secureTextEntry autoCapitalize='none' 
                            onChangeText={ repass => setRepass(repass)}
                            value={repass}
                            placeholder={'Confirm password'}
                            placeholderTextColor='#e4eaf7'>
                        </TextInput>
                    </View>
                </View>
                <TouchableOpacity 
                    style={styles.button} 
                    onPress={handleSignUp}>
                    <Text style={{fontSize: 30, color: '#FFF', fontWeight: '700'}}>Sign up </Text>
                </TouchableOpacity>
            </View>
            <View style={styles.footer}>
                <View style={{ ...StyleSheet.absoluteFillObject, backgroundColor: '#006837'}}></View>
                <View style={[styles.footerContent] }>
                    <View style={{height: 72, alignItems: 'center', justifyContent: 'center'}}>
                        {welcome && <Text style={{fontSize: 18, color: 'green'}}>{welcome} {fullName}</Text>}
                    </View>
                </View>
            </View>
        </View>
    );

}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white',
    },
    signupForm: {
        marginBottom: 20,
        marginHorizontal: 20,
    },
    logo: {
        marginHorizontal: 30,
        marginTop: 40
    },
    signup: {
        height: 0.68 * height,
        backgroundColor: '#006837',
        borderBottomRightRadius: 80,
        justifyContent: 'center',
        alignItems: 'center'
    },
    errorView: {
        height: 72,
        alignItems: 'center',
        justifyContent: 'center'
    },
    errorMessage: {
        fontSize: 18,
        color: 'red',
        fontWeight: 'bold'
    },
    footer: {
        flex: 1
    },
    footerContent: {
        flex:1,
        backgroundColor: 'white', 
        borderTopLeftRadius: 75,
        justifyContent: 'center', alignContent: 'center'
    },
    textInput: {
        marginTop: 20,
        marginHorizontal: 30,
        borderBottomColor: 'white',
        borderBottomWidth: StyleSheet.hairlineWidth,
        height: 40,
        color: '#ebf0f7',
        fontSize: 20,
        width: 300,
        alignSelf: 'center',
        justifyContent: 'center',
        alignItems:'center',
        fontWeight: '500'
    },
    button: {
        marginHorizontal: 30,
        marginTop: 15,
        height: 40,
        alignSelf: 'center',
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 20
    },
  });
  
export default Signup

