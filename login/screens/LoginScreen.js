import React, { memo, useState } from "react";
import { StyleSheet, Dimensions, View } from "react-native";
import Text from '../components/Text'
import BackButton from "../components/BackButton";
import { theme } from "../core/theme";
import { emailValidator, passwordValidator } from "../core/utils";
import { loginUser } from "../api/auth-api";
import Toast from "../components/Toast";
import Block from '../components/Block';
import Input from '../components/Input'
import Button from '../components/Button'


const { height } = Dimensions.get('window');
const LoginScreen = ({ navigation }) => {
  const [email, setEmail] = useState({ value: "", error: "" });
  const [password, setPassword] = useState({ value: "", error: "" });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const _onLoginPressed = async () => {
    if (loading) return;

    const emailError = emailValidator(email.value);
    const passwordError = passwordValidator(password.value);

    if (emailError || passwordError) {
      setEmail({ ...email, error: emailError });
      setPassword({ ...password, error: passwordError });
      return;
    }

    setLoading(true);

    const response = await loginUser({
      email: email.value,
      password: password.value
    });

    if (response.error) {
      setError(response.error);
    }

    setLoading(false);
  };

  return (
    <View>



    <Block flex center>

      <BackButton goBack={() => navigation.navigate("HomeScreen")} />

        <Text h3 style={{marginBottom: 6, marginTop: 48}}>
          Sign in to eVent
        </Text>
      
      <Block center style={{marginTop: 25}}>
      <Input
        style={{marginBottom: 25}}
        full
        label="Email"
        returnKeyType="next"
        value={email.value}
        onChangeText={text => setEmail({ value: text, error: "" })}
        error={!!email.error}
        errorText={email.error}
        autoCapitalize="none"
        autoCompleteType="email"
        textContentType="emailAddress"
        keyboardType="email-address"
      />

      <Input
        style={{marginBottom: 25}}
        full
        label="Password"
        returnKeyType="done"
        value={password.value}
        onChangeText={text => setPassword({ value: text, error: "" })}
        error={!!password.error}
        errorText={password.error}
        secureTextEntry
        autoCapitalize="none"
        rightLabel={
          <Text paragraph color="gray" onPress={() => navigation.navigate("ForgotPasswordScreen")}>
          Forgot your password?
          </Text>
        }
      />

    
         
      <Button full style={{marginBottom: 12}} loading={loading} mode="contained" onPress={_onLoginPressed}>
        <Text button>Login</Text>
      </Button>

      <Text paragraph color="gray">Don't have an account?
      <Text color="blue" onPress={()=> navigation.navigate('RegisterScreen')}>
        Sign Up.</Text></Text>

      <Toast message={error} onDismiss={() => setError("")} />
      
      </Block>
      </Block>
      </View>
      
);
};

const styles = StyleSheet.create({
  forgotPassword: {
    width: "100%",
    alignItems: "flex-end",
    marginBottom: 24
  },
  row: {
    flexDirection: "row",
    marginTop: 4
  },
  label: {
    color: theme.colors.secondary
  },
  link: {
    fontWeight: "bold",
    color: theme.colors.primary
  }
});

export default memo(LoginScreen);
