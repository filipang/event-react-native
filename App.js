import { AppLoading } from 'expo';
import { Asset } from 'expo-asset';
import * as Font from 'expo-font';
import React, { useState } from 'react';
import { Platform, StatusBar, StyleSheet, View } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import firebase from 'firebase';
import ScreenSerban from './login';
import AppNavigator from './navigation/AppNavigator';

/// FIRESTORE INITIALIZATION

require('firebase/firestore');
firebase.initializeApp({
    "projectId": "event-dd4b9",
    "apiKey": "AIzaSyBZ5GWPcuhxxjG1EgwNZtLgMbNrL1HuS5E",
    "authDomain": "event-dd4b9.firebaseapp.com",
    "databaseURL": "https://event-dd4b9.firebaseio.com",
    "storageBucket": "event-dd4b9.appspot.com/",
    "messagingSenderId": "93847099331"
})
const db = firebase.firestore();
export const database = db;

///
export default function App(props) {
  const [isLoadingComplete, setLoadingComplete] = useState(false);

  if (!isLoadingComplete && !props.skipLoadingScreen) {
    return (
      <AppLoading
        startAsync={loadResourcesAsync}
        onError={handleLoadingError}
        onFinish={() => handleFinishLoading(setLoadingComplete)}
      />
    );
  } else {
    return (
      <View style={styles.container}>
            {Platform.OS === 'ios' && <StatusBar barStyle="default" />}
            <ScreenSerban />
      </View>
    );
  }
}

async function loadResourcesAsync() {
  await Promise.all([
    Asset.loadAsync([
      require('./assets/images/robot-dev.png'),
      require('./assets/images/robot-prod.png'),
    ]),
    Font.loadAsync({
      // This is the font that we are using for our tab bar
      ...Ionicons.font,
      // We include SpaceMono because we use it in HomeScreen.js. Feel free to
      // remove this if you are not using it in your app
      'space-mono': require('./assets/fonts/SpaceMono-Regular.ttf'),
    }),
  ]);
}

function handleLoadingError(error) {
  // In this case, you might want to report the error to your error reporting
  // service, for example Sentry
  console.warn(error);
}

function handleFinishLoading(setLoadingComplete) {
  setLoadingComplete(true);
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});
