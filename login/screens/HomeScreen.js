import React, { memo } from "react";
import { Platform } from "react-native";
import 
Text from '../components/Text'
import Block from '../components/Block'
import Button from "../components/Button";
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'

const HomeScreen = ({ navigation }) => {
  return(
  <KeyboardAwareScrollView  enableOnAndroid={true}
  enableAutomaticScroll={(Platform.OS === 'ios')}
  style={{ marginVertical: 40 }} showsVerticalScrollIndicator={false}>
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
   </KeyboardAwareScrollView>
  )};

export default memo(HomeScreen);
