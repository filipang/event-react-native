import React from 'react';
import { Chip } from 'react-native-paper';
import { StyleSheet } from 'react-native';

const TagChooser = () => {
    return <Chip icon="information" onPress={() => console.log("Pressed")}>Example Chip</Chip>
}

const styles = StyleSheet.create({

})

export default TagChooser;


