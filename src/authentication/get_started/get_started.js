import { StatusBar } from 'expo-status-bar';
import React, {useRef, useState} from 'react';
import {View, StyleSheet, Dimensions, ScrollView, Text, Animated} from 'react-native';
import {RectButton} from 'react-native-gesture-handler'
import { multiply } from 'react-native-reanimated';
import {useScrollHandler} from 'react-native-redash';

import Footer from './footer';

import Slide from './slide'

const {width, height} = Dimensions.get('window');

const gs_data = [
	{
		"ID": 1,
		"Title": "IDEA PAGE",
		"SubTitle": "Sub title page",
		"Description": "page description",
		"Image": "assets/get_started/title_page.png"
	},
	{
		"ID": 2,
		"Title": "EVENT Joining PAGE",
		"SubTitle": "Sub title event joining page",
		"Description": "event joining page description",
		"Image": "assets/get_started/event_joining_page.png"
	},
	{
		"ID": 3,
		"Title": "EVENT Creation PAGE",
		"SubTitle": "Sub title event creation page",
		"Description": "event creation page description",
		"Image": "assets/get_started/event_creation_page.png"
	}
]

const GetStarted = () => {
    const scrollRef = useRef(null);
    return(
        <View style={styles.container}>
            <View style={styles.slider}>
                <Animated.ScrollView
                    ref={scrollRef}
                    horizontal
                    snapToInterval={width}
                    decelerationRate="fast"
                    showsHorizontalScrollIndicator={false}
                    scrollEventThrottle={1}
                    bounces={false}
                    >
                    {gs_data.map( (pageInfo) => (
                        <Slide key={pageInfo.ID} 
                        title={pageInfo.Title}
                        subtitle={pageInfo.SubTitle}
                        description={pageInfo.Description}
                        image={pageInfo.Image}
                        />
                    ))}
                </Animated.ScrollView>
            </View>
            <View style={styles.footer}>
                <View style={{ ...StyleSheet.absoluteFillObject, backgroundColor: '#339c4d'}}></View>
                <View style={styles.footerContent} >
                <RectButton style={styles.buttonStyle} 
                        onPress={() => {
                                console.log('on press, scrolling to');
                                console.log(scrollIdx * width);
                                ref.scrollTo({x: scrollIdx * width , animated: true});
                        }}
                    >
                        <Text style={styles.buttonTextStyle}>
                            nnext
                        </Text>
                    </RectButton>
                </View>
            </View>
        </View>
    );
}

{/* <Animated.View 
                    style={
                        [styles.footerContent, 
                        {width: width * gs_data.length,
                        transform: [{
                            translateX: multiply(x, -1)
                        }]
                    }]}>
                    {gs_data.map( (_, index) => (
                        <Footer key={index} last={index === (gs_data.length -1)}></Footer>
                    ))}
                </Animated.View> */}

{/* <RectButton style={styles.buttonStyle} 
                        onPress={() => {
                                console.log('on press, scrolling to');
                                console.log(scrollIdx * width);
                                ref.scrollTo({x: scrollIdx * width , animated: true});
                        }}
                    >
                        <Text style={styles.buttonTextStyle}>
                            nnext
                        </Text>
                    </RectButton> */}
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
    },
    footerContent: {
        flex: 1, 
        backgroundColor: 'white', 
        borderTopLeftRadius: 75,
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'row',
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
        fontFamily: 'SFProText-Semibold'
    }
});