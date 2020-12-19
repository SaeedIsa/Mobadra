import React from 'react';
import {StyleSheet, Text, View} from 'react-native';

const shared_styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white'
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
});

  
export default shared_styles
