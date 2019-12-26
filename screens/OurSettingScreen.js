import React from 'react';
import { Text, StyleSheet, Dimensions, View, Alert, Image, ScrollView, TouchableOpacity } from 'react-native';
const { height, width } = Dimensions.get('window'); 

const OurSettingsScreen = ({ navigation }) => {
    return (
        <View>
            <TouchableOpacity onPress={() => { navigation.navigate({ routeName: 'Settings_calendar' }) }}>
                <Text style={{ fontSize: 40, marginTop:40 }}>Calendar</Text>
           </TouchableOpacity>
            <TouchableOpacity>
                <Text style={{ fontSize: 40, }}>Tags</Text>
            </TouchableOpacity>

        </View>
        );

}
export default OurSettingsScreen;