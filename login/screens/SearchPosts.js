import React, { Component } from 'react';
import { Chip, Button } from 'react-native-paper';
import { AppRegistry, FlatList, StyleSheet, Text, View, Image, Alert, Platform, TouchableHighlight
, RefreshControl, TextInput } from 'react-native';
import firebase from 'firebase';
import { database } from '../../App'
import { SearchBar } from 'react-native-elements';
import PostComponent from '../../components/PostComponent'

export default class SearchPost extends Component {
    constructor(props){
        super(props);
        this.state=({
            documentData:[],
            filteredData:[],
            searchText: ""
        })
    }

    componentDidMount(){
        try{
            this.retrieveData();
        }catch(error){
            console.log(error);
        }
    }

    retrieveData = async () => {
        try {
            let initialQuery = await database.collection('posts').limit(8)
            let documentSnapshots = await initialQuery.get();


            let documentData = documentSnapshots.docs.map(document => document.data());
            this.setState({
                documentData: documentData
            })
        }catch (error){
            console.log(error)
        }
    }
    search = (searchText) => {
        this.setState({searchText: searchText});
        let filteredData = this.state.documentData.filter(function(item){
            return item.title.toLowerCase().includes(searchText);
        });
        this.setState({filteredData: filteredData})
    }

    render(){
        return(
            <View style={{flex: 1, marginTop: Platform.OS === 'ios' ? 34 : 0}}>
                
                <SearchBar
                round={true}
                lightTheme={true}
                autoCorrect={false}
                onChangeText={this.search}
                value={this.state.searchText}
               placeholder="Search through posts..."
    
              />
                <FlatList
                data = {this.state.filteredData && this.state.filteredData.length > 0 ? this.state.filteredData : this.state.documentData}
                renderItem={({item, index}) => {
                    return(
                    <PostComponent
                      deUndeVinePoza={item.image_link}
                      matchPercentage='99'
                      titleEvent={item.title}
                      description={item.description}
                      startDate={item.time_start.seconds}
                      endDate={item.time_end.seconds}
                  />                       );
                }}
                keyExtractor={(item, index) => item.description}
                ></FlatList>


            </View>
        )
    }

}

