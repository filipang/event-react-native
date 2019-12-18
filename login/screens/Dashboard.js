import React, { memo, useState, useEffect } from "react";
import Background from "../components/Background";
import { FlatList, StyleSheet, Text, View, TextInput, TouchableOpacity} from 'react-native';
import { Chip, Button } from 'react-native-paper';
import { Tag } from '../components/Tag';
import "firebase/firestore"
import "firebase/auth"
import firebase from "firebase"
import { database } from '../../App';
import { SearchBar } from 'react-native-elements';
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


const useDebounce = (value: any, delay: number) => {
  const [debounceValue, setDebounceValue] = useState(value);

  useEffect(() => {
    const timer = setTimeout(() => {
      setDebounceValue(value);
    }, delay);

    return () => {
      clearTimeout(timer);
    };
  }, [value, delay]);

  return debounceValue;
};

const tagList = Object.values(tagSelectorData)
  .map(tags => ({
    ...tags,
    lowerCaseName: tags.title.toLowerCase(),
  })).sort((a, b) => a.title > b.title);

const Dashboard = ({ navigation }) => {
  const [query, setQuery] = useState('');
  const debounceQuery = useDebounce(query, 300);
  const [filteredTagList, setFilteredTagList] = useState(tagList);
  

  useEffect(() => {
    const lowerCaseQuery = debounceQuery.toLowerCase();
    const newTags = tagList
      .filter((tag) => tag.lowerCaseName.includes(lowerCaseQuery))
      .map((tag)=>({
        ...tag,
        rank: tag.lowerCaseName.indexOf(lowerCaseQuery),
      }))
      .sort((a, b) => a.rank - b.rank);

      setFilteredTagList(newTags);

  }, [debounceQuery]);

  onTouch = () => {
    database.collection('users').doc(firebase.auth().currentUser.uid).set({
      email: firebase.auth().currentUser.email,
      tags: tagSelectorData
    });
      navigation.navigate("AppNavigator");
  }
  return(<View>
    <SearchBar
      placeholder="Search your tags..."
      onChangeText={setQuery}
      value={query}
    />
    <FlatList
      keyExtractor={(item, index) => `${index}`}
      data={filteredTagList}
      renderItem={({item}) => <Chip style={styles.flatlist_items}>{item.title}</Chip>}
    />
    <Button 
    title="Go to Bratu Screen"
    onPress={
      this.onTouch
      }>Go to Bratu Screen</Button>
    

    
  </View>
  )
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
