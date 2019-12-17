import React from 'react';
import { Text, StyleSheet, Dimensions, View, Alert, Image, ScrollView } from 'react-native';
const { height, width } = Dimensions.get('window'); 


const PostDetails = ({ navigation }) => {
    let dataInfo=navigation.getParam('skill');
    
    return (
        <ScrollView>
            <Image source={{ uri: dataInfo.deUndeVinePoza }} style={styles.imageStyle} />
            <Text style={{ color: 'black', fontSize: 25, marginHorizontal: 5 }}>{dataInfo.dateEvent}</Text>
            <Text style={{ color: 'black', fontSize: 25, marginHorizontal: 5 }}> {dataInfo.titleEvent}</Text>
            <Text style={{ color: 'aquamarine', fontSize: 25, marginHorizontal: 10 }}>{dataInfo.matchPercentage}%</Text>
            
        </ScrollView>


    );
}

const styles = StyleSheet.create({
    
 imageStyle: {
            height: 400,
            width: width,
            resizeMode: 'stretch',
        },
});

export default PostDetails;