import React, { Component } from 'react';
import { Chip } from 'react-native-paper';

import {View, Text, StyleSheet } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { isConfigurationAvailable } from 'expo/build/AR';
import {useState} from  'react';
import TagChooser from '../login/screens/TagChooser';


const ChipComponent = ({selected, name, props}) =>{
    const [selection,setSelected] = useState(false);
    return(
        <Chip 
          onPress={()=>{
            if(selection == true) setSelected(false);
        if(selection == false) setSelected(true);
    }
    }
         selected={selection}>{name}</Chip>
    )
}




const styles = StyleSheet.create({

})
export default ChipComponent;