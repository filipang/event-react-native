import React, { Component } from 'react';
import {FlatList,View,Platform
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
        });
        this.mama = this.mama.bind(this);
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
    mama = () => {
        let nr = this.state.Integerr;
        nr++;
        this.setState({Integerr:nr})
        console.log(nr);
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
                        return (<ChipComponent mama={this.mama} name={item.name} />);                                
                        }}
                />


            </View>
            )
    }
}


