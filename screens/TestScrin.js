console.disableYellowBox = true;
import React, { useState,useEffect } from 'react';
import {StyleSheet, View} from 'react-native';
import InfiniteScroll from "../components/InfiniteScroll";




link = 'https://playtech.ro/wp-content/uploads/2016/02/bbc-planet-earth-II-1170x644.jpg';
var one = 1;
const TestScrin = () => {
    //const [results, setResults] = useState([]);
    //const makeRequest = async () => {
    //    if (one == 1) {
    //        const response = await colRef.get();
    //        setResults(response);
    //        one++;
    //    }
    //}
    //useEffect(() => {
    //makeRequest()},[])
    
   
    
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