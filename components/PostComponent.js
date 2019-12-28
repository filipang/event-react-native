import React from 'react';
import { Text, StyleSheet, View, Image, Alert } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { AntDesign, MaterialCommunityIcons } from '@expo/vector-icons';
import { withNavigation } from 'react-navigation';



const PostComponent = ({ navigation, titleEvent, matchPercentage, dateEvent, deUndeVinePoza, description, startDate, endDate }) => {
    //Editez data sa arate frumos
    let dataStart = new Date(startDate * 1000);
    let dataEnd = new Date(endDate * 1000);
    var options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
    let dateStartString = dataStart.toLocaleDateString("en-US", options);
    let dateEndString = dataEnd.toLocaleDateString("en-US", options);
    //Verific daca uri:null
    if (deUndeVinePoza == '')
        deUndeVinePoza = 'https://s.iw.ro/gateway/g/ZmlsZVNvdXJjZT1odHRwJTNBJTJGJTJG/c3RvcmFnZXV0di5yY3MtcmRzLnJvJTJG/c3RvcmFnZSUyRjIwMTklMkYxMiUyRjEw/JTJGMTE0MTkwM18xMTQxOTAzX2JhYnl5/eS5qcGcmdz04MDAmaD00ODAmaGFzaD1m/ZmVhYjg4NTNmMWFkN2U2Mzc3Y2VjMmI5NmYyNzVmNw==.thumb.jpg';

    //Creez un obiect cu toate informatiile relevante
    let TransmitInformatii = { titleEvent, matchPercentage, dateEvent, deUndeVinePoza, description, dateStartString, dateEndString};
    
    

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
            <View style={{height: 65}}>
                <View style={{ flexDirection: 'row', justifyContent: 'space-between'}}>
                    <Text style={{ color: 'black', fontSize: 15, marginHorizontal: 5 }}> {titleEvent}</Text>
                    <Text style={{ color: matchPercentageColor, fontSize: 25, marginHorizontal: 10 }}>{matchPercentage}%</Text>
                    
                </View>
                <View style={{ flexDirection: 'column' }}>
                    <Text style={{ color: 'black', fontSize: 10, marginHorizontal: 5 }}>{dateStartString} - {dateEndString}</Text>
                </View>
            </View>
            
            <TouchableOpacity onPress={() => { navigation.navigate({ routeName: 'DetailPost', params: { skill: TransmitInformatii } }) }}>           
                <Image source={{
                    uri: deUndeVinePoza}} style={styles.imageStyle}/>
            </TouchableOpacity>

            <View style={styles.likeSection}>
                <TouchableOpacity onPress={() => {
                    Alert.alert(
                        'Alert Title',
                        'Eveniment adaugat cu succes in calendar.',
                        [
                            { text: 'Vezi Calendarul', onPress: () => { navigation.navigate({ routeName: 'PostFullscreen', params: { skill: TransmitInformatii } }) }  },                            
                            { text: 'OK', onPress: () => console.log('OK Pressed') },
                        ],
                        { cancelable: true },
                    );}}>
                    <AntDesign name='calendar' size={30}></AntDesign>
                </TouchableOpacity> 

                <TouchableOpacity>
                    <MaterialCommunityIcons name='map-marker-plus' size={30}></MaterialCommunityIcons>
                </TouchableOpacity> 
                             
            </View>
            <TouchableOpacity onPress={() => { navigation.navigate({ routeName: 'Links', params: { skill: TransmitInformatii}})}} style={{ paddingVertical: 10, fontSize: 16 }}>
                <Text>{description} ...</Text>
            </TouchableOpacity>
        </View>)


   

}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#fff2f2',
        borderRadius: 5,
        marginHorizontal: 0,
        marginVertical:0,
    },
    imageStyle: {
        height: 400,
        width: 400,
        resizeMode: 'stretch',
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

export default withNavigation(PostComponent);


    
