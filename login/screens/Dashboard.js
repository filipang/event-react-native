import React, { memo, useState, useEffect } from "react";
import Background from "../components/Background";
import { FlatList, StyleSheet, Text, View, TextInput, TouchableOpacity} from 'react-native';
import { Chip } from 'react-native-paper';
import { Tag } from '../components/Tag';


const tagSelectorData = [
  {
    id: '1',
    title: 'Manele',
    selected: 'false'
  },
  {
  id: '2',
  title: 'Rock',
  selected: 'false'
  },
  {
    id: '3',
    title: 'Taranie',
    selected: 'false'

  },
  {
  id: '4',
  title: 'Info',
  selected: 'false'

  },{
    id: '5',
    title: 'Scoala',
    selected: 'false'

  },
  {
  id: '6',
  title: 'Betie',
  selected: 'false'

  },{
    id: '7',
    title: 'Parc',
    selected: 'false'

  },
  {
  id: '8',
  title: 'Picnick',
  selected: 'true'
  },
];




const Dashboard = () => {
    return (<Text>negroo geani</Text>)
};


const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: "100%"
  },
  viewGray:{
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
  flatlist_items:{
    marginRight: 12,
    width: 100,
    height: 32,
    marginTop: 8,
    alignContent: 'flex-start',
  }
})

export default memo(Dashboard);
