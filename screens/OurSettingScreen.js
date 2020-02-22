import React from 'react';
import {Platform,StyleSheet, Dimensions, View, Alert, Image, ScrollView, TouchableOpacity } from 'react-native';
import BackButton from "../login/components/BackButton";
import Block from "../login/components/Block";
import Text from '../login/components/Text';
const { height, width } = Dimensions.get('window'); 

const OurSettingsScreen = ({ navigation }) => {
    return (
        <View style={{ flex: 1, marginTop: Platform.OS === 'ios' ? 34 : 0 }}>           
            <Block left style={{ marginLeft: 10, marginTop:40}}>
                 
            <TouchableOpacity onPress={() => { navigation.navigate({ routeName: 'Settings_calendar' }) }}>
                <Text h1 >Calendar</Text>
           </TouchableOpacity>
            <TouchableOpacity>
                <Text h1 >Tags</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => { navigation.navigate({ routeName: 'Settings_calendar' }) }}>
                    <Text h1 >Account Settings</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => { navigation.navigate({ routeName: 'Tos' }) }}>
                    <Text h1 >About</Text>
                </TouchableOpacity>
            </Block>
        </View>
        );

}
export default OurSettingsScreen;