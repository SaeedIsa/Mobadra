import { StatusBar } from 'expo-status-bar';
import React, {useRef, useState} from 'react';
import {View, StyleSheet, Dimensions, ScrollView, Text, Animated} from 'react-native';
import {RectButton} from 'react-native-gesture-handler'

import Footer from './footer';

import Slide from './slide'
import Main from '../../main/main'
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

const GetStarted = ({navigation}) => {
    const scrollRef = useRef(null);
    const [scrollIdx, setScrollIdx] = useState(0);
    const [offset, setOffset] = useState(0);
    return(
        <View style={styles.container}>
            <View style={styles.slider}>
                <ScrollView
                    ref={scrollRef}
                    horizontal
                    snapToInterval={width}
                    decelerationRate="fast"
                    showsHorizontalScrollIndicator={false}
                    scrollEventThrottle={16}
                    bounces={false}
                    onScrollEndDrag= { (e) => {
                        if (e.nativeEvent.contentOffset.x > offset) {
                            if (scrollIdx !== (gs_data.length - 1)) {
                                setScrollIdx(scrollIdx => (scrollIdx + 1));
                            }
                        } else {
                            if (scrollIdx !== 0) {
                                setScrollIdx(scrollIdx => (scrollIdx - 1));
                            }
                        }
                        setOffset(e.nativeEvent.contentOffset.x);
                    }}
                    >
                    {gs_data.map( (pageInfo) => (
                        <Slide key={pageInfo.ID} 
                        title={pageInfo.Title}
                        subtitle={pageInfo.SubTitle}
                        description={pageInfo.Description}
                        image={pageInfo.Image}
                        />
                    ))}
                </ScrollView>
            </View>
            <View style={styles.footer}>
                <View style={{ ...StyleSheet.absoluteFillObject, backgroundColor: '#339c4d'}}></View>
                <View style={styles.footerContent} >
                  <RectButton style={styles.buttonStyle} 
                        onPress={() => {
                                scrollRef.current.scrollTo({x: (scrollIdx + 1) * width , animated: true});
                                if (scrollIdx !== (gs_data.length - 1)) {
                                    setScrollIdx((scrollIdx) => (scrollIdx + 1))
                                } else {
                                    navigation.navigate('Main');
                                }
                        }}>
                        <Text style={styles.buttonTextStyle}>
                            {scrollIdx !== (gs_data.length - 1) ? 'next' : 'lets go'}  
                        </Text>
                    </RectButton>
                </View>
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
        // fontFamily: 'SFProText-Semibold'
    }
});