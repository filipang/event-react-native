console.disableYellowBox = true;
import React, { useState,useEffect } from 'react';
import {StyleSheet, View} from 'react-native';

import firebase from 'firebase';
import InfiniteScroll from "../components/InfiniteScroll";


require('firebase/firestore');
firebase.initializeApp({
    "projectId": "event-dd4b9",
    "apiKey": "AIzaSyBZ5GWPcuhxxjG1EgwNZtLgMbNrL1HuS5E",
    "authDomain": "event-dd4b9.firebaseapp.com",
    "databaseURL": "https://event-dd4b9.firebaseio.com",
    "storageBucket": "event-dd4b9.appspot.com/",
    "messagingSenderId": "93847099331"
})
const db = firebase.firestore();
var colRef = db.collection("posts");


export const database = db;


link = 'https://playtech.ro/wp-content/uploads/2016/02/bbc-planet-earth-II-1170x644.jpg';
var one = 1;
const TestScrin = () => {
    const [results, setResults] = useState([]);
    const makeRequest = async () => {
        if (one == 1) {
            const response = await colRef.get();
            setResults(response);
            one++;
        }
    }
    useEffect(() => {
    makeRequest()},[])
    
   
    
    //console.log("tank", results);
    
    return (
        <View>
            <InfiniteScroll/>       
        </View>);

}

const styles = StyleSheet.create({});
export default TestScrin;
/*<PostComponent
    deUndeVinePoza={item.image_link}
    matchPercentage='99'
    dateEvent={item.date}
    titleEvent={item.title}
    description={item.description}
    startDate={item.time_start}
    endDate={item.time_end}
    <InfiniteScroll/>
*/