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
                    if (this.state.selection == false) {
                        this.props.mama(this.state.name);
                        this.setState({ selection: true });

                    } else {
                        this.setState({ selection: false });
                        this.props.tata(this.state.name);

                    }
                    
                    
                }
                }
                selected={this.state.selection}>{this.state.name}</Chip>
        )
    }



}
const styles = StyleSheet.create({

})
