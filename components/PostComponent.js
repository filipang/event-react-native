import React from 'react';
import { Text, StyleSheet, View, Image, Alert } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { AntDesign, MaterialCommunityIcons } from '@expo/vector-icons';
import { withNavigation } from 'react-navigation';


const PostComponent = ({ navigation, titleEvent, matchPercentage, dateEvent, deUndeVinePoza, description}) => {
    let TransmitInformatii = { titleEvent, matchPercentage, dateEvent, deUndeVinePoza, description};
    //console.log( TransmitInformatii.description );
    var matchPercentageColor;
    if (matchPercentage < 50)
        matchPercentageColor = "#ffb84d";
    else if (matchPercentage < 75)
        matchPercentageColor = "#bfff80";
    else
        matchPercentageColor = "#1a6600";

    console.log("Poza vine de la ", deUndeVinePoza);
    return (
        <View style={styles.container}>
            <View style={{height: 65}}>
                <View style={{ flexDirection: 'row', justifyContent: 'space-between'}}>
                    <Text style={{ color: 'black', fontSize: 15, marginHorizontal: 5 }}> {titleEvent}</Text>
                    <Text style={{ color: matchPercentageColor, fontSize: 25, marginHorizontal: 10 }}>{matchPercentage}%</Text>
                    
                </View>
                <View style={{ flexDirection: 'column' }}>
                    <Text style={{ color: 'black', fontSize: 10, marginHorizontal: 5 }}>{dateEvent}</Text>
                </View>
            </View>
            
            <TouchableOpacity onPress={() => { navigation.navigate({ routeName: 'Links', params: { skill: TransmitInformatii } }) }}>           
                <Image source={{
                    uri: deUndeVinePoza}} style={styles.imageStyle}/>
            </TouchableOpacity>

            <View style={styles.likeSection}>
                <TouchableOpacity onPress={() => {Alert.alert("Eveniment adugat la calendar.") }}>
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
        borderRadius: 20,
        marginHorizontal: 5,
        marginVertical:30,
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


    
