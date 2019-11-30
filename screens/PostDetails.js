import React from 'react';
import { Text, StyleSheet, Button, View, Alert, Image, ScrollView } from 'react-native';
 


const PostDetails = ({ navigation }) => {
    let dataInfo=navigation.getParam('skill');
    
    return (
        <ScrollView>
            <Image source={{ uri: dataInfo.deUndeVinePoza }} style={styles.imageStyle} />
            <Text style={{ color: 'black', fontSize: 25, marginHorizontal: 5 }}>{dataInfo.dateEvent}</Text>
            <Text style={{ color: 'black', fontSize: 25, marginHorizontal: 5 }}> {dataInfo.titleEvent}</Text>
            <Text style={{ color: 'aquamarine', fontSize: 25, marginHorizontal: 10 }}>{dataInfo.matchPercentage}%</Text>
            <Image source={{ uri: dataInfo.deUndeVinePoza }} style={styles.imageStyle} />
            <Image source={{ uri: dataInfo.deUndeVinePoza }} style={styles.imageStyle} />
            <Image source={{ uri: dataInfo.deUndeVinePoza }} style={styles.imageStyle} />
        </ScrollView>


    );
}

const styles = StyleSheet.create({
    
 imageStyle: {
            height: 400,
            width: 400,
            resizeMode: 'stretch',
        },
});

export default PostDetails;