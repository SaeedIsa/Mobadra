import React, {useState, useEffect} from 'react';
import { Text, View, StyleSheet, TextInput, TouchableOpacity, Dimensions } from 'react-native';
import { Entypo, FontAwesome } from '@expo/vector-icons';

import * as firebase from 'firebase';
import shared_styles from '../../custom_styles/shared_styles'

const {width, height} = Dimensions.get('window');


function Signin ({navigation}) {
    const [email, setEmail] = useState("");
    const [pass, setPass] = useState("");
    const [error, setError] = useState(null);

    // Email and password log in handler
    const loginWithEmail = () => {
        firebase.auth().signInWithEmailAndPassword(email, pass).catch(error => {
            console.log('error code is', error.code)
            if (error.code === 'auth/user-not-found') {
                setError('Email not found, sign up and be part of Mobadra!');
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

    return (
        <View style={styles.container}>
            <View style={styles.emailSignin}>
                <Text style={[shared_styles.logo, {fontSize: 30, color: 'white', fontWeight: 'bold'}]}>
                    Logo!
                </Text>
                <View style={shared_styles.errorView}>
                    {error && <Text style={shared_styles.errorMessage}>{error}</Text>}
                </View>``
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
                    onPress={loginWithEmail}>
                    <Text style={{fontSize: 30, color: '#FFF', fontWeight: '700'}}>Sign in </Text>
                </TouchableOpacity>
            </View>
            <View style={styles.footer}>
                <View style={{ ...StyleSheet.absoluteFillObject, backgroundColor: '#006837'}}></View>
                <View style={[styles.footerContent] }>
                    <View style={[styles.button, styles.socialButton]}>
                        {/* TODO: Facebook log in handler implementation */}
                        <FontAwesome.Button name="facebook" backgroundColor="#3b5998" size={22} onPress={() => {console.log('Facebook')}}>
                            Login with Facebook
                        </FontAwesome.Button>
                    </View>
                    <View style={[styles.button, styles.socialButton]}>
                        {/* TODO: Google log in handler implementation */}
                        <FontAwesome.Button name="google" backgroundColor="#dd4b39" size={22} onPress={() => {console.log('Google')}}>
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
