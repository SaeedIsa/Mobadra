import React, { useRef } from "react";
import {
  SafeAreaView,
  ScrollView,
  Text,
  StyleSheet,
  View,
  Button,
  Animated,
  useWindowDimensions,
  Alert
} from "react-native";
import AsyncStorage from '@react-native-async-storage/async-storage';

const slides = [
	{
		title: "1IDEA PAGE",
		subTitle: "Sub title page",
    description: "page description",
    buttons: [{
      title: "next",
      handler: "scroll_to_next"
    }]
	},
	{
		title: "2EVENT Joining PAGE",
		subTitle: "Sub title event joining page",
    description: "event joining page description",
    buttons: [{
      title: "prev",
      handler: "scroll_to_prev"
    },{
      title: "next",
      handler: "scroll_to_next"
    }]
  },
	{
		title: "3EVENT Creation PAGE",
		subTitle: "Sub title event creation page",
    description: "event creation page description",
    buttons: [{
      title: "prev",
      handler: "scroll_to_prev"
    },{
      title: "Get Started",
      handler: "get_started"
    }]
	}
];

const AppIntroduction = ( { navigation } ) => {
  const scroller = useRef(null);
  const scrollX = useRef(new Animated.Value(0)).current;
  const windowWidth = useWindowDimensions().width;
  const GetButtonHandler = (slide, slideIndex,buttonData) => { 
    if(buttonData.handler === 'get_started'){
      return (async () => { 
        await AsyncStorage.setItem('@APPConfig:PassedIntro', 'true');
        navigation.navigate("Login") 
      })
    }
    if(buttonData.handler === 'scroll_to_end'){
      return () => {
        if(scroller) {
          scroller.current.scrollToEnd({animated: true});
        }
      }
    }
    if(buttonData.handler === 'scroll_to_next'){
      return () => {
        if(scroller) {
          scroller.current.scrollTo({x: (slideIndex + 1) * windowWidth, animated: true});
        }
      }
    }
    if(buttonData.handler === 'scroll_to_prev'){
      return () => {
        if(scroller) {
          scroller.current.scrollTo({x: (slideIndex - 1) * windowWidth, animated: true});
        }
      }
    }

    return () => { 
        Alert.alert('Button handler is not defined') 
      }
   }

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.scrollContainer}>
        <ScrollView
          ref= {scroller}
          horizontal={true}
          style={styles.scrollViewStyle}
          pagingEnabled
          showsHorizontalScrollIndicator={false}
          onScroll={Animated.event([
            {
              nativeEvent: {
                contentOffset: {
                  x: scrollX
                }
              }
            }
          ], {useNativeDriver: false})}
          scrollEventThrottle={1}
        >
          {slides.map((slide, slideIndex) => {
            return (
              <View
                style={{ width: windowWidth, height: 250 }}
                key={slideIndex}
              > 
                  <Text style = {styles.title}>
                      {slide.title}
                  </Text>
                  <Text style = {styles.subTitle}>
                      {slide.subTitle}
                  </Text>
                  <Text style = {styles.description}>
                      {slide.description}
                  </Text>
                  <View style= {styles.buttonsContainer}>
                    {
                      slide.buttons.map((buttonData, buttonIndex) => {
                        return (
                        <View key={buttonIndex} style= {styles.button}>
                            <Button title={buttonData.title} onPress={ GetButtonHandler(slide, slideIndex,buttonData) }/>  
                        </View>
                        )
                      })
                    }
                  </View>
              </View>
            );
          })}
        </ScrollView>
        <View style={styles.indicatorContainer}>
          {slides.map((slide, slideIndex) => {
            const width = scrollX.interpolate({
              inputRange: [
                windowWidth * (slideIndex - 1),
                windowWidth * slideIndex,
                windowWidth * (slideIndex + 1)
              ],
              outputRange: [8, 16, 8],
              extrapolate: "clamp"
            });
            return (
              <Animated.View
                key={slideIndex}
                style={[styles.normalDot, { width }]}
              />
            );
          })}
        </View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#339c4d',
    flex: 1,
    alignItems: "center",
    justifyContent: "center"
  },
  scrollContainer: {
    height: '90%',
    alignItems: "center",
    justifyContent: "center"
  },
  card: {
    flex: 1,
    backgroundColor: 'red',
    marginVertical: 4,
    marginHorizontal: 16,
    borderRadius: 5,
    overflow: "hidden",
    alignItems: "center",
    justifyContent: "center"
  },
  title: {
    fontSize: 40,
    lineHeight: 40,
    color: "white",
    textAlign: "center"
  },
  subTitle: {
    fontSize: 30,
    lineHeight: 30,
    color: "white",
    textAlign: "center"
  },
  description: {
    fontSize: 20,
    lineHeight: 20,
    color: "white",
    textAlign: "center"
  },
  buttonsContainer: {
    paddingTop: 200,
    flexDirection: "row",
    justifyContent: "center"
  },
  button: {
    width: '30%',
    padding: 5
  },
  normalDot: {
    height: 8,
    width: 8,
    borderRadius: 4,
    backgroundColor: "silver",
    marginHorizontal: 4
  },
  indicatorContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center"
  }
});

export default AppIntroduction;
