import { StatusBar } from 'expo-status-bar';
import React from 'react';
import {View, StyleSheet, Dimensions, ScrollView} from 'react-native';

import Slide from './slide'

const {width, height} = Dimensions.get('window');

const GetStarted = () => {
    return(
        <View style={styles.container}>
            <View style={styles.slider}>
                <ScrollView horizontal
                    snapToInterval={width}
                    decelerationRate="fast"
                    showsHorizontalScrollIndicator={false}
                    scrollEventThrottle={1}
                    bounces={false}>
                    <Slide label='Slide1' />
                    <Slide label='Slide2' />
                    <Slide label='Slide3' />
                </ScrollView>
            </View>
            <View style={styles.footer}>
                <View style={{ ...StyleSheet.absoluteFillObject, backgroundColor: '#339c4d'}}></View>
                <View style={{flex: 1, backgroundColor: 'white', borderTopLeftRadius: 75}} />
            </View>
        </View>
    );
}

export default GetStarted

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white'
    },
    slider: {
        height: 0.61 * height,
        backgroundColor: '#339c4d',
        borderBottomRightRadius: 80,
    },
    footer: {
        flex: 1
    }
});