import React, {useState, useEffect} from 'react';

import { StyleSheet, Text, View, FlatList, ActivityIndicator} from 'react-native';
import { generate } from 'shortid';
import { EvilIcons } from '@expo/vector-icons';

const DATA = [
  {
    id: 1,
    title: 'Yom tawjehe',
    location: 'Majd El kurum',
    date: 'Nov 17th, 2020',
    Category: 'Education'
  },
  {
    id: 2,
    title: 'Tndef bld',
    location: 'Tor3an',
    date: 'Dec 3rd, 2020',
    Category: 'Education'
  },
  {
    id: 3,
    title: 'Yom mfto7 jam3at',
    location: 'Technion, Haifa',
    date: 'Oct 11th, 2020',
    Category: 'Education'
  },
  {
    id: 4,
    title: 'Mobadra4',
    location: 'Der el asad',
    date: 'Jan 17th, 2021',
    Category: 'Education'
  },
  {
    id: 5,
    title: 'Trees cleaning',
    location: 'El jalahy',
    date: 'Sept 11th, 2020',
    Category: 'Education'
  },
  {
    id: 6,
    title: 'Mobadra5',
    location: 'Somewhere, Germany',
    date: 'Apr 21th, 2021',
    Category: 'Education'
  },
  {
    id: 7,
    title: 'Build House',
    location: 'Here, Tera',
    date: 'Aug 12th, 2021',
    Category: 'Education'
  },
  {
    id: 8,
    title: 'Build House2',
    location: 'Here, Tera',
    date: 'Aug 12th, 2021',
    Category: 'Education'
  },
];

import * as firebase from 'firebase';

// Optionally import the services that you want to use
import "firebase/auth";
import "firebase/database";
import "firebase/firestore";


import firebaseConfig from '../firebase/firebase'

const Item = ({ title, location }) => (
  <View style={styles.listStyle}>
    <Text style={styles.title}>{title}</Text>
    <Text style={styles.location}>
      <EvilIcons
        name='location'
        size={16}
        color='black'
        style={{ marginRight: 5 }}
      />
      {location}
    </Text>
  </View>
);

function Home() {
  const [loading, setLoading] = useState(true); // Set loading to true on component mount
  const [educationEvents, setEducationEvents] = useState([]);  // Initial empty array of events
  if (!firebase.apps.length) {
      firebase.initializeApp(firebaseConfig);
  }

  useEffect(() => {
    const subscriber = firebase.firestore()
      .collection('initiatives')
      .onSnapshot(querySnapshot => {
        const events = {};
        querySnapshot.forEach(documentSnapshot => {
          events[documentSnapshot.id] = Object.values(documentSnapshot.data())
        });
        
        setEducationEvents(events['education']);
        setLoading(false);
      });
  
    // Unsubscribe from events when no longer in use
    return () => subscriber();
  }, []);

  if (loading) {
    return <ActivityIndicator />;
  }

  const renderItem = ({ item }) => {
    return (
    <Item title={item.Title} location={item.Location} />
  )};

  return (
    <View style={styles.container}>
       <FlatList
        data={educationEvents}
        renderItem={renderItem}
        style={{marginTop: 40}}
        keyExtractor={item => generate()}
        numColumns={2}
      />
    </View>
  );
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      justifyContent: 'center',
    },
    welcome_txt: {
      fontWeight:"bold",
      fontSize:50,
      color:"#339c4d",
      textAlign: 'center',
      marginBottom:40
    },
    secondary_welcome_txt: {
      fontWeight:"bold",
      fontSize:20,
      color:"black",
      textAlign: 'center',
    },
    listStyle: {
      flex:1,
      margin: 10,
      flexDirection: 'column',
      backgroundColor: '#2985ba',
      borderRadius: 15,
      height: 100
    },
    title: {
      fontSize: 20,
      marginTop: 5,
      marginLeft:5,
      color: 'white',
    },
    location: {
      fontSize: 12,
      marginLeft: 5,
      color: 'white',
    }
  });
  
export default Home
