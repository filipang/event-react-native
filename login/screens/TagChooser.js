import React, { Component } from 'react';
import {FlatList,View,Platform,TouchableOpacity, StyleSheet
} from 'react-native';
import * as theme from '../components/theme'
import { IonIcons } from '@expo/vector-icons'
import { SearchBar } from 'react-native-elements';
import ChipComponent from '../../components/ChipComponent';
import Text from '../components/Text';
import { database } from '../../App';
import firebase from 'firebase';
import { withNavigation } from 'react-navigation';
import Button from '../components/Button';4

class TagChooser extends Component{
    constructor(props){
        super(props);
        this.state=({
            tags: [],
            Integerr: 0,
            tagListFinal:[],
            filteredTagLlist: [],
            searchText: "",
            Loc:this.props.merg,
        });
        this.AddItemToTagList = this.AddItemToTagList.bind(this);
        this.removeItemFromTagList = this.removeItemFromTagList.bind(this);
    }

    componentDidMount(){
      try {
        // Cloud Firestore: Initial Query
          this.retrieveData();
          console.log(this.state.Loc);
      }
      catch (error) {
        console.log(error);
      }
    }

    search = (searchText) => {
        this.setState({searchText: searchText});
        let filteredTagLlist = this.state.tags.filter(function(item){
            return item.name.toLowerCase().includes(searchText);
        });
        this.setState({filteredTagLlist: filteredTagLlist})
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

    _storeItemsInFirestore(){
        var taguri = [];
        database.collection('tags').get().then(querySnapshot => {
                querySnapshot.forEach(documentSnapshot => {    
                    console.log(this.state.tagListFinal)
                    if(this.state.tagListFinal.includes(documentSnapshot.get('name'))){
                        taguri.push(documentSnapshot.ref);    
                    }
                });
            console.log(taguri);

            database.collection('users').doc(firebase.auth().currentUser.uid).set({
                email: firebase.auth().currentUser.email,
                tags: taguri
            });
        });
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
                onChangeText={this.search}
                value={this.state.searchText}
               placeholder="Search"
               lightTheme={true}
               showCancel={true}
            containerStyle={styles.search} 
            cancelButtonTitle="cancel"
                />
        <Text h3 style={{ marginLeft: 10, marginBottom: 20, marginTop: 10}}>
            Popular Tags
        </Text>         
               <FlatList 
                style={styles.flatlist}
                numColumns={3}
                    data={this.state.filteredTagLlist && this.state.filteredTagLlist.length > 0 ? this.state.filteredTagLlist : this.state.tags}
                    keyExtractor={(item) => item.name}
                    renderItem={({ item }) => {                       
                        return (<ChipComponent  mama={this.AddItemToTagList} tata={this.removeItemFromTagList}name={item.name} />);                                
                        }}
                />
                

                <Button
                    onPress={() => {
                        this.state.Loc.navigate("AppNavigator");
                        this._storeItemsInFirestore.bind(this);
                    }}                       
                                       >
                     <Text button>Continue</Text>
                 </Button>
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
    
    flatlist:{
        marginLeft: 10,
        marginRight: 10
    }
})


export default withNavigation(TagChooser);