import React from 'react';
import { ActivityIndicator, Dimensions, FlatList, SafeAreaView, StyleSheet, Text, View, Picker } from 'react-native';
import { database } from '../App';
import PostComponent from '../components/PostComponent';
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
            //const TANK = this.arrayToObject(this.state.databasic, 'id');
            // console.log("tankul este ", TANK);
            //this.setState({
            //     ObjData: TANK,
            // });
            // let initialQuery = await database.collection('users').doc(this.state.userId);
            //let documentSnapshots = await initialQuery.get("email");
            //var sos = documentSnapshots.get("email");
            //  console.log('AICI E FOARTE IMPORTATNTA FAZA', documentSnapshots);
            //console.log("DOC SNAPSH", documentSnapshots);
            // let documentData = documentSnapshots.docs.map(document => document.data());
            //console.log("PANA AICI este schema ", documentData[documentData.length - 1]);
            // this.setState({
            //    documentData: documentData,               
            // });
            // var ceva = this.state.documentData[0].interested_posts[0];
            // var ceva2 = await ceva.get();

            //console.log("PANA AICI este schema ", documentData[documentData.length - 1]);

            //console.log("TONI MONRTANA DE ROMANIA",ceva2);

        } catch (error) {
            console.log(error);
        }
    }

    updateQuery = (txt) => {
        
        // Cloud Firestore: Initial Query
        switch (txt) {
            case 'This week':
                console.log("tw ", txt);
                break;
            case 'Tomorrow':
                console.log("tm ", txt);
                break;
            case 'Past':
                console.log("ps ", txt);
                break;
            case 'All':
                console.log("Al ", txt);
                break;
            default:
                console.log("Def - nuj daca e de bine ", txt);
                break;


        }
    }

    //Render
    render() {
        return (
            <View style={{marginVertical: 300}}>
                <Picker
                    selectedValue={this.state.activeText}
                    style={{ height: 50, width: 400 }}
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