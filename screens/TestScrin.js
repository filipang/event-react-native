import React from 'react';
import { Text, StyleSheet, Button, View, Alert } from 'react-native';
import PostComponent from '../components/PostComponent';

const TestScrin = ({ navigation}) => {
    return (<View><PostComponent deUndeVinePoza={require('../assets/florinsalamtrist.jpg')}
        matchPercentage='80'
        dateEvent='12.11.2019'
        titleEvent='Laba In grup'
        description='superzupertare'
        navigation={navigation}
    /></View>);

}

const styles = StyleSheet.create({});
export default TestScrin;
