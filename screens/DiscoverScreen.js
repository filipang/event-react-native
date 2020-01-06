import React, { Component } from 'react';
import {
    Animated,
    Text,
    StyleSheet,
    View,
    ScrollView,
    FlatList,
    Image,
    ImageBackground,
    Dimensions,
    Platform,
    TouchableOpacity
  } from 'react-native'
  const { height, width } = Dimensions.get('window'); 
import * as theme from './theme'
import PostComponent from '../components/PostComponent'
import { database } from '../App'
import firebase from "firebase";
export default class DiscoverScreen extends Component {
  
  componentDidMount(){
  }
  render(){
    return(<Text>DiscoverScreen</Text>)
  }
}


