import React, { Component } from 'react';
import { Chip } from 'react-native-paper';

import {View, Text, StyleSheet } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { isConfigurationAvailable } from 'expo/build/AR';
import {useState} from  'react';
import TagChooser from '../login/screens/TagChooser';
import * as theme from '../login/components/theme'

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
    text: {
      fontFamily: 'Rubik-Regular',
      fontSize: theme.sizes.font,
      color: theme.colors.black,
    },
    bold: { fontFamily: 'Rubik-Bold' },
    light: { fontFamily: 'Rubik-Light'},
    center: { textAlign: 'center' },
    right: { textAlign: 'right' },
    blue: { color: theme.colors.blue, },
    lightblue: { color: theme.colors.lightblue, },
    green: { color: theme.colors.green, },
    red: { color: theme.colors.red, },
    yellow: { color: theme.colors.yellow, },
    teal: { color: theme.colors.teal, },
    black: { color: theme.colors.black, },
    black2: { color: theme.colors.black2, },
    black3: { color: theme.colors.black3, },
    white: { color: theme.colors.white, },
    gray: { color: theme.colors.gray, },
    gray2: { color: theme.colors.gray2, },
    gray3: { color: theme.colors.gray3, },
    caption: { color: theme.colors.caption, },
    h1: theme.fonts.h1,
    h2: theme.fonts.h2,
    h3: theme.fonts.h3,
    h4: theme.fonts.h4,
    paragraph: theme.fonts.paragraph,
    paragraphGray: theme.fonts.paragraphGray,
    paragraphGray2: theme.fonts.paragraphGray2,
    caption: theme.fonts.caption,
    captionMedium: theme.fonts.captionMedium,
    button: theme.fonts.button,
  });
