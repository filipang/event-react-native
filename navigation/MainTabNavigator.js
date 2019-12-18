import React from 'react';
import { Platform } from 'react-native';
import { createStackNavigator, createBottomTabNavigator } from 'react-navigation';
import TabBarIcon from '../components/TabBarIcon';
import SettingsScreen from '../screens/SettingsScreen';
import PostDetails from '../screens/PostDetails';
import TestScrin from '../screens/TestScrin';
import CalendarScreen from '../screens/CalendarScreen';


const config = Platform.select({
  web: { headerMode: 'screen' },
    default: {headerMode:'none'},
});

const HomeStack = createStackNavigator(
    {
        Home: TestScrin,
        PostFullscreen: CalendarScreen,
        DetailPost: PostDetails,
  },
  config
);

HomeStack.navigationOptions = {
  
  tabBarLabel: 'Home',
  tabBarIcon: ({ focused }) => (
    <TabBarIcon
      focused={focused}
      name={
        Platform.OS === 'ios'
          ? `ios-information-circle${focused ? '' : '-outline'}`
          : 'md-information-circle'
      }
    />
  ),
};

HomeStack.path = '';
//Aici inclocuieste tu serban
const LinksStack = createStackNavigator(
    {
        Links: CalendarScreen,
  },
  config
);

LinksStack.navigationOptions = {
  tabBarLabel: 'Search',
  tabBarIcon: ({ focused }) => (
    <TabBarIcon focused={focused} name={Platform.OS === 'ios' ? 'ios-link' : 'md-link'} />
  ),
};

LinksStack.path = '';

const SettingsStack = createStackNavigator(
  {
        Settings: SettingsScreen,
  },
  config
);

SettingsStack.navigationOptions = {
    
  tabBarLabel: 'Settings',
  tabBarIcon: ({ focused }) => (
    <TabBarIcon focused={focused} name={Platform.OS === 'ios' ? 'ios-options' : 'md-options'} />
  ),
};

SettingsStack.path = '';

const tabNavigator = createBottomTabNavigator({
  HomeStack,
  LinksStack,
  SettingsStack,
});

tabNavigator.path = '';

export default tabNavigator;
