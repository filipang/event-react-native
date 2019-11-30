console.disableYellowBox = true;
import React, { useState } from 'react';
import {StyleSheet, View, FlatList} from 'react-native';
import PostComponent from '../components/PostComponent';
import firebase from 'firebase';



require('firebase/firestore');
firebase.initializeApp({
    "projectId": "proiectscoala-d9dd3",
    "apiKey": "AIzaSyBgMZYxYnU9HMYov0z4LOo0AtVqGX32doY",
    "authDomain": "proiectscoala-d9dd3.firebaseapp.com",
    "databaseURL": "https://proiectscoala-d9dd3.firebaseio.com",
    "storageBucket": "proiectscoala-d9dd3.appspot.com/",
    "messagingSenderId": "72916424034"
})
const db = firebase.firestore();
var docRef = db.collection("posts").doc("OvSInhXPS9l4ssz5hzuU");

//docRef.get().then(function (doc) {
//    if (doc.exists) {

//        console.log(doc.get('image_link'));

//        var link = doc.get('image_link');
 //       TestScrin(link);
//    } else {
        // doc.data() will be undefined in this case
//        console.log("No such document!");
//    }
//}).catch(function (error) {
//    console.log("Error getting document:", error);
//});


link = 'https://playtech.ro/wp-content/uploads/2016/02/bbc-planet-earth-II-1170x644.jpg';
var one = 1;
const TestScrin = () => {
    const [results, setResults] = useState([]);
    const makeRequest = async () => {
        if (one == 1) {
            const response = await docRef.get();
            setResults(response.data());
            one++;
        }
    }
    makeRequest();
    console.log("DELIMITEZ INFORMATIA    ", results);
    
   
    
    return (
        <View><PostComponent 
        deUndeVinePoza={results.image_link}
        matchPercentage='99'
        dateEvent={results.date}
        titleEvent={results.title}
        description={results.description}        
    /></View>);

}

const styles = StyleSheet.create({});
export default TestScrin;
