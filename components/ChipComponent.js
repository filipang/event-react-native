import React, { Component } from 'react';
import { Chip } from 'react-native-paper';

import {View, Text, StyleSheet } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { isConfigurationAvailable } from 'expo/build/AR';
import {useState} from  'react';
import TagChooser from '../login/screens/TagChooser';


export default class ChipComponent extends React.Component {
    constructor(props) {
        super(props);
        this.state = ({
            selection: false,
            name: this.props.name,
            
        })
        
    
    }
    componentDidMount() {
        try {
            this.props.mama;
            console.log('Lol ', this.props.mama);
        }
        catch (error) {
            console.log(error);
        }
    }
    render() {
        return (
            <Chip
                onPress={() => {
                    this.props.mama();
                    
                }
                }
                selected={this.state.selection}>{this.state.name}</Chip>
        )
    }



}
const styles = StyleSheet.create({

})
