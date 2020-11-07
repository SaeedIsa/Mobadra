import React, {useState, useEffect} from 'react';
import { Text, View, ActivityIndicator, StyleSheet, TextInput, TouchableOpacity, Dimensions, Alert } from 'react-native';
import { Entypo, FontAwesome } from '@expo/vector-icons';

import * as firebase from 'firebase';
const {width, height} = Dimensions.get('window');


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

    const forgotPassword = () => {
        navigation.navigate('ForgotPassword')
    }

    async function loginWithFacebook() {
        try {
            await Facebook.initializeAsync({
                appId: '3433583816677371',
              });
            const {type, token } = await Facebook.logInWithReadPermissionsAsync({permissions: ['public_profile'],});
            if (type === 'success') {
                console.log('user has suuccceeeded his login ');
                console.log('type and token', type, token)
              const response = await fetch(`https://graph.facebook.com/me?access_token=${token}`);
              Alert.alert('Logged in!', `Hi ${(await response.json()).name}!`);
                const facebookCredential = firebase.auth.FacebookAuthProvider.credential(token)
                // Sign-in the user with the credential
                console.log('cred', facebookCredential)
                firebase.auth().signInWithCredential(facebookCredential).catch(error => {
                    console.log('error siginig innnnn', error.code);
                });
            } else {
              console.log('user has cancelled his login ');
            }
          } catch ({ message }) {
            console.log('user has cancelled his login ', message);
            }
    }   
    
    return (
        <View style={styles.container}>
            <View style={styles.emailSignin}>
                <Text style={[styles.logo, {fontSize: 30, color: 'white', fontWeight: 'bold'}]}>
                    Welcome back!!!!!
                </Text>
                <View style={styles.errorView}>
                    {error && <Text style={styles.errorMessage}>{error}</Text>}
                </View>
                <View style={styles.signinForm}>
                    <View>
                        <TextInput style={styles.textInput} autoCapitalize='none' 
                            onChangeText={email => setEmail(email) }
                            value={email}
                            placeholder={'Email address'}
                            placeholderTextColor='#e4eaf7'>
                        </TextInput>
                    </View>
                    <View>
                        <TextInput style={[styles.textInput, {marginTop: 40}]} secureTextEntry autoCapitalize='none' 
                            onChangeText={ pass => setPass(pass)}
                            value={pass}
                            placeholder={'Password'}
                            placeholderTextColor='#e4eaf7'>
                        </TextInput>
                        <TouchableOpacity 
                            style={{marginHorizontal: 30, marginTop: 10, width: 150}} 
                            onPress={forgotPassword}>
                            <Text style={{fontSize: 13, color: '#468E65'}}>
                                Forgot password?
                            </Text>
                        </TouchableOpacity>
                    </View>
                </View>
                <TouchableOpacity 
                    style={styles.button} 
                    onPress={handleLogin}>
                    <Text style={{fontSize: 30, color: '#FFF', fontWeight: '700'}}>Sign in </Text>
                </TouchableOpacity>
            </View>
            <View style={styles.footer}>
                <View style={{ ...StyleSheet.absoluteFillObject, backgroundColor: '#006837'}}></View>
                <View style={[styles.footerContent] }>
                    <View style={[styles.button, styles.socialButton]}>
                        <FontAwesome.Button name="facebook" backgroundColor="#3b5998" size={22} onPress={() => {console.log('facebook')}}>
                            Login with Facebook
                        </FontAwesome.Button>
                    </View>
                    <View style={[styles.button, styles.socialButton]}>
                        <FontAwesome.Button name="google" backgroundColor="#dd4b39" size={22} onPress={() => {console.log('google')}}>
                            Login with google
                        </FontAwesome.Button>
                    </View>
                    <TouchableOpacity style={{alignSelf: 'center', marginTop: 10, height: 40, alignItems: 'center', justifyContent: 'center'}} onPress={handleSignup}>
                        <Text style={{fontSize: 15, color: '#414959'}}>Not in Mobadra?! <Text style={{fontSize: 15, color:'blue'}}>Sign up</Text></Text>
                    </TouchableOpacity>
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
    emailSignin: {
        height: 0.61 * height,
        backgroundColor: '#006837',
        borderBottomRightRadius: 80,
        justifyContent: 'center',
        alignItems: 'center'
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
    logo: {
        marginHorizontal: 30,
        marginTop: 40
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
    signinForm: {
        marginBottom: 20,
        marginHorizontal: 20,
    },
    textInput: {
        marginTop: 10,
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
        marginTop: 20,
        height: 40,
        alignSelf: 'center',
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 20
    },
    socialButton: {
        paddingVertical: 5,
        paddingHorizontal: 20,
        height: 50
    },
    socialText: {
        fontSize: 22,
        color: 'white'
    }
  });
  
export default Signin
