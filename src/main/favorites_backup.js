import { StatusBar } from 'expo-status-bar';

import React, { useState } from 'react';
import { StyleSheet, Text, View, FlatList, ImageBackground, TouchableOpacity } from 'react-native';
import CustomHexagon from '../components/custom_icons/hexagon';
import CustomEvent from '../components/custom_icons/event_svg';
import CustomEventRow from '../components/custom_icons/event_row';


import { generate } from 'shortid';

const index_2_color = {
  0: {
    0: "#4997a5",
    1: "#76c9cf",
    2: "#2f7a92"
  },
  1: {
    0: "#2f7a92",
    1: "#4997a5",
    2: "#76c9cf",
  },
  2: {
    0: "#76c9cf",
    1: "#2f7a92",
    2: "#4997a5"
  }
}

const Categories = [
  "Education",
  "Gardening",
  "Food",
  "Something",
  "else",
  "yes"
]

const Data = [
  {"id": 1},
  {"id": 2},
  {"id": 2},
  {"id": 2},
  {"id": 2},
  {"id": 2},
  {"id": 2},

]

function Favorites() {
  const [category, setCategory] = useState('Education')
  const renderEvent = ({ item, index }) => {
    // console.log('rendering', item, 'index ', index)
    const i = index % 3;
    // console.log(i, index_2_color[i])
    return (
        <CustomEventRow
          colors_map={index_2_color[i]} 
          first={index===0 ? true : false}
          last={index===(Data.length -1) ? true : false}
          ></CustomEventRow>
      )};
  const on_category_select = (new_category) => {
    console.log(new_category);
    setCategory(new_category);
  }
  const renderCategory = ({ item, index }) => {
    // console.log('rendering', item, 'index ', index)
    const bg_color = item === category ? '#46474a' : 'transparent';
    const txt_color = item === category ? '#fff' : '#46474a';
    
    return (
      <TouchableOpacity style={{height: 40, alignContent:'center', alignItems: 'center', alignSelf:'flex-end', 
                  justifyContent:'center', marginRight: 10,  width: 140, borderColor: '#6c6d70', backgroundColor: bg_color, borderWidth: 4, borderRadius: 10}}
                        onPress={() => on_category_select(item)}>
          <Text style={{fontSize: 20,  fontWeight: 'bold', color: txt_color}}>{item}</Text>
      </TouchableOpacity>
      )};

  return (
    
    <View style={styles.container}>
      <ImageBackground source={require('../../assets/edu_bg.png')} style={styles.image}>
        <View style={{width: '100%', height: '25%'}}>
        <ImageBackground source={require('../../assets/edu_top_bg.png')} style={{height:'100%', width: '100%'}}>
          <Text style={styles.welcome_txt}>screen 3</Text>
          <FlatList 
            style={{marginBottom: 10, height: 40}}
            horizontal
            data={Categories}
            renderItem={(item, index) => renderCategory(item, index)}
            keyExtractor={item => generate()}
            showsHorizontalScrollIndicator={false}
          ></FlatList>
        </ImageBackground>
      </View>
        <FlatList 
          style={{marginBottom: 45}}
          data={Data}
          renderItem={(item, index) => renderEvent(item, index)}
          keyExtractor={item => generate()}
          >
        </FlatList>
      <StatusBar style="auto" />
      </ImageBackground>
    </View>
  );
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },
    welcome_txt: {
      fontWeight:"bold",
      fontSize:50,
      color:"#3589d4",
      marginTop: 50,
      textAlign: 'center',
    },
    secondary_welcome_txt: {
      fontWeight:"bold",
      fontSize:40,
      color:"#339c4d",
      textAlign: 'center',
    },
    image: {
      flex: 1,
      width: '100%',
      height: '100%',
      justifyContent: "center"
    },
    top_image: {
      flex: 1,
      width: '100%',
      height: '20%',
    },
    linearGradient: {
      flex: 1,
      paddingLeft: 15,
      paddingRight: 15,
      borderRadius: 5
    }
  });
  
export default Favorites

