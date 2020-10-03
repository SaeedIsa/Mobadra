import React from 'react';
import {StyleSheet, View, Text, Dimensions} from 'react-native';

const {width} = Dimensions.get("window")

const Slide = ({title, subtitle, description, image }) => {
    return (
        <View style={styles.container}>
            <View style={styles.titleContainer}>
                <Text style={styles.title}>
                    {title}
                </Text>
                <Text style={styles.subTitleStyle}>
                    {subtitle}
                </Text>
                <Text style={styles.descriptionStyle}>
                    {description}
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
        marginTop: 40,
        marginLeft: 20,
        marginRight: 20
    },
    title: {
        fontSize: 40,
        fontFamily: 'SFProText-Bold',
        color: 'white',
        textAlign: 'center'
    },
    subTitleStyle: {
        fontSize: 25,
        fontFamily: 'SFProText-Semibold',
        color: '#e9f0ea',
        textAlign: 'center',
        marginTop: 30
    },
    descriptionStyle: {
        fontSize: 15,
        fontFamily: 'SFProText-Semibold',
        color: '#e9f0ea',
        textAlign: 'center',
        marginTop: 15
    }
});