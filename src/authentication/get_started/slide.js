import React from 'react';
import {StyleSheet, View, Text, Dimensions} from 'react-native';

const {width} = Dimensions.get("window")

const Slide = ({label}) => {
    return (
        <View style={styles.container}>
            <View style={styles.titleContainer}>
                <Text style={styles.title}>
                    {label}
                </Text>
                <Text style={styles.textStyle}>
                    some text describe getting started relevant step ...
                </Text>
            </View>
        </View>
    );
}

export default Slide

const styles = StyleSheet.create({
    container: {
        flex: 1,
        width: width
    },
    titleContainer: {
        justifyContent: 'center',
        marginTop: 30
    },
    title: {
        fontSize: 40,
        fontFamily: 'SFProText-Bold',
        color: 'white',
        textAlign: 'center'
    },
    textStyle: {
        fontSize: 25,
        fontFamily: 'SFProText-Semibold',
        color: '#e9f0ea',
        textAlign: 'center',
        marginTop: 30
    }
});