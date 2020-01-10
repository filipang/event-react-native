import React, { memo } from "react";
import { ActivityIndicator } from "react-native";
import firebase from "firebase";
import "firebase/auth";
import * as theme from '../components/theme'
import Block from '../components/Block'

// Initialize Firebase

const AuthLoadingScreen = ({ navigation }) => {
  firebase.auth().onAuthStateChanged(user => {
    if (user) {
      // User is logged in
      navigation.navigate("Dashboard");
    } else {
      // User is not logged in
      navigation.navigate("HomeScreen");
    }
  });

  return (
    <Block center middle>
      <ActivityIndicator size="large" color={theme.colors.blue} />
    </Block>
  );
};

export default memo(AuthLoadingScreen);
