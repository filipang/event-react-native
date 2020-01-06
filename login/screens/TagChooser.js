import React, { Component } from 'react';
import {FlatList,View,Platform,TouchableOpacity, StyleSheet
} from 'react-native';
import * as theme from '../components/theme'
import { IonIcons } from '@expo/vector-icons'
import { database } from '../../App'
import { SearchBar } from 'react-native-elements';
import ChipComponent from '../../components/ChipComponent';
import Text from '../components/Text';
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
               placeholder="Search"
               lightTheme={true}
               showCancel={true}
               inputContainerStyle={styles.da}
            containerStyle={styles.search} 
            cancelButtonTitle="cancel"
            searchIcon="../assets/images/search.png"
    
                />
        <Text h3 style={{ marginLeft: 10, marginBottom: 20, marginTop: 10}}>
            Popular Tags
        </Text>         
               <FlatList 
                style={styles.flatlist}
                numColumns={3}
                    data={this.state.tags}
                    keyExtractor={(item) => item.name}
                    renderItem={({ item }) => {                       
                        return (<ChipComponent  mama={this.AddItemToTagList} tata={this.removeItemFromTagList}name={item.name} />);                                
                        }}
                />
                

                <TouchableOpacity onPress={() => { console.log(this.state.tagListFinal.forEach(element => console.log(element)))}}>
                 <Text>Testam Arrayul</Text>
                </TouchableOpacity>
            </View>
            )
    }
}

const styles = StyleSheet.create({
    search:{
        backgroundColor: theme.colors.white,
        borderBottomColor: theme.colors.white,
        borderTopColor: theme.colors.white,
        marginTop: -20
    },
    da:{
        backgroundColor: "#efefef",
        height: 38,
        borderRadius: 10,
    fontSize: 20    },
    flatlist:{
        marginLeft: 10,
        marginRight: 10
    }
})


