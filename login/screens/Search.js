import React, { Component } from 'react';
import { Chip, Button } from 'react-native-paper';
import { AppRegistry, FlatList, StyleSheet, Text, View, Image, Alert, Platform, TouchableHighlight
, RefreshControl, TextInput } from 'react-native';
import firebase from 'firebase';
import { database } from '../../App'
import { SearchBar } from 'react-native-elements';

export default class TagChooser extends Component{

    constructor(props){
        super(props);
        this.state=({
            tags: [],
            
        });
        //DE AICI EXTRAGI DATELE
        this.ref =  database.collection('tags')
        
        //await database.collection('posts').limit(this.state.limit);
    }
    componentDidMount(){
      try {
        // Cloud Firestore: Initial Query
        this.retrieveData();
      }
      catch (error) {
        console.log(error);
      }
      this.state.tags.forEach((doc)=>{
          this.state.tags.push({
          name: doc.data().name
        })
      })
    //     this.unsubscribe = this.ref.onSnapshot((querySnapshot) => {
    //         const taguri = [];
    //         querySnapshot.forEach((doc) => {
    //             taguri.push({
    //                 name: doc.data().name
    //             });
    //         });
       
    //     })
    // }

    }

    retrieveData = async () => {
      try {
          let initialQuery = await database.collection('users').doc(firebase.auth().currentUser.uid).get();
          let taguri = initialQuery.get("tags");
          console.log(taguri)
          this.setState({
            tags: taguri
          });
          console.log(this.state.tags);
  
        
      }catch (error) {
        console.log(error);
      }
    };
    render(){    
        return(
            <View style={{flex: 1, marginTop: Platform.OS === 'ios' ? 34 : 0}}>
                
                <SearchBar
               placeholder="Search your tags..."
    
              />
                <FlatList
                data = {this.state.tags}
                renderItem={({item, index}) => {
                    return(
                        <Chip>{item.name}</Chip>
                    );
                }}
                keyExtractor={(item, index) => item.name}
                ></FlatList>


            </View>
            )
    }
}


