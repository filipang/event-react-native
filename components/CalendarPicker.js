import React from 'react';
import { ActivityIndicator, Dimensions, FlatList, SafeAreaView, StyleSheet, Text, View } from 'react-native';
import { database } from '../App';
import PostComponent from '../components/PostComponent';
// Screen Dimensions
const { height, width } = Dimensions.get('window');
// Screen: Infinite Scroll

export default class CalendarPicker extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            activeText: 'Tomorrow',
        };
    }

    componentDidMount = () => {
        try {
            ///users/Q2tivrCL47105oAroYcr
            this.retrieveData();
            
            // Cloud Firestore: Initial Query
            switch (this.state.activeText) {
                case 'This week':
                    console.log("ty ", this.state.activeText);
                    break;
                case 'Tomorrow':
                    console.log("tm ", this.state.activeText);
                    break;
                case 'Past':
                    console.log("ps ", this.state.activeText);
                    break;
                default:
                    console.log("Def - nuj daca e de bine ", this.state.activeText);
                    break;


            }

        }
        catch (error) {
            console.log(error);
        }
    };
    retrieveData = async () => {
        try {
            let initialQuery = await database.collection('users/Q2tivrCL47105oAroYcr/interested_posts');
            let documentSnapshots = await initialQuery.get();            
            let documentData = documentSnapshots.docs.map(document => document.data());
            console.log("PANA AICI este schema ", documentData[documentData.length - 1]);

        }catch (error) {
            console.log(error);
        }
    }


    //Render
    render() {
        return (<Text> Helau </Text>);
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