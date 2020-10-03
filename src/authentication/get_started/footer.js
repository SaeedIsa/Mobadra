import React from 'react';
import {View, StyleSheet, Text} from 'react-native';
import {RectButton} from 'react-native-gesture-handler';


const Footer = ({last, onPress}) => {
    return (
        <View style={styles.footerContent}>
            <RectButton style={styles.buttonStyle}
                onPress={onPress}>
                <Text style={styles.buttonTextStyle}>
                    {last ? 'Lets get started' : 'Next'}
                </Text>
            </RectButton>
        </View>
    );
}


const styles = StyleSheet.create({
    footerContent: {
        flex: 1, 
        backgroundColor: 'white', 
        borderTopLeftRadius: 75,
        justifyContent: 'center',
        alignItems: 'center',
    },
    buttonStyle: {
        backgroundColor: '#c9d1cf', 
        justifyContent: 'center', 
        alignItems: 'center',
        width: 100,
        height: 40,
        borderRadius: 5
    },
    buttonTextStyle: {
        color: '#339c4d', 
        fontSize: 25,
        // fontFamily: 'SFProText-Semibold'
    }
});

export default Footer