import React, {useState} from 'react';
import {Text, View, StyleSheet, Dimensions, TextInput, TouchableOpacity, Alert} from 'react-native';

const {width, height} = Dimensions.get('window');
import * as firebase from 'firebase';


const ForgotPassword = ({navigation}) => {
    const [email, setEmail] = useState("");
    const [error, setError] = useState(null);

    const sendMail = () => {
        console.log('send mail');
        firebase.auth().sendPasswordResetEmail(email).then(() => {
            Alert.alert('Email sent');
            navigation.navigate('Signin');
        }).catch( error => {
            console.log('error is ', error.code);
            if (error.code === 'auth/invalid-email') {
                setError('Email is invalid');
            }
        })

    }

    return (
        <View style={styles.container}>
            <View style={styles.forgotPassword}>
                <Text style={[styles.logo, {fontSize: 30, color: 'white', fontWeight: 'bold'}]}>
                    Mobadra!!!!!
                </Text>
                <View style={styles.errorView}>
                    {error && <Text style={styles.errorMessage}>{error}</Text>}
                </View>
                <View style={styles.form}>
                    <Text style={{marginHorizontal: 30, fontSize: 25, color: 'white'}}>
                        Forgot password?
                    </Text>
                    <View>
                        <TextInput style={styles.textInput} autoCapitalize='none' 
                            onChangeText={email => setEmail(email) }
                            value={email}
                            placeholder={'Enter email'}
                            placeholderTextColor='#e4eaf7'
                            >
                        </TextInput>
                    </View>
                    <View>
                        <TouchableOpacity 
                            style={styles.sendButton} 
                            onPress={sendMail}>
                            <Text style={{fontSize: 25, color: 'black'}}>
                                Send email
                            </Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
            <View style={styles.footer}>
                <View style={{ ...StyleSheet.absoluteFillObject, backgroundColor: '#006837'}}></View>
                <View style={[styles.footerContent] }>
                </View>
            </View>
        </View>
    );
};


const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white',
    },
    forgotPassword: {
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
    form: {
        marginBottom: 20,
        marginHorizontal: 20,
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
    sendButton: {
        marginHorizontal: 30,
        marginTop: 40,
        height: 40,
        alignSelf: 'center',
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 20,
        padding: 4,
        width: 180,
        backgroundColor: '#c0fad5'
    }
});

export default ForgotPassword;

