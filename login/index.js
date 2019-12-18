import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";

import {
  HomeScreen,
  LoginScreen,
  RegisterScreen,
  ForgotPasswordScreen,
  AuthLoadingScreen,
  Dashboard
} from "./screens";

import AppNavigator from '../navigation/AppNavigator'

const Router = createStackNavigator(
  {
    HomeScreen,
    LoginScreen,
    RegisterScreen,
    ForgotPasswordScreen,
    Dashboard,
    AuthLoadingScreen,
    AppNavigator
  },
  {
    initialRouteName: "AuthLoadingScreen",
    headerMode: "none"
  }
);

export default createAppContainer(Router);

