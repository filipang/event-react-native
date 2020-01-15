import React, { memo } from "react";
import { View } from "react-native";
import Text from '../components/Text'
import Block from '../components/Block'
import Button from "../components/Button";

const HomeScreen = ({ navigation }) => {
  return(
  <View>
  <Block flex center>

  <Text h3 style={{marginBottom: 6, marginTop: 80}}>Welcome to eVent</Text>
   <Text paragraph color="black3">Find all your events. In one place.</Text>
   
   <Block center style={{marginTop: 300}}>
   <Button
   onPress={() => navigation.navigate("RegisterScreen")}
   full
   style={{marginBottom : 12}}
   >
     <Text button>Sign Up</Text>
   </Button>

   <Button
   onPress={() => navigation.navigate("LoginScreen")}
   full
   style={{marginBottom : 12}}
   >
     <Text button>Login</Text>
   </Button>
   </Block>
   </Block>
    </View>
  )};

export default memo(HomeScreen);
