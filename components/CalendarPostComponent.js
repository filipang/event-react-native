import React from 'react';
import { Text, StyleSheet, View, Image, Alert } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { withNavigation } from 'react-navigation';



const CalendarPostComponent = ({ navigation, titleEvent, matchPercentage, dateEvent, description, startDate, endDate, deUndeVinePoza }) => {
    console.log("plm")
    //Editez data sa arate frumos
    let dataStart = new Date(startDate * 1);
    let dataEnd = new Date(endDate * 1);
    var options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
    let dateStartString = dataStart.toLocaleDateString("en-US", options);
    let dateEndString = dataEnd.toLocaleDateString("en-US", options);
    //Verific daca uri:null


    if (deUndeVinePoza == '')
        deUndeVinePoza = 'https://s.iw.ro/gateway/g/ZmlsZVNvdXJjZT1odHRwJTNBJTJGJTJG/c3RvcmFnZXV0di5yY3MtcmRzLnJvJTJG/c3RvcmFnZSUyRjIwMTklMkYxMiUyRjEw/JTJGMTE0MTkwM18xMTQxOTAzX2JhYnl5/eS5qcGcmdz04MDAmaD00ODAmaGFzaD1m/ZmVhYjg4NTNmMWFkN2U2Mzc3Y2VjMmI5NmYyNzVmNw==.thumb.jpg';

    //Creez un obiect cu toate informatiile relevante
    let TransmitInformatii = { titleEvent, matchPercentage, dateEvent, deUndeVinePoza, description, dateStartString, dateEndString };



    var matchPercentageColor;
    if (matchPercentage < 50)
        matchPercentageColor = "#ffb84d";
    else if (matchPercentage < 75)
        matchPercentageColor = "#bfff80";
    else
        matchPercentageColor = "#1a6600";

    //console.log("Poza vine de la ", deUndeVinePoza);
    return (
        <View style={styles.container}>
            <TouchableOpacity onPress={() => { navigation.navigate({ routeName: 'DetailPost', params: { skill: TransmitInformatii } }) }}>
                <Image source={{
                    uri: deUndeVinePoza
                }} style={styles.imageStyle} />
            </TouchableOpacity>
            <Text>{titleEvent} </Text>
            <Text> {dateStartString} - {dateEndString}</Text>

        </View>)




}

const styles = StyleSheet.create({
    container: {
        backgroundColor: 'white',
        
        marginHorizontal: 0,
        marginVertical: 0,
        flexDirection: 'row',
        justifyContent: 'space-between',
        
    },
    imageStyle: {
        height: 100,
        width: 100,
       // resizeMode: 'stretch',
        paddingLeft:20,
    },
    textsize: {

        flexDirection: 'row',
        flex: 1,
        justifyContent: 'space-between',


    },
    butonActiune: {
        backgroundColor: '#e6ecff',
        borderRadius: 50,
        fontSize: 18,
        padding: 15
    },
    likeSection: {
        justifyContent: 'space-between',
        flexDirection: 'row',
        paddingHorizontal: 50,
        paddingTop: 10,
        borderTopWidth: 1,
        paddingBottom: 10,
        borderBottomColor: 'black',
        borderBottomWidth: 1,

    }







});

export default withNavigation(CalendarPostComponent);
