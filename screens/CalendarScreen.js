import React from 'react';
import { Text, StyleSheet, Dimensions, View, Alert, Image, ScrollView } from 'react-native';
const { height, width } = Dimensions.get('window');
import { database } from '../App';
import CalendarPicker from '../components/CalendarPicker';
const CalendarScreen = () => {
    return <CalendarPicker/>

}


const styles = StyleSheet.create({

    imageStyle: {
        height: 400,
        width: width,
        resizeMode: 'stretch',
    },
});
export default CalendarScreen;