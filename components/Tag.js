import React, { memo, useState, useEffect } from "react";
import { FlatList, StyleSheet, Text, View, TextInput, TouchableOpacity } from 'react-native';
import { Chip } from 'react-native-paper';



const Tag = ({}) => {
    return (
        <Chip style={styles.flatlist_items}
            
             selected={props.selected}>
            sal</Chip>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        width: "100%"
    },
    viewGray: {
        backgroundColor: '#f0f0f0',
        height: 1,
        width: "100%",
        marginLeft: 20,
        marginRight: 20,
        marginTop: 10
    },
    input: {
        marginTop: 26,
        marginLeft: 20,
        alignContent: 'flex-start',
    },
    text: {
        marginLeft: 20,
        marginTop: 60,
        fontSize: 16
    },
    flatlist: {
        marginLeft: 20,
        marginTop: 40,
    },
    flatlist_items: {
        marginRight: 12,
        width: 100,
        height: 32,
        marginTop: 8,
        alignContent: 'flex-start',
    }
})

export default Tag;
