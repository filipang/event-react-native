import React from 'react';
import { Text, StyleSheet, Dimensions, View, Alert, Image, ScrollView } from 'react-native';
const { height, width } = Dimensions.get('window');
import SearchPost from '../login/screens/SearchPosts'

const SearchScreen = () => {
  
return ( <SearchPost/>);
}


const styles = StyleSheet.create({

  searchBar:{
    marginTop: 20
  },  
    text:{
        marginTop: 400
    },
    imageStyle: {
        height: 400,
        width: width,
        resizeMode: 'stretch',
    },
});
export default SearchScreen;