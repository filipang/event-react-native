// Imports: Dependencies
import React from 'react';
import { ActivityIndicator, Dimensions, FlatList, SafeAreaView, StyleSheet, Text, View } from 'react-native';
import { database } from '../App';
import PostComponent from '../components/PostComponent';
import {SearchBar} from 'react-native-elements'
// Screen Dimensions
const { height, width } = Dimensions.get('window');
// Screen: Infinite Scroll


export default class InfiniteScroll extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      documentData: [],
      limit: 9,
      lastVisible: null,
      loading: false,
      refreshing: false,
      filteredData:[],
      searchText: ""
    };
  }
  // Component Did Mount
  componentDidMount = () => {
    try {
      // Cloud Firestore: Initial Query
      this.retrieveData();
    }
    catch (error) {
      console.log(error);
    }
    };
  // Retrieve Data
  retrieveData = async () => {
    try {
      // Set State: Loading
      this.setState({
        loading: true,
      });
      //console.log('Retrieving Data');
      // Cloud Firestore: Query SA PUN ORDER BY COEF
        let initialQuery = await database.collection('posts').limit(this.state.limit);
        

      // Cloud Firestore: Query Snapshot
      let documentSnapshots = await initialQuery.get();
      // Cloud Firestore: Document Data
        //console.log('doc snapshot', documentSnapshots.docs);
        let documentData = documentSnapshots.docs.map(document => document.data());
        //console.log("PANA AICI A FO ", documentData[documentData.length - 1]);
       // console.log('doc data',documentData);
      // Cloud Firestore: Last Visible Document (Document ID To Start From For Proceeding Queries)
      let lastVisible = documentData[documentData.length - 1].id;
      // Set State        
             
      this.setState({
        documentData: documentData,
        lastVisible: lastVisible,
        loading: false,
      });
    }
    catch (error) {   
      console.log(error);
    }
  };
  // Retrieve More
  retrieveMore = async () => {
    try {
      // Set State: Refreshing
      this.setState({
        refreshing: true,
      });
      console.log('Retrieving additional Data');
      // Cloud Firestore: Query (Additional Query)   SA PUN AICI ORDER BY COEF
        let additionalQuery = await database.collection('users').startAfter(this.state.lastVisible).limit(this.state.limit);              
       
      // Cloud Firestore: Query Snapshot
      let documentSnapshots = await additionalQuery.get();
      // Cloud Firestore: Document Data
      let documentData = documentSnapshots.docs.map(document => document.data());
      // Cloud Firestore: Last Visible Document (Document ID To Start From For Proceeding Queries)
      let lastVisible = documentData[documentData.length - 1].id;
      // Set State
      this.setState({
        documentData: [...this.state.documentData, ...documentData],
        lastVisible: lastVisible,
        refreshing: false,
      });
    }
    catch (error) {
      console.log(error);
    }
  };

  search = (searchText) => {
    this.setState({searchText: searchText});
    let filteredData = this.state.documentData.filter(function(item){
        return item.title.includes(searchText);
    });
    this.setState({filteredData: filteredData})
}
  // Render Header
  renderHeader = () => {
    try {
      return (
        <SearchBar
        showCancel={true}
        lightTheme={true}
        autoCorrect={false}
        onChangeText={this.search}
        value={this.state.searchText}
       placeholder="Search through posts..."

      />
        )
    }
    catch (error) {
      console.log(error);
    }
  };
  // Render Footer
  renderFooter = () => {
    try {
      // Check If Loading
      if (this.state.loading) {
        return (
          <ActivityIndicator />
        )
      }
      else {
        return null;
      }
    }
    catch (error) {
      console.log(error);
    }
  };
  render() {
    return (
      <SafeAreaView style={styles.container}>
        <FlatList
          // Data
          data = {this.state.filteredData && this.state.filteredData.length > 0 ? this.state.filteredData : this.state.documentData}
          // Render Items
          renderItem={({ item }) => (
              <View style={styles.itemContainer}>
                  <PostComponent
                      deUndeVinePoza={item.image_link}
                      matchPercentage='99'
                      titleEvent={item.title}
                      description={item.description}
                      startDate={item.time_start.seconds}
                      endDate={item.time_end.seconds}
                  />   
          
           </View>
          )}
          // Item Key
          keyExtractor={(item, index) => String(index)}
          // Header (Title)
          ListHeaderComponent={this.renderHeader}
          // Footer (Activity Indicator)
          ListFooterComponent={this.renderFooter}
          // On End Reached (Takes a function)
          onEndReached={this.retrieveMore} //mai adaug niste astea eu
          // How Close To The End Of List Until Next Data Request Is Made
          onEndReachedThreshold={0}
          // Refreshing (Set To True When End Reached)
          refreshing={this.state.refreshing}
        />
      </SafeAreaView>
    )
  }
}
// Styles
const styles = StyleSheet.create({
  container: {
    height: height,
    width: width,
  },
  headerText: {
    fontFamily: 'System',
    fontSize: 36,
    fontWeight: '600',
    color: '#000',
    marginLeft: 12,
    marginBottom: 12,
  },
  itemContainer: {
    height: 575,
    width: width,
    borderWidth: 0,
    borderColor: '#000',
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    fontFamily: 'System',
    fontSize: 16,
    fontWeight: '400',
    color: '#000',
  },
});
//npm install -g expo-cli