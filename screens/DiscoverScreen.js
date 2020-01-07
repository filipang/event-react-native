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

const styles = StyleSheet.create({
    flex: {
      flex: 0,
    },
    column: {
      flexDirection: 'column'
    },
    row: {
      flexDirection: 'row'
    },
    header: {
      backgroundColor: theme.colors.white,
      paddingHorizontal: theme.sizes.padding,
      paddingTop: theme.sizes.padding * 1.33,
      paddingBottom: theme.sizes.padding * 0.66,
      justifyContent: 'space-between',
      alignItems: 'center',
    },
    articles: {
    },
    destinations: {
      flex: 1,
      justifyContent: 'space-between',
      paddingBottom: 30,
    },
    destination: {
      width: width - (theme.sizes.padding * 2),
      height: width * 0.6,
      marginHorizontal: theme.sizes.margin,
      paddingHorizontal: theme.sizes.padding,
      paddingVertical: theme.sizes.padding * 0.66,
      borderRadius: theme.sizes.radius,
    },
    destinationInfo: {
      position: 'absolute',
      borderRadius: theme.sizes.radius,
      paddingHorizontal: theme.sizes.padding,
      paddingVertical: theme.sizes.padding / 2,
      bottom: 20,
      left: (width - (theme.sizes.padding * 4)) / (Platform.OS === 'ios' ? 3.2 : 3),
      backgroundColor: theme.colors.white,
      width: width - (theme.sizes.padding * 4),
    },
    recommended: {
    },
    recommendedHeader: {
      justifyContent: 'space-between',
      alignItems: 'flex-end',
      paddingHorizontal: theme.sizes.padding,
    },
    recommendedList: {
    },
    recommendation: {
      width: (width - (theme.sizes.padding * 2)) / 2,
      marginHorizontal: 8,
      backgroundColor: theme.colors.white,
      overflow: 'hidden',
      borderRadius: theme.sizes.radius,
      marginVertical: theme.sizes.margin * 0.5,
    },
    recommendationHeader: {
      overflow: 'hidden',
      borderTopRightRadius: theme.sizes.radius,
      borderTopLeftRadius: theme.sizes.radius,
    },
    recommendationOptions: {
      alignItems: 'center',
      justifyContent: 'space-between',
      padding: theme.sizes.padding / 2,
      position: 'absolute',
      top: 0,
      left: 0,
      right: 0,
    },
    recommendationTemp: {
      fontSize: theme.sizes.font * 1.25,
      color: theme.colors.white
    },
    recommendationImage: {
      width: (width - (theme.sizes.padding * 2)) / 2,
      height: (width - (theme.sizes.padding * 2)) / 2,
    },
    avatar: {
      width: theme.sizes.padding,
      height: theme.sizes.padding,
      borderRadius: theme.sizes.padding / 2,
    },
    rating: {
      fontSize: theme.sizes.font * 2,
      color: theme.colors.white,
      fontWeight: 'bold'
    },
    shadow: {
      shadowColor: theme.colors.black,
      shadowOffset: {
        width: 0,
        height: 6,
      },
      shadowOpacity: 0.05,
      shadowRadius: 10,
      elevation: 5,
    },
    dots: {
      width: 10,
      height: 10,
      borderWidth: 2.5,
      borderRadius: 5,
      marginHorizontal: 6,
      backgroundColor: theme.colors.gray,
      borderColor: 'transparent',
    },
    activeDot: {
      width: 12.5,
      height: 12.5,
      borderRadius: 6.25,
      borderColor: theme.colors.active,
    }
  });
  

export default class DiscoverScreen extends Component {
    constructor(props){
        super(props);
        this.state=({
            documentData:[]
            
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

    renderDots() {
        const dotPosition = Animated.divide(this.scrollX, width);
        return (
          <View style={[
            styles.flex, styles.row,
            { justifyContent: 'center', alignItems: 'center', marginTop: 10 }
          ]}>
            {this.state.documentData.map((item, index) => {
              const borderWidth = dotPosition.interpolate({
                inputRange: [index -1, index, index + 1],
                outputRange: [0, 2.5, 0],
                extrapolate: 'clamp'
              });
              return (
                <Animated.View
                  key={`step-${item.description}`}
                  style={[styles.dots, styles.activeDot, { borderWidth: borderWidth } ]}
                />
              )
            })}
          </View>
        )
      }

    renderDestinations = () => {
        return (
          <View style={[ styles.column, styles.destinations ]}>
            <FlatList
              horizontal
              pagingEnabled
              scrollEnabled
              showsHorizontalScrollIndicator={false}
              decelerationRate={0}
              scrollEventThrottle={16}
              snapToAlignment="center"
              style={{ overflow:'visible', height: 280 }}
              data={this.state.documentData}
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
              onScroll={Animated.event([{ nativeEvent: { contentOffset: { x: this.scrollX }} }])}
            />
            {this.renderDots()}
          </View>
        );
      }
    renderRecommendations = () => {
        return(
            <View style={[styles.flex, styles.column, styles.recommended]}>
                <View
                style={[styles.row, styles.recommendationHeader]}>
                    <Text style={{ fontSize: theme.sizes.font * 1.4 }}>Recommended</Text>
                    <TouchableOpacity activeOpacity={0.5}>
                        <Text style={{ color: theme.colors.caption }}>More</Text>
                    </TouchableOpacity>
                </View>
                <View style={[styles.column, styles.recommendedList]}>
                    <FlatList
                    horizontal
                    pagingEnabled
                    scrollEnabled
                    showsHorizontalScrollIndicator={false}
                    scrollEventThrottle={16}
                    snapToAlignment="center"
                    style={[styles.shadow, {overflow: 'visible'}]}
                    data={this.state.documentData}
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
                    keyExtractor={(item, index) => item.description}/>
                </View>
            </View>
        )
    }

    render(){
        return(
            <ScrollView
            showsVerticalScrollIndicator={false}
            contentContainerStyle={{paddingBottom: theme.sizes.padding}}>
                {this.renderDestinations()}
                {this.renderRecommendations()}
            </ScrollView>
        )
    }

}
