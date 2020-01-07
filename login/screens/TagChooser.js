import React, { Component } from 'react';
import {FlatList,View,Platform,TouchableOpacity,Text
} from 'react-native';

import { database } from '../../App'
import { SearchBar } from 'react-native-elements';
import ChipComponent from '../../components/ChipComponent';
export default class TagChooser extends Component{
    constructor(props){
        super(props);
        this.state=({
            tags: [],
            Integerr: 0,
            tagListFinal:[],
        });
        this.AddItemToTagList = this.AddItemToTagList.bind(this);
        this.removeItemFromTagList = this.removeItemFromTagList.bind(this);
    }
    componentDidMount(){
      try {
        // Cloud Firestore: Initial Query
        this.retrieveData();
      }
      catch (error) {
        console.log(error);
      }
      
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
    AddItemToTagList = (numele) => {
        let tagListFinal = this.state.tagListFinal
        tagListFinal.push(numele);
        this.setState({ tagListFinal: tagListFinal })
        console.log("  ");
        console.log('1', tagListFinal[0]);
        console.log('2', tagListFinal[1]);
        console.log('4', tagListFinal[2]);
        console.log('5', tagListFinal[3]);
        console.log('6', tagListFinal[4]);
        console.log('7', tagListFinal[5]);
        console.log('8', tagListFinal[6]);
    }
    removeItemFromTagList = (numele) => {
        let tagListFinal = this.state.tagListFinal;
        for (i = 0; i < tagListFinal.length; i++)        
            if (tagListFinal[i] == numele)
                tagListFinal.splice(i, 1);

        this.setState({ tagListFinal: tagListFinal })

        console.log("  ");
        console.log('1', tagListFinal[0]);
        console.log('2', tagListFinal[1]);
        console.log('4', tagListFinal[2]);
        console.log('5', tagListFinal[3]);
        console.log('6', tagListFinal[4]);
        console.log('7', tagListFinal[5]);
        console.log('8', tagListFinal[6]);
        this.setState({ tagListFinal: tagListFinal })
    }
    retrieveData = async () => {
      try {
          let initialQuery = await database.collection('tags'); 
          let documentSnapshots = await initialQuery.get();
          let documentData = documentSnapshots.docs.map(document => document.data());
          this.setState({
              tags: documentData
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
                    data={this.state.tags}
                    keyExtractor={(item) => item.name}
                    renderItem={({ item }) => {                       
                        return (<ChipComponent mama={this.AddItemToTagList} tata={this.removeItemFromTagList}name={item.name} />);                                
                        }}
                />
                

                <TouchableOpacity onPress={() => { console.log(this.state.tagListFinal.forEach(element => console.log(element)))}}>
                 <Text>Testam Arrayul</Text>
                </TouchableOpacity>
            </View>
            )
    }
}


