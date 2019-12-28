import React from 'react';
import { ActivityIndicator, Dimensions, FlatList, SafeAreaView, StyleSheet, Text, View, Picker } from 'react-native';
import { database } from '../App';
import CalendarPostComponent from '../components/CalendarPostComponent';
import { awaitExpression } from '@babel/types';
// Screen Dimensions
const { height, width } = Dimensions.get('window');
// Screen: Infinite Scroll

export default class CalendarPicker extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            activeText: '',
            documentData: [],
            userId: '4e5OGZW2nH3XycmenMtH',
            databasic: [
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

                }, {
                    id: '5',
                    title: 'Scoala',
                    selected: 'false'

                },
                {
                    id: '6',
                    title: 'Betie',
                    selected: 'false'

                }, {
                    id: '7',
                    title: 'Parc',
                    selected: 'false'

                },
                {
                    id: '8',
                    title: 'Picnick',
                    selected: 'true'
                },
            ],
            ObjData: {},

        };
    }

    componentDidMount = () => {
        try {
            ///users/Q2tivrCL47105oAroYcr
            this.retrieveData();
        }
        catch (error) {
            console.log(error);
        }
    };

    arrayToObject = (array, keyField) =>
        array.reduce((obj, item) => {
            obj[item[keyField]] = item
            return obj
        }, {})
    //////SA MODIFIC CA E UN PISAT
    retrieveData = async () => {
        try {
            let DocDataArray = [];
            let initialQuery = await database.collection('users').doc(this.state.userId).get();
            let interested_posts = initialQuery.get("interested_posts");
            for (const post of interested_posts) {
            
                
                let postData = await post.get();
                //console.log("TEST");
                //console.log(postData);
                DocDataArray.push(postData);

            };
            this.setState({ documentData: DocDataArray });
            console.log("LOLLOL", DocDataArray[0]);
            console.log('DocData[0].title', this.state.documentData[0].get('title'));
        } catch (error) {
            console.log(error);
        }
    }

    updateQuery = (txt) => {
        
        // Cloud Firestore: Initial Query
        switch (txt) {
            case 'This week':
                console.log("tw ", txt);
                //Query this week
                break;
            case 'Tomorrow':
                //Query 24h
                console.log("tm ", txt);
                break;
            case 'Past':
                //Query ev trecut
                console.log("ps ", txt);
                break;
            case 'All':
                //Query toate
                console.log("Al ", txt);
                break;
            default:
                console.log("Def - nuj daca e de bine ", txt);
                break;


        }
    }
    SeparatorulMeu = () => {
        return (<View style={{ height: 1, width: "100%", backgroundColor: "#000", }} />);
    }

    //Render
    render() {
        return (
            <View style={{marginVertical: 30}}>
                <Picker
                    selectedValue={this.state.activeText}
                    style={{ height: 50, width: width }}
                    onValueChange={(itemValue, itemIndex) => {                       
                        this.setState({ activeText: itemValue });                        
                        this.updateQuery(itemValue);
                    }}>
                    <Picker.Item label="This Week" value="This week" />
                    <Picker.Item label="Tomorrow" value="Tomorrow" />
                    <Picker.Item label="Past" value="Past" />
                    <Picker.Item label="All" value="All" />
                </Picker>                
                <FlatList
                    // Data
                    data={this.state.documentData}
                    ItemSeparatorComponent={this.SeparatorulMeu}
                    // Render Items
                    renderItem={({ item }) => (                                               
                        <CalendarPostComponent
                            titleEvent={item.get('title')}
                            startDate={item.get('time_start').seconds * 1000}
                            endDate={item.get('time_end').seconds * 1000}
                            deUndeVinePoza={item.get('image_link')}
                        />


                    )}
                    // Item Key
                    keyExtractor={(item, index) => String(index)}                    
                />
            </View >
            
        );
    }
}
        
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
    
    
            /*<FlatList
                    // Data
                    data={this.state.databasic}
                    // Render Items
                    renderItem={({ item }) => (
                        <Text>{item.title}</Text>
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
            */